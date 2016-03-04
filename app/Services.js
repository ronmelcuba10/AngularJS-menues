(app.service('Ranges', function() {
            this.Range = function(min, max, inc) {
                var range = [];
                for (var i = min; i < max + 1; i += inc) {
                    range.push(i);
                }
                return range;
            };

            this.IntRange = function(min, max) {
                return this.Range(min, max, 1);
            };
            this.DecRange = function(min, max, inc) {
                var arr = this.Range(min, max, inc);
                var result = [];
                for (var i = 0; i < arr.length; i++) {
                    result.push(parseFloat(arr[i].toFixed(2)));
                }
                return result;
            };
            this.pulseRange = this.IntRange(50, 100);
            this.respirationRange = this.IntRange(12, 24);
            this.bSLRange = this.IntRange(60, 450);
            this.diastolicRange = this.IntRange(40, 120);
            this.systolicRange = this.IntRange(90, 180);
            this.temperatureRange = this.DecRange(95.5, 105.0, 0.1);
        }));