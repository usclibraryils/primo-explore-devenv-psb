(function(){
"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = angular.module('viewCustom', ['angularLoad']);
"use strict";
'use strict';

// IDD Renewal Notice
app.component('prmLoanAfterAppStoreGenerated', {
  bindings: { parentCtrl: '<' },
  controller: function controller($scope) {
    var vm = this;

    this.$onInit = function () {
      angular.forEach(vm, function (ics) {
        if ((typeof ics === 'undefined' ? 'undefined' : _typeof(ics)) === 'object' && ics.hasOwnProperty('item')) {
          if (ics.item.mainlocationcode == "RES_SHARE") {
            ics.item.alerts.push("idd");
            ics.notRenewableReasonsArray[0] = "Please contact the IDD to renew this item.";
            var prmloan = document.querySelectorAll('prm-loan')[ics.index - 1];
            prmloan.querySelectorAll('div.list-item-actions')[0].outerHTML = '<div layout-align="start center" layout="row" flex="20" flex-xs="100" class="list-item-actions layout-align-start-center layout-row flex-xs-100 flex-20"><!----><!----><!----><!----><div class="not-renewable weak-text layout-align-start-center" aria-label="Please contact IDD for renewal" aria-hidden="false" layout-align="start center"><!----><prm-icon ng-if="$ctrl.isNotRenewable" icon-type="svg" svg-icon-set="primo-ui" icon-definition="lock"><!----><md-icon md-svg-icon="primo-ui:lock" role="presentation" class="md-primoExplore-theme"><svg id="lock_cache86" width="100%" height="100%" viewBox="0 0 24 24" y="1320" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"></path></svg></md-icon><!----><!----><prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon><!----><!----><!----><span ng-if="$ctrl.isNotRenewable" translate="nui.loans.idd">Contact IDD for renewal.</span><!----> <!----><div aria-hidden="true" class="md-tooltip-container" aria-label="" md-labeled-by-tooltip="md-tooltip-70"><!----><!----></div><!----><div ng-if="$ctrl.notRenewableReasonsArray.length > 0" class="accessible-only"><span class="popover animate-popover" translate="nui.loans.cannotRenewThisItem">Please contact IDD for renewal</span><br><!----><!----><span ng-if="::$ctrl.isNotRenewableWithCause" class="tooltip-content" ng-repeat="reason in $ctrl.notRenewableReasonsArray | limitTo:2">idd@usc.edu<br></span><!----><!----><!----><span ng-if="::$ctrl.isNotRenewableWithCause" class="tooltip-content" ng-repeat="reason in $ctrl.notRenewableReasonsArray | limitTo:2">Item renew period exceeded<br></span><!----><!----><!----></div><!----></div><!----></div>';
          }
        }
      });
    };
  }
});
//End of IDD Renewal Notice

/*Add Report a Problem Link below Send To*/
app.component('prmActionListAfterAppStoreGenerated', {
  template: '<br><a href="https://libraries.usc.edu/form/need-help-report-problem" referrerpolicy="no-referrer-when-downgrade" target="_blank" style="float:right;" class="md-primoExplore-theme"><b>Need Help? Report a Problem</b></a>'
});
/*End of Add Report a Problem Link below Send To*/
var lc = document.createElement('script');
lc.type = 'text/javascript';
lc.async = 'true';
lc.src = 'https://v2.libanswers.com/load_chat.php?hash=1c9c8f1c98973f6f2d0ca54e7ccfabf9';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(lc, s);
var e = document.createElement('noscript');
e.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKSVLSB" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
document.body.prepend(e);
//START - GA4
var googleAnalyticsUrl = document.createElement('script');
googleAnalyticsUrl.src = "https://www.googletagmanager.com/gtag/js?id=G-CMGZ809JXT";
googleAnalyticsUrl.type = 'text/javascript';
googleAnalyticsUrl.async = true;
document.head.appendChild(googleAnalyticsUrl);

var googleAnalyticsCode = document.createElement('script');
googleAnalyticsCode.innerHTML = 'window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag(\'js\', new Date());\ngtag(\'config\', \'G-CMGZ809JXT\');';
document.head.appendChild(googleAnalyticsCode);

var buttondiv = document.createElement("div");
buttondiv.innerHTML = '<a style="color: rgb(255, 255, 255);display: block;position: absolute;text-align: center;border-width: 0; border-style: solid;" href="https://accessibility.usc.edu/accessibility-at-usc/digital-accessibility/" target="_blank">USC Digital Accessibility</a>';
buttondiv.style = "z-index:255;position:fixed;padding: 0.5em; width:11em;height:2.5em; bottom:0; right:2em; border-color: rgb(255, 255, 255);color: rgb(255, 255, 255);background-color: rgb(153, 0, 0);box-shadow: rgb(204, 204, 204) 0px 0px 5px;border-width: 4px 4px 0px";
document.body.appendChild(buttondiv);
w[l] = w[l] || [];w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
//Auto generated code by primo app store DO NOT DELETE!!! -START-
/*
    hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
    e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
 */
app.controller('ActionListAfterController', [function () {
  var vm = this;
}]);

app.component('prmActionListAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'ActionListAfterController',
  template: '\n    <prm-action-list-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-action-list-after-app-store-generated>\n'

});

//Auto generated code by primo app store DO NOT DELETE!!! -END-

//Auto generated code by primo app store DO NOT DELETE!!! -START-
/*
    hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
    e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
 */
app.controller('LoanAfterController', [function () {
  var vm = this;
}]);

app.component('prmLoanAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'LoanAfterController',
  template: '\n    <prm-loan-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-loan-after-app-store-generated>\n'

});

