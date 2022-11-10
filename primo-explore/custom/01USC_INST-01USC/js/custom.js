(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

app.component('prmLoanAfter', {
  bindings: { parentCtrl: '<' },
  controller: function controller($scope) {
      var vm = this;

      this.$onInit = function () {
          angular.forEach(vm, function (ics) {
              if (typeof ics === 'object' && ics.hasOwnProperty('item')) {
                 if(ics.item.mainlocationcode == "RES_SHARE"){
                  ics.item.alerts.push("idd");
                 }
              }
          });  
      };
  }
});
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
app.constant('primoStudioBrowzineStudioConfig', [{ "journalCoverImagesEnabled": true, "journalBrowZineWebLinkTextEnabled": true, "journalBrowZineWebLinkText": "View Journal Contents", "articleBrowZineWebLinkTextEnabled": true, "articleBrowZineWebLinkText": "View Issue Contents", "articlePDFDownloadLinkEnabled": true, "articlePDFDownloadLinkText": "Download PDF", "articleLinkEnabled": true, "articleLinkText": "Read Article", "printRecordsIntegrationEnabled": true, "articlePDFDownloadViaUnpaywallEnabled": true, "articlePDFDownloadViaUnpaywallText": "Download PDF (via Unpaywall)", "articleLinkViaUnpaywallEnabled": true, "articleLinkViaUnpaywallText": "Read Article (via Unpaywall)", "articleAcceptedManuscriptPDFViaUnpaywallEnabled": true, "articleAcceptedManuscriptPDFViaUnpaywallText": "Download PDF (Accepted Manuscript via Unpaywall)", "articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled": true, "articleAcceptedManuscriptArticleLinkViaUnpaywallText": "Read Article (Accepted Manuscript via Unpaywall)", "apiKey": "f1dbb8c4-fa54-415f-9f5f-8d96d08d3f6c", "libraryId": "149" }]);
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


// AEON links
app.controller('RequestServicesAfterController', [function () {
  var vm = this;
}]);

app.component('prmRequestServicesAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'RequestServicesAfterController',
  template: `<remove-specific-request-for-location parent-ctrl="$ctrl.parentCtrl"></remove-specific-request-for-location>`

});

app.component('almaHowovpAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'RequestServicesAfterController',
  template: `<remove-specific-request-for-location parent-ctrl="$ctrl.parentCtrl"></remove-specific-request-for-location>`

});

app.constant('removeSpecificRequestForLocationStudioConfig', [
  { "type": "AEON", "libraryCode": "SPECCOLL", "subLocationCode": "spe-lv7fmo, spe-lv7fml,spe-vltarc, spe-dmlfac, spe-graarc, spe-arc, spe-aav, spe-bkmar8, spe-bkmav7, spe-bkmst8, spe-bkmcr8, spe-bkmco8, spe-bkmcs8, spe-elb238, spe-elb343, spe-bkmofc, spe-bkmmf8, spe-bkmov8, spe-dml233, spe-bkmso8, spe-dml205, spe-dml207, spe-dml208, spe-209A, spe-dml214, spe-ealarc, spe-ealeas, spe-fml, spe-fmo, spe-hol, spe-hov, spe-hor, spe-ofc, spe-mfr, spe-lv7rar, spe-lv8rar, spe-grarar, spe-lv7rfl, spe-lv8rfl, spe-lv7rm, spe-lv7rov, spe-lv8rov, spe-lv7sm, spe-lv7rso, spe-lv8rso, spe-eassto, UNASSIGNED, spe-vlt, spe-vltbrg, spe-vltbwi, spe-vltcre, spe-vltflt, spe-vltovr, spe-vltwid, spe-vla", "displayLabel": "Request from Special Collections" },
  { "type": "AEON", "libraryCode": "CINEMA", "subLocationCode": "cin-cag, cin-cgo, cin-cgs", "displayLabel": "Request from Cinema Arts Library" },
  { "type": "AEON", "libraryCode": "ONEARCHIVE", "subLocationCode": "one-arc, one-stk, one-exb, one-gpf, one-lpf, one-ovr, one-pmo, one-pam, one-prr, one-plf, one-ref", "displayLabel": "Request from ONE Archives" },
  { "type": "ILL", "displayLabel": "Request for Interlibrary Loan/Home Delivery", "genres": ['book', 'bookitem', 'conference', 'journal']},
  { "type": "ILL", "displayLabel": "Request via interlibrary loan (Health Science Libraries)", "genres": ['article', 'proceeding']},
{ "type": "ILL", "displayLabel": "Request via interlibrary loan (Law Library)", "genres": ['article', 'proceeding', 'book', 'bookitem', 'conference', 'journal']}
]);

app.constant('aeonLocationsInternalExternalMap',
  {"spe-lv7fml": "DML LEVEL 7 FML BOOKS", "spe-lv7fmo": "DML LEVEL 7 OVERSIZE FML BOOKS", "spe-dmlfac": "DML FACULTY HALL", "spe-ealeas": "EAST ASIAN STORAGE EAST", "spe-graarc": "ARCHIVES GRAND", "spe-elb238": "BOECKMANN EAST 238", "spe-elb343": "BOECKMANN EAST 343-344", "spe-grarar": "RARE-BOOKS-GRAND", "spe-eassto": "SPECIAL COLLECTIONS EAST STORAGE", "spe-vltbrg": "VAULT-244B-REG", "spe-vltbwi": "VAULT-244B-WIDE", "spe-vltcre": "VAULT-244C-REG", "spe-vltflt": "VAULT-FLAT", "spe-vltovr": "VAULT-OVER", "spe-vltwid": "VAULT-WIDE", "cin-eassto": "EAST STORAGE"}
);

