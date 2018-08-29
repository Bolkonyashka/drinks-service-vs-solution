import { DrinkItem } from './drink.item';
import { VendingTip } from './tip.model';
var VendingModel = /** @class */ (function () {
    /*
      Constructor to create an instance from an VendingModel-like object
    */
    function VendingModel(data) {
        if (data === void 0) { data = {}; }
        // Web.API model properties
        this.id = 0;
        this.cash = 100;
        this.blocked1 = false;
        this.blocked2 = false;
        this.blocked5 = false;
        this.blocked10 = false;
        // Additional props for the client logic
        this.drinksForSale = [];
        this.coinList = [1, 2, 5, 10];
        this.blockedCoinList = [];
        this.selectedDrinks = [];
        this.currentInput = 0;
        this.currentOutput = 0;
        this.currentPrice = 0;
        this.tip = new VendingTip();
        for (var key in data) {
            if (key in this) {
                this[key] = data[key];
            }
        }
        this.blockedCoinList[1] = this.blocked1;
        this.blockedCoinList[2] = this.blocked2;
        this.blockedCoinList[5] = this.blocked5;
        this.blockedCoinList[10] = this.blocked10;
    }
    VendingModel.prototype.buyButtonIsNotActive = function () {
        return this.selectedDrinks.length === 0;
    };
    /*
      Change the lock status of the coin
    */
    VendingModel.prototype.changeBlockingStatus = function (coin) {
        switch (coin) {
            case 1:
                this.blocked1 = !this.blocked1;
                this.blockedCoinList[coin] = this.blocked1;
                break;
            case 2:
                this.blocked2 = !this.blocked2;
                this.blockedCoinList[coin] = this.blocked2;
                break;
            case 5:
                this.blocked5 = !this.blocked5;
                this.blockedCoinList[coin] = this.blocked5;
                break;
            case 10:
                this.blocked10 = !this.blocked10;
                this.blockedCoinList[coin] = this.blocked10;
                break;
            default:
                break;
        }
    };
    /*
      The following two methods are intended for admin panel UI
    */
    VendingModel.prototype.getCoinStatusAction = function (coin) {
        if (this.blockedCoinList[coin]) {
            return "Разблокировать";
        }
        else {
            return "Заблокировать";
        }
    };
    VendingModel.prototype.getCoinStatus = function (coin) {
        if (this.blockedCoinList[coin]) {
            return "Заблокирована";
        }
        else {
            return "Разрешена";
        }
    };
    /*
      Creates an array of drinks from an array of DrinkItem-like objects
    */
    VendingModel.prototype.fillDrinksList = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var d = data_1[_i];
            var drinkItem = new DrinkItem(d);
            this.drinksForSale.push(drinkItem);
        }
    };
    /*
      Reset a UI console info
    */
    VendingModel.prototype.resetCurrentStatus = function () {
        this.currentPrice = 0;
        this.currentOutput = 0;
        this.currentInput = 0;
        this.selectedDrinks.length = 0;
    };
    return VendingModel;
}());
export { VendingModel };
//# sourceMappingURL=vending.model.js.map