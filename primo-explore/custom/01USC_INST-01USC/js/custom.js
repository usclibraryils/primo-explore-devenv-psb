(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

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
  template: '\n    <primo-studio-browzine parent-ctrl="$ctrl.parentCtrl"></primo-studio-browzine>\n'

});

//Auto generated code by primo app store DO NOT DELETE!!! -END-

//Auto generated code by primo app store DO NOT DELETE!!! -START-
app.constant('primoStudioBrowzineStudioConfig', [{ "journalCoverImagesEnabled": true, "journalBrowZineWebLinkTextEnabled": true, "journalBrowZineWebLinkText": "View Journal Contents", "articleBrowZineWebLinkTextEnabled": true, "articleBrowZineWebLinkText": "View Issue Contents", "articlePDFDownloadLinkEnabled": true, "articlePDFDownloadLinkText": "Download PDF", "articleLinkEnabled": true, "articleLinkText": "Read Article", "printRecordsIntegrationEnabled": true, "articlePDFDownloadViaUnpaywallEnabled": true, "articlePDFDownloadViaUnpaywallText": "Download PDF (via Unpaywall)", "articleLinkViaUnpaywallEnabled": true, "articleLinkViaUnpaywallText": "Read Article (via Unpaywall)", "articleAcceptedManuscriptPDFViaUnpaywallEnabled": true, "articleAcceptedManuscriptPDFViaUnpaywallText": "Download PDF (Accepted Manuscript via Unpaywall)", "articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled": true, "articleAcceptedManuscriptArticleLinkViaUnpaywallText": "Read Article (Accepted Manuscript via Unpaywall)", "libraryId": "149", "apiKey": "f1dbb8c4-fa54-415f-9f5f-8d96d08d3f6c" }]);
//Auto generated code by primo app store DO NOT DELETE!!! -END-
//Auto generated code by primo app store DO NOT DELETE!!! -START-
PrimoStudioBrowzineController.$inject = ["$scope", "primoStudioBrowzineStudioConfig"];

function isBrowzineLoaded() {
  var validation = false;
  var scripts = document.head.querySelectorAll("script");

  if (scripts) {
    Array.prototype.forEach.call(scripts, function (script) {
      if (script.src.indexOf("browzine-primo-adapter") > -1) {
        validation = true;
      }
    });
  }

  return validation;
};

function PrimoStudioBrowzineController($scope, studioConfig) {
  if (!isBrowzineLoaded()) {
    if (studioConfig[0]) {
      if (!studioConfig[0].libraryId) {
        console.log("Missing required Primo Studio BrowZine addon field: libraryId");
      }

      if (!studioConfig[0].apiKey) {
        console.log("Missing required Primo Studio BrowZine addon field: apiKey");
      }
    } else {
      console.log("Missing Primo Studio BrowZine addon configuration: studioConfig");
    }

    window.browzine = {
      libraryId: studioConfig[0].libraryId,
      apiKey: studioConfig[0].apiKey,

      journalCoverImagesEnabled: studioConfig[0].journalCoverImagesEnabled,

      journalBrowZineWebLinkTextEnabled: studioConfig[0].journalBrowZineWebLinkTextEnabled,
      journalBrowZineWebLinkText: studioConfig[0].journalBrowZineWebLinkText,

      articleBrowZineWebLinkTextEnabled: studioConfig[0].articleBrowZineWebLinkTextEnabled,
      articleBrowZineWebLinkText: studioConfig[0].articleBrowZineWebLinkText,

      articlePDFDownloadLinkEnabled: studioConfig[0].articlePDFDownloadLinkEnabled,
      articlePDFDownloadLinkText: studioConfig[0].articlePDFDownloadLinkText,

      articleLinkEnabled: studioConfig[0].articleLinkEnabled,
      articleLinkText: studioConfig[0].articleLinkText,

      printRecordsIntegrationEnabled: studioConfig[0].printRecordsIntegrationEnabled,

      unpaywallEmailAddressKey: studioConfig[0].unpaywallEmailAddressKey,

      articlePDFDownloadViaUnpaywallEnabled: studioConfig[0].articlePDFDownloadViaUnpaywallEnabled,
      articlePDFDownloadViaUnpaywallText: studioConfig[0].articlePDFDownloadViaUnpaywallText,

      articleLinkViaUnpaywallEnabled: studioConfig[0].articleLinkViaUnpaywallEnabled,
      articleLinkViaUnpaywallText: studioConfig[0].articleLinkViaUnpaywallText,

      articleAcceptedManuscriptPDFViaUnpaywallEnabled: studioConfig[0].articleAcceptedManuscriptPDFViaUnpaywallEnabled,
      articleAcceptedManuscriptPDFViaUnpaywallText: studioConfig[0].articleAcceptedManuscriptPDFViaUnpaywallText,

      articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: studioConfig[0].articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled,
      articleAcceptedManuscriptArticleLinkViaUnpaywallText: studioConfig[0].articleAcceptedManuscriptArticleLinkViaUnpaywallText
    };

    window.browzine.script = document.createElement("script");
    window.browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
    window.document.head.appendChild(window.browzine.script);
  }

  (function poll() {
    if (isBrowzineLoaded() && window.browzine.primo) {
      window.browzine.primo.searchResult($scope);
    } else {
      requestAnimationFrame(poll);
    }
  })();
};

