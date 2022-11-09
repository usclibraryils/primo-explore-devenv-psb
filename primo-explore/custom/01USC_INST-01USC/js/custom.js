(function(){
"use strict";
'use strict';
(function () {
    "use strict";
    "use strict";
    var app = angular.module('viewCustom', []);
    app.component('prmLoanAfter', {
        bindings: { parentCtrl: '<' },
        controller: function controller($scope) {
            var vm = this;

            this.$onInit = function () {
                angular.forEach(vm, function (ics) {
                    if (typeof ics === 'object' && ics.hasOwnProperty('item')) {
                       if(ics.item.mainlocationcode == "RES_SHARE"){
                        ics.item.alerts = ["idd"];
                       }
                    }
                });  
            };
        }
    });
})();
(function () {
    "use strict";
    "use strict";

//Auto generated code by primo app store DO NOT DELETE!!! -START-
//prm-facet-range-after


app.component('primoExploreDateSlider', {
    bindings: { parentCtrl: '<' },
    template: '\n\n<div  ng-cloak>\n  <md-content class="prm-custom-slider">\n    <h3>      \n      <span translate="custom.nui.Date_Slider"></span>\n    </h3>\n    <md-slider-container>\n      <span translate="custom.nui.Min"></span>      \n      <md-slider flex min="{{$ctrl.parentCtrl.facetGroup.additionalData.min}}" ng-model="$ctrl.parentCtrl.facetGroup.additionalData.selectedMin" max="{{$ctrl.parentCtrl.facetGroup.additionalData.selectedMax}}" aria-label="red" id="min-slider">\n      </md-slider>\n      <md-input-container>\n        <input flex type="number" ng-model="$ctrl.parentCtrl.facetGroup.additionalData.selectedMin" aria-label="Set the minimum date range" aria-controls="min-slider">\n      </md-input-container>\n    </md-slider-container>\n    <md-slider-container>\n      <span translate="custom.nui.Max"></span>\n      <md-slider flex min="{{$ctrl.parentCtrl.facetGroup.additionalData.selectedMin}}" ng-model="$ctrl.parentCtrl.facetGroup.additionalData.selectedMax" max="{{$ctrl.parentCtrl.facetGroup.additionalData.max}}" aria-label="green" id="max-slider" class="md-accent">\n      </md-slider>\n      <md-input-container>\n        <input flex type="number" ng-model="$ctrl.parentCtrl.facetGroup.additionalData.selectedMax" aria-label="Set the maximum date range" aria-controls="max-slider">\n      </md-input-container>\n    </md-slider-container>\n\n</md-content>\n</div>\n\n'
});

//Auto generated code by primo app store DO NOT DELETE!!! -END-
})();
//Auto generated code by primo app store DO NOT DELETE!!! -START-
(function () {
    "use strict";
    "use strict";

    var app = angular.module('viewCustom', []);

    var jQueryScript = document.createElement("script");
    jQueryScript.src = "https://code.jquery.com/jquery-3.3.1.min.js";
    document.getElementsByTagName("head")[0].appendChild(jQueryScript);


    app.component('prmTreeNavAfter', {
        bindings: { parentCtrl: '<' },
        require: {
            parent: '^prmTreeNav',
            top: '^prmDatabasesCategorize'
        },
        controller: function controller($scope) {
            var vm = this;

            try {
                var adaptFacetSize = function adaptFacetSize() {
                    //if its hebrew
                    if ($("md-card[class^='default-card']").length == 1) {
                        if ($("html[lang^='he']").length > 0) {
                            // hebrew
                            var _informationCard = $(window).width() - ($("md-card[class^='default-card']").offset().left + $("md-card[class^='default-card']").outerWidth());

                            $("div[id='alphabet']").css("width", _informationCard - 45);
                            $("div[id='alphabet']").css("flex-direction", 'row-reverse');
                        } else {
                            // english
                            var informationCard = $("md-card[class^='default-card']").offset().left;
                            console.log("facetLeft " + informationCard);
                            $("div[id='alphabet']").css("width", informationCard - 40);
                        }
                    }
                };

                window.onresize = adaptFacetSize;


                vm.alphabet = {
                    letter: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "all"]
                };

                this.$onInit = function () {
                    var res = $("prm-tree-nav > md-list").css("display", "none");
                    adaptFacetSize();
                };

                $scope.showValue = function (letter) {
                    $("#hidden").val(letter);
                };
                $scope.getValue = function (item) {
                    var getVal = $('#hidden').val();
                    if (getVal == "" || getVal == "all") {
                        return alphabet;
                    }
                    var lowreName = item.name.toLowerCase();
                    return lowreName.indexOf(getVal.toLowerCase()) === 0;
                };
            } catch (e) {
                console.log("ERROR");
            }
        },

        template: ' \n    <input class="hidden" id="hidden" type="text" ng-model="letter">   \n       \n    \n    <div  id="alphabet" class="flex-container"" layout-row" layout="row">\n    <a class="letter" ng-click="showValue(letter)" ng-repeat="letter in $ctrl.alphabet.letter" translate={{letter}} href="#">{{letter}}\n    <div class="md-ripple-container" style=""></div>\n    </a> \n    </div>\n    \n    \t\n    <md-list role="list" class="md-primoExplore-theme">   \n    <md-list-item class="display-block _md" ng-repeat="item in $ctrl.parent.bdcategoryitems |filter: getValue") ng-class="{\'toggled\': item.toggled, \'has-branches\': $ctrl.parent.haveSubCategories(item)}" ng-style="$ctrl.parent.isBrowserIE() &amp;&amp; {\'display\':\'block\'}" aria-live="assertive" role="listitem" style="">\n        <div class="inner">           \n            <button class="branch-name md-button md-primoExplore-theme md-ink-ripple layout-row" type="button" ng-click="$ctrl.parent.onBranchSelect(item)" layout="row" title={{item.name}} ng-class="{\'is-selected\': item.selected}" aria-label={{item.name}}>\n                <p>{{item.name}}</p>\n                <div class="md-ripple-container" style=""></div>\n            </button>\n        </div>       \n        <div class="_md-secondary-container"/>\n    </md-list-item>\n    </<md-list>\n     '
    });
})();

//Auto generated code by primo app store DO NOT DELETE!!! -END-

})();