app.controller('removeSpecificRequestForLocationController', ['removeSpecificRequestForLocationStudioConfig', '$scope','$timeout','$translate', 'aeonLocationsInternalExternalMap', function (addonParameters, $scope, $timeout, $translate, aeonLocationsInternalExternalMap) {
  var vm = this.parentCtrl;
  var services2;
  var servicesWithReolvedLinks;
  var fakeGuest = false;
  this.getFakeGuest = getFakeGuest;
  this.$onInit = function () {
      if (!this.parentCtrl.isLoggedIn()){
          fakeGuest = true;

          this.parentCtrl.isLoggedIn = function() {
              return true;
          };

          if (this.parentCtrl.getServicesFromIls) {
              this.parentCtrl.getServicesFromIls();
          } else if (this.parentCtrl.getHowToGetitServicesFromIls) {
              this.parentCtrl.getHowToGetitServicesFromIls();
          }
      }

      $scope.$watch(function () {
          return vm.services.serviceinfo ? vm.services.serviceinfo : undefined;
      }, function () {
          if ((!services2 && vm.services.serviceinfo) || (vm.services.serviceinfo && services2 && services2.length !== vm.services.serviceinfo.length)) {
              services2 = vm.services.serviceinfo;
              calculateRemove();
          } else {
              services2 = vm.services.serviceinfo;
          }
      });
  };

  function getFakeGuest(){
      return fakeGuest;
  }

  function calculateRemove() {
      for (let addonParameter of addonParameters) {
          var type = addonParameter.type;
          var libraryCode = addonParameter.libraryCode;
          var subLocationCodes = addonParameter.subLocationCode;
          var displayLabel = addonParameter.displayLabel;
          var subLocationCode = subLocationCodes ? subLocationCodes.split(/\s*,\s*/) : subLocationCodes;
          var holding = [];

          if (type === "AEON" && vm.item.delivery.holding) {
              holding = vm.item.delivery.holding.filter(function (holding) {
                  return libraryCode === holding.libraryCode;
              }).filter(function (holding) {
                  return subLocationCode.indexOf(holding.subLocationCode) !== -1;
              });
          }

          var aeonAndHolding = (type === "AEON" && holding.length === 0);
          if (services2.length > 0 && aeonAndHolding) {
              services2 = services2.filter(function (e) {
                  return displayLabel !== e.type;
              });
          }
          else {
              if (services2.length > 0) {
                  services2.forEach((service) => {
                      if (service.type === displayLabel) {
                          if (holding.length > 0 || type === "ILL") {
                              if (type === 'AEON') {
                                  let match = holding[0];
                                  let link = service['link-to-service'];
                                  link = link.replace(/location=[^&]*(&)?/, 'location=' + (aeonLocationsInternalExternalMap[match.subLocationCode] ? aeonLocationsInternalExternalMap[match.subLocationCode] : match.subLocation).toLowerCase() + '$1');
                                  link = link.replace(/callnum=[^&]*(&)?/, 'callnum=' + match.callNumber + '$1');
                                  service['link-to-service'] = link;
                              }

                              if (servicesWithReolvedLinks === undefined) {
                                  servicesWithReolvedLinks = [];
                              }
                              servicesWithReolvedLinks.push(service);
                          }
                      }
                  });
              }
          }
      }
      vm.services.serviceinfo = fakeGuest ? angular.copy(servicesWithReolvedLinks) : services2;
      servicesWithReolvedLinks = [];
  }
}]);

app.component('removeSpecificRequestForLocation', {
  controller: 'removeSpecificRequestForLocationController',
  bindings: { parentCtrl: '<' },
  template:`<div ng-if="$ctrl.getFakeGuest()" layout="row" class="bar alert-bar zero-margin-bottom" layout-align="center center">
              <span class="bar-text margin-right-small" translate="nui.request.signin"></span>
              <prm-authentication [is-logged-in]="false" flex="none"></prm-authentication>
            </div>`
});


// END AEON Links
/************************************* BEGIN libchat*************************************/

(function () {
  var lc = document.createElement('script');
  lc.type = 'text/javascript';
  lc.async = 'true';
  lc.src = 'https://v2.libanswers.com/load_chat.php?hash=1c9c8f1c98973f6f2d0ca54e7ccfabf9';
  var s = document.getElementsByTagName('script')[0]; 
s.parentNode.insertBefore(lc, s);
})();

/************************************* END libchat widget *************************************/
/*Add Report a Problem Link below Send To*/
app.component('prmActionListAfter', {
  template: '<br><a href="https://libraries.usc.edu/form/need-help-report-problem" referrerpolicy="no-referrer-when-downgrade" target="_blank" style="float:right;" class="md-primoExplore-theme"><b>Need Help? Report a Problem</b></a>'
});
/*End of Add Report a Problem Link below Send To*/
})();