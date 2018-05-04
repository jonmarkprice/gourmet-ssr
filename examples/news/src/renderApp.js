import React, {PureComponent} from "react";
import {hot} from "react-hot-loader";
import Articles from "./Articles";

const data = {"status":"ok","totalResults":20,"articles":[{"source":{"id":null,"name":"Khon2.com"},"author":"Sara Mattison and Web Staff","title":"Residents urged to prepare for possible eruption of Kilauea Volcano","description":"Ground shaking from the quake caused rockfalls and possibly additional collapse into the Puu Oo crater on Kilauea Volcano's East Rift Zone.","url":"http://www.khon2.com/news/local-news/agencies-prepare-for-possible-eruption-from-kilauea-volcano/1155831630","urlToImage":"https://media.khon2.com/nxs-khontv-media-us-east-1/photo/2018/05/03/Lava_plume__James_Paolella_Laa__0_41577933_ver1.0_1280_720.jpg","publishedAt":"2018-05-04T02:21:01Z"},{"source":{"id":"cnn","name":"CNN"},"author":"Rebecca Berg, CNN","title":"Missouri lawmakers seeking special session for impeachment proceedings against Greitens","description":"Missouri House and Senate leaders announced Thursday night that they have gathered enough support from lawmakers to call the state legislature into a special session for impeachment proceedings against Gov. Eric Greitens.","url":"https://www.cnn.com/2018/05/03/politics/missouri-lawmakers-special-session-greitens-impeachment/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/180223134243-08-week-in-politics-0225-restricted-super-tease.jpg","publishedAt":"2018-05-04T02:08:00Z"},{"source":{"id":null,"name":"Latimes.com"},"author":"Associated Press","title":"DNA match sought to Zodiac Killer after break in Golden State Killer case","description":"Several months ago, the Vallejo Police Department sent two letters written by the Zodiac Killer to a private lab in hopes of finding his DNA on the back of the stamps or envelope flaps that may have been licked. They are expecting results soon.","url":"http://www.latimes.com/local/california/la-me-zodiac-killer-golden-state-20180503-story.html","urlToImage":"http://www.latimes.com/resizer/-ByiFbA0GhUtoNtCRH6dyvVoN5s=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/IGEXGW7XORHADB5XZTQ3ZSP7U4.jpg","publishedAt":"2018-05-04T01:40:07Z"},{"source":{"id":"the-new-york-times","name":"The New York Times"},"author":"Mark Landler","title":"Trump Orders Pentagon to Consider Reducing US Forces in South Korea","description":"A reduction, which Defense Department officials worry would weaken the American alliance with the South, wouldn’t be intended to be a bargaining chip in talks with Kim Jong-un, officials said.","url":"https://www.nytimes.com/2018/05/03/world/asia/trump-troops-south-korea.html","urlToImage":"https://static01.nyt.com/images/2018/05/04/us/politics/04dc-prexy/04dc-prexy-facebookJumbo.jpg","publishedAt":"2018-05-04T01:33:07Z"},{"source":{"id":"the-new-york-times","name":"The New York Times"},"author":"http://www.nytimes.com/by/michael-d-shear, http://www.nytimes.com/by/matt-apuzzo, http://www.nytimes.com/by/maggie-haberman","title":"Giuliani May Have Exposed Trump to New Legal and Political Perils","description":"Some of the president’s advisers said they were surprised by the assertion that he reimbursed a lawyer who paid hush money to a porn actress who said she had an affair with Mr. Trump.","url":"https://www.nytimes.com/2018/05/03/us/politics/giuliani-trump-michael-cohen-stormy-daniels.html","urlToImage":"https://static01.nyt.com/images/2018/05/04/us/politics/04dc-trumpstormy1/04dc-trumpstormy1-facebookJumbo.jpg","publishedAt":"2018-05-04T00:50:42Z"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":null,"title":"West Virginia GOP candidate says McConnell created jobs for 'China people'","description":"Former coal executive Don Blankenship is closing the campaign attacking Washington","url":"https://www.washingtonpost.com/powerpost/west-virginia-gop-candidate-says-mcconnell-created-jobs-for-china-people/2018/05/03/a3fea38a-4f28-11e8-af46-b1d6dc0d9bfe_story.html","urlToImage":"https://www.washingtonpost.com/resizer/szbE6yPRzlkStb-2DDknJ4rS96Y=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EWBCJJCPGMI6RL2GWHLNYDM37Y.jpg","publishedAt":"2018-05-04T00:48:28Z"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Reuters","title":"Mnuchin says having good conversations in China","description":"U.S. Treasury Secretary Steve Mnuchin said on Friday a trade delegation he is leading in China has been having very good conversations.","url":"https://www.cnbc.com/2018/05/03/mnuchin-leads-us-trade-delegation-in-beijing-china.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/05/03/105181177-RTS1PN3A.1910x1000.jpg","publishedAt":"2018-05-04T00:48:00Z"},{"source":{"id":null,"name":"Latimes.com"},"author":"James Queally","title":"Suspect in wild motor home pursuit is arrested, police say","description":"Stephen Houk, a 46-year-old who led police on a wild chase from Los Angeles to Kern County in a motor home with two children inside, has been arrested, police say.","url":"http://www.latimes.com/local/lanow/la-me-ln-rv-pursuit-suspect-captured-20180503-story.html","urlToImage":"http://www.latimes.com/resizer/Zpfl9zBa7VdmpRMm8zVOw1Z-qcQ=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/52TBB3NLAFHBHOPHHC3W55FRRE.jpg","publishedAt":"2018-05-04T00:37:33Z"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"https://www.facebook.com/timbontempsnba","title":"NBA playoffs live: Kevin Love's strong play has the Cavs in good shape; Knicks hire David Fizdale","description":"Can Toronto and Philadelphia steal one on the road to even up these series?","url":"https://www.washingtonpost.com/news/sports/wp/2018/05/03/nba-playoffs-live-game-2-cavaliers-raptors-76ers-celtics/","urlToImage":"https://www.washingtonpost.com/resizer/ELCPgw9OlBHffHE9hlerZLLWSYs=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZXKMINEVMM56XBYKDGQA57JIOA.jpg","publishedAt":"2018-05-03T23:37:30Z"},{"source":{"id":"entertainment-weekly","name":"Entertainment Weekly"},"author":"Joey Nolfi","title":"Janice Dickinson 'delighted' at Bill Cosby's expulsion from Academy","description":"","url":"http://ew.com/movies/2018/05/03/janice-dickinson-bill-cosby-academy-expulsion/","urlToImage":"https://ewedit.files.wordpress.com/2018/05/gettyimages-945321770.jpg?crop=0px%2C0px%2C2700px%2C1417.5px&resize=1200%2C630","publishedAt":"2018-05-03T23:01:09Z"},{"source":{"id":"cnn","name":"CNN"},"author":"Sara Sidner and Maeve Reston, CNN","title":"Democratic Rep. Tony Cardenas denies allegation he sexually assaulted 16-year-old girl in 2007","description":"Democratic Rep. Tony Cardenas of California is vehemently denying accusations that he sexually assaulted a 16-year-old girl in 2007.","url":"https://www.cnn.com/2018/05/03/politics/tony-cardenas-denies-allegations/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/180503172012-rep-tony-cardenas-super-tease.jpg","publishedAt":"2018-05-03T22:15:33Z"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"https://www.facebook.com/paul.kane.3367","title":"In a reversal, Speaker Ryan says the House chaplain will remain in his post","description":"The Rev. Patrick J. Conroy, a Catholic priest, said in a letter that he gave in to pressure from the speaker’s staff. He will now remain in his position until year’s end.","url":"https://www.washingtonpost.com/politics/house-chaplain-rescinds-resignation-after-furor-over-his-ouster-by-ryan/2018/05/03/b770de7c-4f07-11e8-84a0-458a1aa9ac0a_story.html","urlToImage":"https://www.washingtonpost.com/resizer/fcBjJ5-cVNfTynnFBIL0rVMX9pE=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5KQ33RSPBMI6RL2GWHLNYDM37Y.jpg","publishedAt":"2018-05-03T22:12:56Z"},{"source":{"id":"usa-today","name":"USA Today"},"author":"Lily Altavena, Richard Ruelas, Rachel Leingang","title":"Arizona teachers head back to school, get pay raise in budget bill that governor signed Thursday","description":"Gov. Doug Ducey signed an education budget bill that gives the educators some of what they want. But they get no guarantee that their school districts will use the state money toward a 20% salary increase.","url":"https://www.usatoday.com/story/news/politics/2018/05/03/arizona-teachers-strike-walkout-ends/577803002/","urlToImage":"https://www.gannett-cdn.com/-mm-/723e8403d4b47fb9ceef02f196583852f099ca12/c=0-97-3203-1907&r=x1683&c=3200x1680/local/-/media/2018/05/03/Phoenix/Phoenix/636609548671191816-RedForEd-3.jpg","publishedAt":"2018-05-03T22:10:00Z"},{"source":{"id":"usa-today","name":"USA Today"},"author":"Eli Blumenthal","title":"Twitter advises 336 million users to change their passwords. Here's how you can.","description":"It recently found a bug that stores passwords, unmasked, in an internal log","url":"https://www.usatoday.com/story/tech/news/2018/05/03/twitter-tells-all-users-change-your-password/578864002/","urlToImage":"https://www.gannett-cdn.com/-mm-/9a2b6bc0c85a21e3e2141fae41e9fdf403830e37/c=0-204-3000-1899&r=x1683&c=3200x1680/local/-/media/2016/12/21/USATODAY/USATODAY/636179288177734609-GTY-185862379.jpg","publishedAt":"2018-05-03T22:00:02Z"},{"source":{"id":"cnn","name":"CNN"},"author":"Dakin Andone and Nick Valencia, CNN","title":"One person fatally shot at Nashville mall; suspect in custody","description":"One person has died after sustaining injuries in a shooting at the Opry Mills mall in Nashville, police said at a press conference Thursday.","url":"https://www.cnn.com/2018/05/03/us/nashville-opry-mills-mall/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/180503160205-01-opry-mills-0503-screengrab-super-tease.jpg","publishedAt":"2018-05-03T21:56:00Z"},{"source":{"id":"cnn","name":"CNN"},"author":"Gregory Wallace and Sara Ganim, CNN","title":"Pruitt reimbursed himself $65000 from Oklahoma attorney general campaign","description":"A CNN analysis has found that embattled Environmental Protection Agency Administrator Scott Pruitt paid himself nearly $65,000 in reimbursements from his two campaigns for Oklahoma attorney general, a move at least one election watchdog has sharply criticized…","url":"https://www.cnn.com/2018/05/03/politics/epa-scott-pruitt-campaign-reimbursements/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/180502131334-04-pruitt-04-26-2018-super-tease.jpg","publishedAt":"2018-05-03T21:44:25Z"},{"source":{"id":null,"name":"Latimes.com"},"author":"Nardine Saad","title":"Céline Dion promises her 'Deadpool 2' video will have you laughing your 'Ashes' off","description":"Ryan Reynolds’ Deadpool and pop star Céline Dion team up for dramatic 'Ashes' concert video for \"Deadpool 2.\"","url":"http://www.latimes.com/entertainment/la-et-entertainment-news-updates-2018-c-line-dion-promises-her-deadpool-2-1525381781-htmlstory.html","urlToImage":"http://www.latimes.com/resizer/kvP2jcc6-s2JPi7GWY5yjnQlA7Y=/1200x0/www.trbimg.com/img-5ae0b617/turbine/la-1524676116-cvfxd5a30z-snap-image/","publishedAt":"2018-05-03T21:11:47Z"},{"source":{"id":"cnn","name":"CNN"},"author":"Kevin Liptak and Daniel Burke, CNN","title":"Trump silent on porn star payment storm at National Day of Prayer","description":"The fresh admission that he had reimbursed his attorney for a porn star's hush payment did not deter President Donald Trump from heralding his commitment to religious faith in the Rose Garden on Thursday.","url":"https://www.cnn.com/2018/05/03/politics/trump-prayer-rose-garden/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/180307113630-01-donald-trump-stormy-daniels-split-super-tease.jpg","publishedAt":"2018-05-03T19:54:18Z"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":null,"title":"A serial pooper targeted a NJ high school track. It was a school superintendent.","description":"Clean up on Lane 3.","url":"https://www.washingtonpost.com/news/early-lead/wp/2018/05/03/a-serial-pooper-targeted-a-n-j-high-school-track-it-was-the-school-superintendent/","urlToImage":"https://www.washingtonpost.com/resizer/a5Jz9CCyTu69vxrQULH6-ZVloFc=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P4MVBFRIEY2K7OQ22KCZWBLMJY.jpg","publishedAt":"2018-05-03T19:51:59Z"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":null,"title":"US accuses China of directing blinding lasers at American military aircraft in Djibouti","description":"Pentagon spokeswoman calls incidents \"a serious matter.\"","url":"https://www.washingtonpost.com/news/checkpoint/wp/2018/05/03/u-s-accuses-china-of-directing-blinding-lasers-at-american-military-aircraft-in-djibouti/","urlToImage":"https://www.washingtonpost.com/resizer/add52rsQJQxAaESf_AGAu1C20EU=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YII3F5XCKQ7X3OBNSSGJYNUYIM.jpg","publishedAt":"2018-05-03T19:35:02Z"}]};

class News extends PureComponent {
  render() {
    return (
      <div className="container">
        <Articles articles={data.articles}/>
      </div>
    );
  }
}

const NewsApp = hot(module)(News);

export default function renderApp() {
  return <NewsApp/>;
}