var PrimoStudioBrowzineComponent = {
  selector: "primoStudioBrowzine",
  controller: PrimoStudioBrowzineController,
  bindings: { parentCtrl: "<" }
};

var PrimoStudioBrowzineModule = angular.module("primoStudioBrowzine", []).component(PrimoStudioBrowzineComponent.selector, PrimoStudioBrowzineComponent).name;

app.requires.push(PrimoStudioBrowzineModule);

//Auto generated code by primo app store DO NOT DELETE!!! -END-
// IDD Renewal Notice
app.component('prmLoanAfter', {
    bindings: { parentCtrl: '<' },
    controller: function controller($scope) {
        var vm = this;
  
        this.$onInit = function () {
            angular.forEach(vm, function (ics) {
                if (typeof ics === 'object' && ics.hasOwnProperty('item')) {
                   if(ics.item.mainlocationcode == "RES_SHARE"){
                    ics.item.alerts.push("idd");
                    ics.notRenewableReasonsArray[0] = "Please contact the IDD to renew this item.";
                    var prmloan = document.querySelectorAll('prm-loan')[ics.index-1];
                    prmloan.querySelectorAll('div.list-item-actions')[0].outerHTML = '<div layout-align="start center" layout="row" flex="20" flex-xs="100" class="list-item-actions layout-align-start-center layout-row flex-xs-100 flex-20"><!----><!----><!----><!----><div class="not-renewable weak-text layout-align-start-center" aria-label="Please contact IDD for renewal" aria-hidden="false" layout-align="start center"><!----><prm-icon ng-if="$ctrl.isNotRenewable" icon-type="svg" svg-icon-set="primo-ui" icon-definition="lock"><!----><md-icon md-svg-icon="primo-ui:lock" role="presentation" class="md-primoExplore-theme"><svg id="lock_cache86" width="100%" height="100%" viewBox="0 0 24 24" y="1320" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"></path></svg></md-icon><!----><!----><prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon><!----><!----><!----><span ng-if="$ctrl.isNotRenewable" translate="nui.loans.idd">Contact IDD for renewal.</span><!----> <!----><div aria-hidden="true" class="md-tooltip-container" aria-label="" md-labeled-by-tooltip="md-tooltip-70"><!----><!----></div><!----><div ng-if="$ctrl.notRenewableReasonsArray.length > 0" class="accessible-only"><span class="popover animate-popover" translate="nui.loans.cannotRenewThisItem">Please contact IDD for renewal</span><br><!----><!----><span ng-if="::$ctrl.isNotRenewableWithCause" class="tooltip-content" ng-repeat="reason in $ctrl.notRenewableReasonsArray | limitTo:2">idd@usc.edu<br></span><!----><!----><!----><span ng-if="::$ctrl.isNotRenewableWithCause" class="tooltip-content" ng-repeat="reason in $ctrl.notRenewableReasonsArray | limitTo:2">Item renew period exceeded<br></span><!----><!----><!----></div><!----></div><!----></div>';
                    
                   }
                }
            });  
         
        };
    }
});
//End of IDD Renewal Notice

  /*Add Report a Problem Link below Send To*/
  app.component('prmActionListAfter', {
    template: '<br><a href="https://usc-lib1:usc-lib1@stg.libraries.usc.edu/form/need-help-report-problem" referrerpolicy="no-referrer-when-downgrade" target="_blank" style="float:right;" class="md-primoExplore-theme"><b>Need Help? Report a Problem</b></a>'
  });
  /*End of Add Report a Problem Link below Send To*/
})();
(function () {
    var lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = 'true';
    lc.src = 'https://v2.libanswers.com/load_chat.php?hash=1c9c8f1c98973f6f2d0ca54e7ccfabf9';
    var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(lc, s);
  })();
  
  /************************************* END libchat widget *************************************/
  (function () {
    var e = document.createElement('noscript');
    e.innerHTML='<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKSVLSB" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    document.body.prepend(e);
    //START - GA4
    var googleAnalyticsUrl = document.createElement('script');
    googleAnalyticsUrl.src = "https://www.googletagmanager.com/gtag/js?id=G-CMGZ809JXT";
    googleAnalyticsUrl.type = 'text/javascript';
    googleAnalyticsUrl.async = true;
    document.head.appendChild(googleAnalyticsUrl);

    var googleAnalyticsCode = document.createElement('script');
    googleAnalyticsCode.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CMGZ809JXT');`;
    document.head.appendChild(googleAnalyticsCode); 


    //END - GA4
  })(); 
//GA KEY INDICATOR
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NKSVLSB');
