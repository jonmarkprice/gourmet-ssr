"use strict";

const ppath = require("path").posix;
const isAbsUrl = require("is-absolute-url");
const parseHref = require("@gourmet/parse-href");

// Note that `this` is bound to gmctx, not HtmlServerRenderer instance.
module.exports = function selfUrl(gmctx, url) {
  function _proto() {
    let xfp = gmctx.reqArgs.headers["x-forwarded-proto"];

    if (xfp) {
      // 'x-forwarded-proto' must be a single value no matter how many proxies
      // were involved before reaching this host. But some proxies send comma
      // separated multiple values like 'x-forwarded-for'.
      const idx = xfp.indexOf(",");

      if (idx !== -1)
        xfp = xfp.substr(0, idx);

      xfp = xfp.trim().toLowerCase();

      if (xfp === "http" || xfp === "https")
        return xfp;
    }

    return gmctx.reqArgs.encrypted ? "https" : "http";
  }

  function _host() {
    let xfh = gmctx.reqArgs.headers["x-forwarded-host"];

    if (xfh) {
      // 'x-forwarded-host' must be a single value no matter how many proxies
      // were involved before reaching this host. But some proxies send comma
      // separated multiple values like 'x-forwarded-for'.
      const idx = xfh.indexOf(",");

      if (idx !== -1)
        xfh = xfh.substr(0, idx);

      xfh = xfh.trim().toLowerCase();

      if (xfh)
        return xfh;
    }

    const host = gmctx.reqArgs.headers.host;

    if (!host)
      throw Error("There is no 'host' or 'x-forwarded-host' header.");

    return host;
  }

  if (!gmctx.isServer)
    return url;

  if (isAbsUrl(url))
    return url;   // already absolute

  if (url.startsWith("//"))     // protocol relative ("//example.com")
    return _proto() + ":" + url;

  if (url[0] !== "/") {   // relative path based on the current path
    const path = parseHref(gmctx.reqArgs.url).path;
    if (path.endsWith("/"))
      url = ppath.join(path, url);
    else
      url = ppath.join(ppath.dirname(path), url);
  }

  return _proto() + "://" + _host() + url;
};
