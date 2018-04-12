(function() {

    var isDlgOpen;

        myApp.controller('dashboardController', function($scope, $mdToast, $mdSidenav) {
            $scope.openLeftMenu = function() {
                $mdSidenav('left').toggle();
            };

            $scope.openRightMenu = function() {
                $mdSidenav('right').toggle();
            };

            $scope.showCustomToast = function() {
                $mdToast.show({
                    hideDelay   : 3000,
                    position    : 'top right',
                    controller  : 'ToastCtrl',
                    templateUrl : 'toast-template.html'
                });
            };
        })
        .controller('ToastCtrl', function($scope, $mdToast, $mdDialog) {

            $scope.closeToast = function() {
                if (isDlgOpen) return;

                $mdToast
                    .hide()
                    .then(function() {
                        isDlgOpen = false;
                    });
            };

            $scope.openMoreInfo = function(e) {
                if ( isDlgOpen ) return;
                isDlgOpen = true;

                $mdDialog
                    .show($mdDialog
                        .alert()
                        .title('More info goes here.')
                        .textContent('Something witty.')
                        .ariaLabel('More info')
                        .ok('Got it')
                        .targetEvent(e)
                    )
                    .then(function() {
                        isDlgOpen = false;
                    })
            };
        });

})();


/**
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at https://material.angularjs.org/license.
 **/