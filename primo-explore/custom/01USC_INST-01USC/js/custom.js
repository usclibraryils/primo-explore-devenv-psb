(function(){
"use strict";
'use strict';


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = angular.module('viewCustom', ['angularLoad','hathiTrustAvailability']);

//Auto generated code by primo app store DO NOT DELETE!!! -END-
/* Primo VE HathiTrust Availability Add-On for CARLI I-Share - 12/15/2020
* adapted from https://github.com/UMNLibraries/primo-explore-hathitrust-availability
*
* NOTE: Be sure to add 'hathiTrustAvailability' to the
*       angular.module() function at the top of the custom.js file,
*       i.e., add it to the array that also includes 'angularLoad', e.g.:
*
* var app = angular.module('viewCustom', ['angularLoad', 'hathiTrustAvailability']);
*
* There are several optional configuration choices you can set for the app.component "template":
*
* Customizing the Availability Message - The default availability message that displays in the Brief 
* Results list and the Full Record page is "Full Text Available at HathiTrust". You can override 
* this by setting the msg attribute:
* 
* <hathi-trust-availability msg="Set this text to your preferred message"></hathi-trust-availability>
* 
* Selectively Suppress Full-text Links - By default, the component will display full-text links 
* for any resource.
* 
* --If you want it avoid looking for full-text availability on records for which you already have online 
* access, add the hide-online attribute to the component:
* 
* <hathi-trust-availability hide-online="true"></hathi-trust-availability>
* 
* --You can also suppress full-text links for journals, if desired, with hide-if-journal option:
* 
* <hathi-trust-availability hide-if-journal="true"></hathi-trust-availability>
* 
* Copyright Status - By default, the component will display only when the item is out of copyright 
* and therefore should be accessible.
* 
* --If you want to display full-text links to any HathiTrust record, regardless of copyright status, 
* use the ignore-copyright attribute:
* 
* <hathi-trust-availability ignore-copyright="true"></hathi-trust-availability>
* 
* --If your institution is a HathiTrust partner institution and you want the availability links 
* in Primo VE to use HathiTrust's automatic login process, add your SAML IdP's entity ID:
* 
* <hathi-trust-availability entity-id="https://shibboleth.inst.edu/idp/shibboleth"></hathi-trust-availability>
*
* E.g.,
* app.component('prmSearchResultAvailabilityLineAfter', {
*   template: '<hathi-trust-availability hide-online="true" msg="Set this text to your preferred message"></hathi-trust-availability>'
* });
*
*/

app.component('prmSearchResultAvailabilityLineAfter', {
  template: '<hathi-trust-availability></hathi-trust-availability>'
});

angular.module('hathiTrustAvailability', []).constant('hathiTrustBaseUrl', 'https://catalog.hathitrust.org/api/volumes/brief/json/').config(['$sceDelegateProvider', 'hathiTrustBaseUrl', function ($sceDelegateProvider, hathiTrustBaseUrl) {
  var urlWhitelist = $sceDelegateProvider.resourceUrlWhitelist();
  urlWhitelist.push(hathiTrustBaseUrl + '**');
  $sceDelegateProvider.resourceUrlWhitelist(urlWhitelist);
}]).factory('hathiTrust', ['$http', '$q', 'hathiTrustBaseUrl', function ($http, $q, hathiTrustBaseUrl) {
  var svc = {};

  var lookup = function lookup(ids) {
    if (ids.length) {
      var hathiTrustLookupUrl = hathiTrustBaseUrl + ids.join('|');
      return $http.jsonp(hathiTrustLookupUrl, {
        cache: true,
        jsonpCallbackParam: 'callback'
      }).then(function (resp) {
        return resp.data;
      });
    } else {
      return $q.resolve(null);
    }
  };

  // find a HT record URL for a given list of identifiers (regardless of copyright status)
  svc.findRecord = function (ids) {
    return lookup(ids).then(function (bibData) {
      for (var i = 0; i < ids.length; i++) {
        var recordId = Object.keys(bibData[ids[i]].records)[0];
        if (recordId) {
          return $q.resolve(bibData[ids[i]].records[recordId].recordURL);
        }
      }
      return $q.resolve(null);
    }).catch(function (e) {
      console.error(e);
    });
  };

  // find a public-domain HT record URL for a given list of identifiers
  svc.findFullViewRecord = function (ids) {
    var handleResponse = function handleResponse(bibData) {
      var fullTextUrl = null;
      for (var i = 0; !fullTextUrl && i < ids.length; i++) {
        var result = bibData[ids[i]];
        for (var j = 0; j < result.items.length; j++) {
          var item = result.items[j];
          if (item.usRightsString.toLowerCase() === 'full view') {
            fullTextUrl = result.records[item.fromRecord].recordURL;
            break;
          }
        }
      }
      return $q.resolve(fullTextUrl);
    };
    return lookup(ids).then(handleResponse).catch(function (e) {
      console.error(e);
    });
  };

  return svc;
}]).controller('hathiTrustAvailabilityController', ['hathiTrust', function (hathiTrust) {
  var self = this;

  self.$onInit = function () {
    if (!self.msg) self.msg = 'Full Text Available at HathiTrust';

    // prevent appearance/request iff 'hide-online'
    if (self.hideOnline && isOnline()) {
      return;
    }

    // prevent appearance/request iff 'hide-if-journal'
    if (self.hideIfJournal && isJournal()) {
      return;
    }

    // look for full text at HathiTrust
    updateHathiTrustAvailability();
  };

  var isJournal = function isJournal() {
    var format = self.prmSearchResultAvailabilityLine.result.pnx.addata.format[0];
    return !(format.toLowerCase().indexOf('journal') == -1); // format.includes("Journal")
  };

  var isOnline = function isOnline() {
    var delivery = self.prmSearchResultAvailabilityLine.result.delivery || [];
    if (!delivery.GetIt1) return delivery.deliveryCategory.indexOf('Alma-E') !== -1;
    return self.prmSearchResultAvailabilityLine.result.delivery.GetIt1.some(function (g) {
      return g.links.some(function (l) {
        return l.isLinktoOnline;
      });
    });
  };

  var formatLink = function formatLink(link) {
    return self.entityId ? link + '?signon=swle:' + self.entityId : link;
  };

  var isOclcNum = function isOclcNum(value) {
    return value.match(/^(\(ocolc\))\d+$/i);
  };

  var updateHathiTrustAvailability = function updateHathiTrustAvailability() {
    var hathiTrustIds = (self.prmSearchResultAvailabilityLine.result.pnx.addata.oclcid || []).filter(isOclcNum).map(function (id) {
      return 'oclc:' + id.toLowerCase().replace('(ocolc)', '');
    });
    hathiTrust[self.ignoreCopyright ? 'findRecord' : 'findFullViewRecord'](hathiTrustIds).then(function (res) {
      if (res) self.fullTextLink = formatLink(res);
    });
  };
}]).component('hathiTrustAvailability', {
  require: {
    prmSearchResultAvailabilityLine: '^prmSearchResultAvailabilityLine'
  },
  bindings: {
    entityId: '@',
    ignoreCopyright: '<',
    hideIfJournal: '<',
    hideOnline: '<',
    msg: '@?'
  },
  controller: 'hathiTrustAvailabilityController',
  template: '<span ng-if="$ctrl.fullTextLink" class="umnHathiTrustLink">\
                <md-icon alt="HathiTrust Logo">\
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve">  <image id="image0" width="16" height="16" x="0" y="0"\
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\
                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACNFBMVEXuegXvegTsewTveArw\
                  eQjuegftegfweQXsegXweQbtegnsegvxeQbvegbuegbvegbveQbtegfuegbvegXveQbvegbsfAzt\
                  plfnsmfpq1/wplPuegXvqFrrq1znr2Ptok/sewvueQfuegbtegbrgRfxyJPlsXDmlTznnk/rn03q\
                  pVnomkjnlkDnsGnvwobsfhPveQXteQrutHDqpF3qnUnpjS/prmDweQXsewjvrWHsjy7pnkvqqGDv\
                  t3PregvqhB3uuXjusmzpp13qlz3pfxTskC3uegjsjyvogBfpmkHpqF/us2rttXLrgRjrgBjttXDo\
                  gx/vtGznjzPtfhHqjCfuewfrjCnwfxLpjC7wtnDogBvssmjpfhLtegjtnEjrtnTmjC/utGrsew7s\
                  o0zpghnohB/roUrrfRHtsmnlkTbrvH3tnEXtegXvegTveQfqhyHvuXjrrGTpewrsrmXqfRHogRjt\
                  q2Dqewvqql/wu3vqhyDueQnwegXuegfweQPtegntnUvnt3fvxI7tfhTrfA/vzJvmtXLunEbtegrw\
                  egTregzskjbsxI/ouoPsqFzniyrz2K3vyZnokDLpewvtnkv30J/w17XsvYXjgBbohR7nplnso1L0\
                  1Kf40Z/um0LvegXngBnsy5juyJXvsGftrGTnhB/opVHoew7qhB7rzJnnmErkkz3splbqlT3smT3t\
                  tXPqqV7pjzHvunjrfQ7vewPsfA7uoU3uqlruoEzsfQ/vegf///9WgM4fAAAAFHRSTlOLi4uLi4uL\
                  i4uLi4uLi4tRUVFRUYI6/KEAAAABYktHRLvUtndMAAAAB3RJTUUH4AkNDgYNB5/9vwAAAQpJREFU\
                  GNNjYGBkYmZhZWNn5ODk4ubh5WMQERUTl5CUEpWWkZWTV1BUYlBWUVVT19BUUtbS1tHV0zdgMDQy\
                  NjE1MzRXsrC0sraxtWOwd3B0cnZxlXZz9/D08vbxZfDzDwgMCg4JdQsLj4iMio5hiI2LT0hMSk5J\
                  TUvPyMzKzmHIzcsvKCwqLiktK6+orKquYZCuratvaGxqbmlta+8QNRBl6JQ26Oru6e3rnzBx0uQ8\
                  aVGGvJopU6dNn1E8c9bsOXPniYoySM+PXbBw0eIlS5fl1C+PFRFlEBUVXbFy1eo1a9fliQDZYIHY\
                  9fEbNm7avEUUJiC6ddv2HTt3mSuBBfhBQEBQSEgYzOIHAHtfTe/vX0uvAAAAJXRFWHRkYXRlOmNy\
                  ZWF0ZQAyMDE2LTA5LTEzVDE0OjA2OjEzLTA1OjAwNMgVqAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAx\
                  Ni0wOS0xM1QxNDowNjoxMy0wNTowMEWVrRQAAAAASUVORK5CYII=" />\
                  </svg> \
                </md-icon>\
                <a target="_blank" ng-href="{{$ctrl.fullTextLink}}">\
                {{ ::$ctrl.msg }}\
                  <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\
                </a>\
              </span>'
});

/* END HathiTrust Availability add-on */ 
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

})();