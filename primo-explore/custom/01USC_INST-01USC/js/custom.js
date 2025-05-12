(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

//Auto generated code by primo app store DO NOT DELETE!!! -START-
/*
    hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
    e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
 */
app.controller('FullViewAfterController', [function () {
    var vm = this;
}]);

app.component('prmFullViewAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'FullViewAfterController',
    template: '\n    <primo-studio-altmetrics parent-ctrl="$ctrl.parentCtrl"></primo-studio-altmetrics>\n'

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
    template: '\n    <primo-studio-browzine parent-ctrl="$ctrl.parentCtrl"></primo-studio-browzine>\n'

});

//Auto generated code by primo app store DO NOT DELETE!!! -END-

//Auto generated code by primo app store DO NOT DELETE!!! -START-
app.constant('primoStudioAltmetricsStudioConfig', [{ "badgetype": "medium-donut" }]);
//Auto generated code by primo app store DO NOT DELETE!!! -END-
//Auto generated code by primo app store DO NOT DELETE!!! -START-
(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
                }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];return o(n || r);
                }, p, p.exports, r, e, n, t);
            }return n[i].exports;
        }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
            o(t[i]);
        }return o;
    }return r;
})()({ 1: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _altmetrics = require('./altmetrics.controller');

        var _altmetrics2 = _interopRequireDefault(_altmetrics);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        /*
         * altmetrics.component.js
         */

        var altmetricsTemplate = '<div id="altmetric_badge"\n    ng-if="$ctrl.altmetric_id"\n    class="altmetric-embed"\n    data-hide-no-mentions="true"\n    data-link-target="new"\n    data-badge-type="{{$ctrl.altmetric_badge_type}}"\n    data-badge-details="right"\n    data-altmetric-id="{{$ctrl.altmetric_id}}">\n</div>\n';

        var PrimoStudioAltmetricsComponent = {
            selector: 'primoStudioAltmetrics',
            controller: _altmetrics2.default,
            bindings: { parentCtrl: '<' },
            template: altmetricsTemplate
        };

        exports.default = PrimoStudioAltmetricsComponent;
    }, { "./altmetrics.controller": 2 }], 2: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        /*
         * altmetrics.controller.js
         *
         * https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex
         * https://developers.exlibrisgroup.com/blog/Adding-Altmetrics-to-your-Primo-Full-Record-Display
         */

        var PrimoStudioAltmetricsController = function () {
            function PrimoStudioAltmetricsController(angularLoad, studioConfig, $http, $scope, $element, $timeout, $window) {
                _classCallCheck(this, PrimoStudioAltmetricsController);

                this.angularLoad = angularLoad;
                this.studioConfig = studioConfig;
                this.$http = $http;
                this.$scope = $scope;
                this.$element = $element;
                this.$timeout = $timeout;
                this.$window = $window;
            }

            _createClass(PrimoStudioAltmetricsController, [{
                key: 'getConfigApiKey',
                value: function getConfigApiKey() {
                    return this.studioConfig[0].apikey || '';
                }
            }, {
                key: 'getConfigISBN',
                value: function getConfigISBN() {
                    return this.studioConfig[0].isbn || '';
                }
            }, {
                key: 'getConfigBadgeType',
                value: function getConfigBadgeType() {
                    return this.studioConfig[0].badgetype || 'medium-donut';
                }
            }, {
                key: '$onInit',
                value: function $onInit() {

                    var vm = this;

                    vm.embed_js = '';
                    vm.altmetric_id = '';
                    vm.altmetric_badge_type = vm.getConfigBadgeType();
                    vm.altmetric_key = vm.getConfigApiKey();

                    // the prm-full-view container, our parent is prm-full-view-after
                    vm.parentElement = vm.$element.parent().parent()[0];

                    vm.api = 'doi';
                    try {
                        vm.doi = vm.parentCtrl.item.pnx.addata.doi[0] || '';
                    } catch (e) {
                        try {
                            if (vm.getConfigISBN()) {
                                vm.doi = vm.parentCtrl.item.pnx.addata.isbn[0] || '';
                                vm.api = 'isbn';
                            }
                        } catch (e) {
                            return;
                        }
                    }

                    if (vm.doi) {
                        // If we've got a doi to work with check whether altmetrics has data for it.
                        // If so, make our div visible and create a new Altmetrics service
                        vm.$timeout(function () {
                            vm.$http.get('https://api.altmetric.com/v1/' + vm.api + '/' + vm.doi).then(function (res) {
                                vm.altmetric_id = res.data.altmetric_id;
                                // Get the altmetrics widget
                                vm.embed_js = 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now();
                                vm.angularLoad.loadScript(vm.embed_js).then(function () {
                                    // Create our new Primo service
                                    var altmetricsSection = {
                                        scrollId: 'altmetrics',
                                        serviceName: 'altmetrics',
                                        title: 'brief.results.tabs.Altmetrics'
                                    };
                                    vm.parentCtrl.services.splice(vm.parentCtrl.services.length, 0, altmetricsSection);
                                }, function (res) {
                                    console.log('altmetric loadScript failed: ' + res);
                                });
                            }, function (res) {
                                console.log('altmetric api failed: ' + res);
                            });
                        }, 3000);
                    }

                    // move the altmetrics widget into the new Altmetrics service section
                    var unbindWatcher = vm.$scope.$watch(function () {
                        return vm.parentElement.querySelector('h4[translate="brief.results.tabs.Altmetrics"]');
                    }, function (newVal, _oldVal) {
                        if (newVal) {
                            // Get the section body associated with the value we're watching
                            var sectionBody = newVal.parentElement.parentElement.parentElement.parentElement.children[1];
                            if (sectionBody && sectionBody.appendChild) {
                                sectionBody.appendChild(vm.$element[0]);
                            }
                            unbindWatcher();
                        }
                    });
                }
            }, {
                key: '$onDestroy',
                value: function $onDestroy() {
                    var vm = this;
                    var el = null;

                    if (vm.$window._altmetric) {
                        delete vm.$window._altmetric;
                    }

                    // remove altmetric css/js
                    if (vm.embed_js) {
                        el = document.body.querySelector('[src="' + vm.embed_js + '"]');
                        if (el) {
                            el.remove();
                        }
                        vm.embed_js = '';
                    }
                    document.body.querySelectorAll('script', function (script) {
                        if (script.src.startsWith('https://api.altmetric.com/v1/id/')) {
                            script.parentNode.removeChild(script);
                        }
                    });

                    el = document.head.querySelector('link[id="altmetric-embed-css"]');
                    if (el) {
                        el.remove();
                    }
                    el = document.head.querySelector('script[id="altmetric-embed-js"]');
                    if (el) {
                        el.remove();
                    }
                }
            }]);

            return PrimoStudioAltmetricsController;
        }();

        PrimoStudioAltmetricsController.$inject = ['angularLoad', 'primoStudioAltmetricsStudioConfig', '$http', '$scope', '$element', '$timeout', '$window'];

        exports.default = PrimoStudioAltmetricsController;
    }, {}], 3: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.PrimoStudioAltmetricsModule = undefined;

        var _altmetrics = require('./altmetrics.component');

        var _altmetrics2 = _interopRequireDefault(_altmetrics);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var PrimoStudioAltmetricsModule = exports.PrimoStudioAltmetricsModule = angular.module('primoStudioAltmetrics', []).component(_altmetrics2.default.selector, _altmetrics2.default).name; /**
                                                                                                                                                                                                  * altmetrics.module.js
                                                                                                                                                                                                  */
    }, { "./altmetrics.component": 1 }], 4: [function (require, module, exports) {
        'use strict';

        var _altmetrics = require('./js/altmetrics.module');

        app.requires.push(_altmetrics.PrimoStudioAltmetricsModule); /**
                                                                     * main.js
                                                                     */
    }, { "./js/altmetrics.module": 3 }] }, {}, [4]);

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
   template: '<br><a href="https://libraries.usc.edu/form/need-help-report-problem" referrerpolicy="no-referrer-when-downgrade" target="_blank" style="float:right;" class="md-primoExplore-theme"><b>Need Help? Report a Problem</b></a>'
});
/*End of Add Report a Problem Link below Send To*/

})();

/************************************* libchat widget *************************************/
(function () {
    var lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = 'true';
    lc.src = 'https://v2.libanswers.com/load_chat.php?hash=1c9c8f1c98973f6f2d0ca54e7ccfabf9';
    var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(lc, s);
})();
  
/************************************* END libchat widget *************************************/
// GA4
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

  
})(); 
//END - GA4
//accessibility notes
(function () {
   var buttondiv = document.createElement("div");
   buttondiv.innerHTML = '<a style="color: rgb(255, 255, 255);display: block;position: absolute;text-align: center;border-width: 0; border-style: solid;" href="https://accessibility.usc.edu/accessibility-at-usc/digital-accessibility/" target="_blank">USC Digital Accessibility</a>';
   buttondiv.style = "z-index:255;position:fixed;padding: 0.5em; width:11em;height:2.5em; bottom:0; right:2em; border-color: rgb(255, 255, 255);color: rgb(255, 255, 255);background-color: rgb(153, 0, 0);box-shadow: rgb(204, 204, 204) 0px 0px 5px;border-width: 4px 4px 0px"
   document.body.appendChild(buttondiv);
})(); 
//end of accessibility notes

//GA KEY INDICATOR
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NKSVLSB');