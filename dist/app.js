(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const {timeFunction, sample, randomInt} = require("./util");
const filterDuplicate = require("./filter-duplicate");
const defaultEmailList = require("./default-email-list");

const $ = document.querySelector.bind(document);

// cache elements
const elements = {
  filterButton: $(".filter-button"),
  emailInput: $(".email-input"),
  filteredEmailOutput: $(".filtered-email-output"),
  filterTimeOutput: $(".filter-time-output")
};

// render default email list
elements.emailInput.value = defaultEmailList.join(",\n");

elements.filterButton.addEventListener("click", () => {
  const inputEmailList = elements.emailInput.value
    .split(",")
    .map((s) => s.trim()) // cut off whitespace
    .filter((s) => s.length > 0); // remove blank lines


  const {result, elapsed} = timeFunction(() => filterDuplicate(inputEmailList));

  elements.filteredEmailOutput.value = result.join(",\n");
  elements.filterTimeOutput.textContent = `Completed in ${elapsed}ms`;
});

},{"./default-email-list":2,"./filter-duplicate":3,"./util":4}],2:[function(require,module,exports){
module.exports=[
  "bharris0@admin.ch",
  "hfernandez1@admin.ch",
  "cnicholsl@tinypic.com",
  "rhoward2@google.com.hk",
  "bharris0@admin.ch",
  "salvarez1p@bing.com",
  "cmiller3@slideshare.net",
  "cnicholsl@tinypic.com",
  "tdiaz4@prweb.com",
  "hfernandez1@admin.ch",
  "iperry5@omniture.com",
  "jfergusony@examiner.com",
  "aadams6@ocn.ne.jp",
  "smendoza7@taobao.com",
  "adiaz8@buzzfeed.com",
  "dgriffin9@mapquest.com",
  "vvasquezc@de.vu",
  "iperry5@omniture.com",
  "pschmidta@youtu.be",
  "hfernandez1@admin.ch",
  "jhart1b@bigcartel.com",
  "smorrisonb@homestead.com",
  "cfergusong@google.co.jp",
  "hfernandez1@admin.ch",
  "vvasquezc@de.vu",
  "adiaz8@buzzfeed.com",
  "mrichardsd@upenn.edu",
  "ataylort@pcworld.com",
  "jharte@cocolog-nifty.com",
  "mhowardq@squarespace.com",
  "cgrahami@ed.gov",
  "dmitchellf@instagram.com",
  "mwoods1e@independent.co.uk",
  "cfergusong@google.co.jp",
  "afrazierh@bbb.org",
  "cgrahami@ed.gov",
  "rstevensj@who.int",
  "alynch1x@elpais.com",
  "crussellk@addthis.com",
  "smendoza7@taobao.com",
  "dmitchellf@instagram.com",
  "cnicholsl@tinypic.com",
  "gbaileym@yellowpages.com",
  "kaustinn@oracle.com",
  "apalmer28@hao123.com",
  "rortizp@hc360.com",
  "lbarnes1j@xing.com",
  "tscotto@icq.com",
  "smendoza7@taobao.com",
  "rortizp@hc360.com",
  "jwright2k@gov.uk",
  "mhowardq@squarespace.com",
  "cbutlerr@51.la",
  "dwilliamss@rediff.com",
  "ataylort@pcworld.com",
  "aadams6@ocn.ne.jp",
  "rcampbell1f@nps.gov",
  "naustin1w@google.com",
  "jhart1b@bigcartel.com",
  "lbarnes1j@xing.com",
  "fburkeu@wired.com",
  "elopezv@miitbeian.gov.cn",
  "atorresw@deliciousdays.com",
  "mhowardq@squarespace.com",
  "jbennett19@reverbnation.com",
  "ethompsonx@zdnet.com",
  "jfergusony@examiner.com",
  "cmatthewsz@umich.edu",
  "lgreen12@toplist.cz",
  "hnelson1h@earthlink.net",
  "lriley10@hostgator.com",
  "lrodriguez2l@xrea.com",
  "mmurray11@businesswire.com",
  "lgreen12@toplist.cz",
  "bperez13@theatlantic.com",
  "jkelley1s@parallels.com",
  "mwoods1e@independent.co.uk",
  "tscotto@icq.com",
  "klewis14@icq.com",
  "dmarshall15@hhs.gov",
  "mhenderson16@mediafire.com",
  "epalmer17@webnode.com",
  "sbryant18@liveinternet.ru",
  "smendoza7@taobao.com",
  "cgrahami@ed.gov",
  "kdavis1l@weather.com",
  "cbutlerr@51.la",
  "awright1o@1und1.de",
  "jbennett19@reverbnation.com",
  "cwright1a@jalbum.net",
  "jhart1b@bigcartel.com",
  "rwilliams1c@tumblr.com",
  "aramirez1d@pcworld.com",
  "rstevensj@who.int",
  "mwoods1e@independent.co.uk",
  "cthompson1z@pbs.org",
  "rcampbell1f@nps.gov",
  "ldunn1g@prweb.com",
  "hnelson1h@earthlink.net",
  "cmatthews1i@github.com",
  "dgriffin9@mapquest.com",
  "lbarnes1j@xing.com",
  "mreyes1m@imgur.com",
  "smendoza7@taobao.com",
  "mrichardsd@upenn.edu",
  "dhansen1k@cnn.com",
  "kdavis1l@weather.com",
  "mreyes1m@imgur.com",
  "jrodriguez1n@indiatimes.com",
  "awright1o@1und1.de",
  "salvarez1p@bing.com",
  "tjohnston1q@canalblog.com",
  "lbarnes1j@xing.com",
  "jlopez1r@forbes.com",
  "dmitchellf@instagram.com",
  "jkelley1s@parallels.com",
  "epalmer17@webnode.com",
  "acarr1t@livejournal.com",
  "dcunningham1u@dmoz.org",
  "jkelley1s@parallels.com",
  "jwhite1v@discuz.net",
  "naustin1w@google.com",
  "alynch1x@elpais.com",
  "crodriguez1y@sogou.com",
  "cthompson1z@pbs.org",
  "lcoleman20@delicious.com",
  "hvasquez21@desdev.cn",
  "vvasquezc@de.vu",
  "jramos22@techcrunch.com",
  "agonzales23@dot.gov",
  "aprice24@unesco.org",
  "earnold25@is.gd",
  "wwilliamson26@psu.edu",
  "rdixon27@deviantart.com",
  "smendoza7@taobao.com",
  "naustin1w@google.com",
  "apalmer28@hao123.com",
  "ksanchez29@mac.com",
  "sbryant18@liveinternet.ru",
  "dhudson2a@ucsd.edu",
  "naustin1w@google.com",
  "jcooper2b@intel.com",
  "smorrisonb@homestead.com",
  "kbryant2c@samsung.com",
  "lthompson2d@nationalgeographic.com",
  "slittle2e@google.pl",
  "scastillo2f@mail.ru",
  "charvey2g@canalblog.com",
  "tbarnes2h@sogou.com",
  "jwhite2i@joomla.org",
  "mharris2j@i2i.jp",
  "jwright2k@gov.uk",
  "vvasquezc@de.vu",
  "tbarnes2h@sogou.com",
  "lrodriguez2l@xrea.com",
  "sjohnson2m@yellowpages.com",
  "aburke2n@spiegel.de",
  "jallen2o@google.it",
  "rgray2p@tiny.cc",
  "bharris0@admin.ch",
  "cporter2q@list-manage.com",
  "kmorales2r@blogtalkradio.com"
]

},{}],3:[function(require,module,exports){
// takes an array of values and returns a new array with duplicates removed
module.exports = function filterDuplicate(arr) {
  const unique = [];
  const length = arr.length;
  const uniqueLookupMap = {}; // used to quickly lookup whether or not a value has been encountered

  for(let i = 0; i < length; i++) {
    const value = arr[i];
    if(!(value in uniqueLookupMap)) { // check if value is unique
      uniqueLookupMap[value] = true;
      unique.push(value);
    }
  }
  return unique;
}

},{}],4:[function(require,module,exports){
// runs fn and returns an object containing the result and the elapsed time in milliseconds it took to execute (synchronously)
function timeFunction(fn) {
  const startTime = Date.now();
  const result = fn();
  return {
    result,
    elapsed: Date.now() - startTime
  };
}

// returns a random value in arr
function sample(arr) {
  return arr[randomInt(arr.length)];
}

// returns a random integer between 0 and max (inclusive/exclusive)
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  timeFunction,
  sample,
  randomInt
};

},{}]},{},[1]);