//Auto generated code by primo app store DO NOT DELETE!!! -END-

//Auto generated code by primo app store DO NOT DELETE!!! -START-
/*
    hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
    e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
 */
app.controller('SearchResultAvailabilityLineAfterController', [function () {
  var vm = this;
}]);

app.component('prmSearchResultAvailabilityLineAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'SearchResultAvailabilityLineAfterController',
  template: '\n    <primo-studio-browzine parent-ctrl="$ctrl.parentCtrl"></primo-studio-browzine><hathi-trust-availability-studio parent-ctrl="$ctrl.parentCtrl"></hathi-trust-availability-studio>\n'

});

//Auto generated code by primo app store DO NOT DELETE!!! -END-

//Auto generated code by primo app store DO NOT DELETE!!! -START-
angular.module('hathiTrustAvailability', []).value('hathiTrustIconPath', 'custom/CENTRAL_PACKAGE/img/hathitrust.svg').constant('hathiTrustBaseUrl', "https://catalog.hathitrust.org/api/volumes/brief/json/").config(['$sceDelegateProvider', 'hathiTrustBaseUrl', function ($sceDelegateProvider, hathiTrustBaseUrl) {
  var urlWhitelist = $sceDelegateProvider.resourceUrlWhitelist();
  urlWhitelist.push(hathiTrustBaseUrl + '**');
  $sceDelegateProvider.resourceUrlWhitelist(urlWhitelist);
}]).factory('hathiTrust', ['$http', '$q', function ($http, $q) {
  var svc = {};
  var hathiTrustBaseUrl = "https://catalog.hathitrust.org/api/volumes/brief/json/";

  svc.findFullViewRecord = function (ids) {
    var deferred = $q.defer();

    var handleResponse = function handleResponse(resp) {
      var data = resp.data;
      var fullTextUrl = null;
      for (var i = 0; !fullTextUrl && i < ids.length; i++) {
        var result = data[ids[i]];
        for (var j = 0; j < result.items.length; j++) {
          var item = result.items[j];
          if (item.usRightsString.toLowerCase() === "full view") {
            fullTextUrl = result.records[item.fromRecord].recordURL;
            break;
          }
        }
      }
      deferred.resolve(fullTextUrl);
    };

    if (ids.length) {
      var hathiTrustLookupUrl = hathiTrustBaseUrl + ids.join('|');
      $http.jsonp(hathiTrustLookupUrl, { cache: true, jsonpCallbackParam: 'callback' }).then(handleResponse).catch(function (e) {
        console.log(e);
      });
    } else {
      deferred.resolve(null);
    }

    return deferred.promise;
  };

  return svc;
}]).controller('hathiTrustAvailabilityStudioController', ['hathiTrust', 'hathiTrustIconPath', function (hathiTrust, hathiTrustIconPath) {
  var self = this;
  self.hathiTrustIconPath = hathiTrustIconPath;

  self.$onInit = function () {
    setDefaults();
    if (!(isOnline() && self.hideOnline)) {
      updateHathiTrustAvailability();
    }
  };

  var setDefaults = function setDefaults() {
    if (!self.msg) self.msg = 'Full Text Available at HathiTrust';
  };

  var isOnline = function isOnline() {
    return self.prmSearchResultAvailabilityLine.result.delivery.GetIt1.some(function (g) {
      return g.links.some(function (l) {
        return l.isLinktoOnline;
      });
    });
  };

  var updateHathiTrustAvailability = function updateHathiTrustAvailability() {
    var hathiTrustIds = (self.prmSearchResultAvailabilityLine.result.pnx.addata.oclcid || []).map(function (id) {
      return "oclc:" + id;
    });
    hathiTrust.findFullViewRecord(hathiTrustIds).then(function (res) {
      self.fullTextLink = res;
    });
  };
}]).component('hathiTrustAvailabilityStudio', {
  require: {
    prmSearchResultAvailabilityLine: '^prmSearchResultAvailabilityLine'
  },
  bindings: {
    hideOnline: '<',
    msg: '@?'
  },
  controller: 'hathiTrustAvailabilityStudioController',
  template: '<span ng-if="$ctrl.fullTextLink" class="umnHathiTrustLink">\
                <md-icon md-svg-src="{{$ctrl.hathiTrustIconPath}}" alt="HathiTrust Logo"></md-icon>\
                <a target="_blank" ng-href="{{$ctrl.fullTextLink}}">\
                {{ ::$ctrl.msg }}\
                  <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\
                </a>\
              </span>'
});

app.requires.push('hathiTrustAvailability');

//Auto generated code by primo app store DO NOT DELETE!!! -END-
})();