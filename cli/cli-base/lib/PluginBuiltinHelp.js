"use strict";

class PluginBuiltinHelp {
  constructor() {
  }

  _onHelp() {
    console.log("TODO: show help!");
  }
}

PluginBuiltinHelp.meta = {
  name: "@gourmet/cli-base/builtin-help",
  commands: {
    help: {}
  },
  hooks: {
    "command:help": PluginBuiltinHelp.prototype._onHelp
  }
};

module.exports = PluginBuiltinHelp;