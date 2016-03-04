var app = angular.module('reports', ['ngAnimate']);


app.value('MenuOptions', ['PATIENT', 'HOMEBOUND STATUS', 'CARDIOPULMONARY', 'RESPIRATORY', 'DIGESTIVE',
        'GENITOURINARY', 'SKIN', 'MUSCULOSKELETAL', 'NEUROSENSORY', 'EMOTIONAL STATUS', 'PAIN', 'INTERVENTIONS-TECHNIQUES', 'INJECTION'
    ]);

app.value('NavigationOptions', ['HOME', 'NEW VISIT', 'NEW PATIENT', 'MY PROFILE', 'LOGIN']);

app.value('InjectionSteps', ['first', 'second', 'third', 'fourth', 'fifth']);

app.value('Patients', [{
            name: 'Luis',
            last: 'Alvarez',
            tempMin: 98.0,
            tempMax: 99.1,
            pulseMin: 70,
            pulseMax: 78,
            respMin: 16,
            respMax: 20,
            diasMax: 130,
            diasMin: 118,
            sysMin: 74,
            sysMax: 80,
            injection: ['right arm', 'left arm', 'leg'],
            assistant: 'caregiver'
        }, {
            name: 'Maria',
            last: 'Perez',
            tempMin: 96.0,
            tempMax: 97.1,
            pulseMin: 70,
            pulseMax: 78,
            respMin: 16,
            respMax: 20,
            diasMax: 130,
            diasMin: 118,
            sysMin: 74,
            sysMax: 80,
            injection: ['en el abdomen alto', 'en al abdomen bajo'],
            assistant: 'caregiver'
        }, {
            name: 'Jose',
            last: 'Robles',
            tempMin: 96.0,
            tempMax: 97.1,
            pulseMin: 70,
            pulseMax: 78,
            respMin: 16,
            respMax: 20,
            diasMax: 130,
            diasMin: 118,
            sysMin: 74,
            sysMax: 80,
            injection: ['pierna derecha', 'pierna izquierda'],
            assistant: 'caregiver'
        }
    ]);

app.filter('percentage', ['$filter',
        function($filter) {
            return function(input, decimals) {
                return $filter('number')(input * 100, decimals) + '%';
            };
        }
    ]);