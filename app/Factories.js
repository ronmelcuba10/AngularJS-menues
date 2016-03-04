(app.factory('MenuFactory', function() {

            var MenuFactory = function(option, optionsList, section) {
                this.option = option;
                this.optionsList = optionsList;
                this.section = section;
            };
            MenuFactory.prototype.setOption = function(option) {
                this.option = option;
            };
            MenuFactory.prototype.isOptionSelected = function(option) {
                return this.option === option;
            };
            MenuFactory.prototype.getOptionI = function() {
                return this.optionsList[this.option].replace('-', ' and ').replace('/', '');
            };
            MenuFactory.prototype.getOptionsList = function() {
                return this.optionsList;
            };
            MenuFactory.prototype.getOptionTitle = function(index) {
                return this.optionsList[index].replace('-', ' and ').replace('/', '');
            };
            MenuFactory.prototype.getPath = function() {
                return 'app/components/' + this.section + '/' + this.optionsList[this.option].toLowerCase().replace(' ', '') + '.html';
            };
            MenuFactory.prototype.lastOption = function() {
                return this.option === this.optionsList.length - 1;
            };
            MenuFactory.prototype.firstOption = function() {
                return this.option === 0;
            };
            MenuFactory.prototype.optionForward = function() {
                return this.option += 1;
            };
            MenuFactory.prototype.optionBackward = function() {
                return this.option -= 1;
            };
            MenuFactory.prototype.progress = function() {
                return 1 / (this.optionsList.length-1) * (this.option);
            };
            return MenuFactory;
        }));