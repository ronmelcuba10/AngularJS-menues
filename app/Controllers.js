(app.controller('MenuController', ['$scope', 'MenuFactory', 'MenuOptions',
            function($scope, MenuFactory, MenuOptions) {
                $scope.menu = new MenuFactory(0, MenuOptions, 'newpatientpanels');
            }
        ]));

(app.controller('NavigationController', ['$scope', 'MenuFactory', 'NavigationOptions',
            function($scope, MenuFactory, NavigationOptions) {
                $scope.mainmenu = new MenuFactory(0, NavigationOptions, 'divisions');
            }
        ]));

(app.controller('InjectionController', ['$scope', 'MenuFactory', 'InjectionSteps',
            function($scope, MenuFactory, InjectionSteps) {
                $scope.steps = new MenuFactory(0, InjectionSteps, 'newpatientpanels/injectionwizard');
            }
        ]));

(app.controller('NewVisitController', ['$scope', 'Patients', 'Ranges',
            function($scope, Patients, Ranges) {
                
                $scope.ranges = Ranges;
                $scope.patientsVitals = [];
                $scope.patients = Patients;
                $scope.date = Date.now();
                $scope.visitPath = 'app/components/newvitals/vitals.html';
                $scope.addPatient = function() {
                    if ($scope.currentPatient !== ''){
                        $scope.patientsVitals.push({
                            id: $scope.patientsVitals.length + 1,
                            title: $scope.currentPatient
                        });
                    }
                };
                $scope.deletePatient = function(index) {
                    $scope.patientsVitals.splice(index, 1);
                };

            }
        ]));