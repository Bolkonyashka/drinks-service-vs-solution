var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { VendingModel } from '../_models/vending.model';
import { HttpService } from '../_services/http.service';
var VendingBlockComponent = /** @class */ (function () {
    function VendingBlockComponent(httpService) {
        this.httpService = httpService;
        this.maxCount = 5; // Just because
        this.modelIsReady = false; // For data loading control
    }
    VendingBlockComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    /*
      Loads data from the server
    */
    VendingBlockComponent.prototype.loadData = function () {
        var _this = this;
        this.httpService.getData("/api/vending/0").subscribe(function (data) {
            _this.vendingModel = new VendingModel(data);
            _this.modelIsReady = true;
            _this.httpService.getData("/api/drinks").subscribe(function (data) {
                var dataArray = Array.prototype.slice.call(data, 0);
                _this.vendingModel.fillDrinksList(dataArray);
            });
        });
    };
    /*
      Uploads data to the server
    */
    VendingBlockComponent.prototype.putChangedData = function () {
        this.httpService.putData("/api/vending", this.vendingModel).subscribe();
        for (var _i = 0, _a = this.vendingModel.selectedDrinks; _i < _a.length; _i++) {
            var drink = _a[_i];
            this.httpService.putData("/api/drinks", drink).subscribe();
        }
    };
    /*
      The following three methods change the model after user actions
      The purchase takes place only after clicking the pick up button
    */
    VendingBlockComponent.prototype.moneyInput = function (count) {
        this.vendingModel.tip.resetStatus();
        this.vendingModel.currentInput += count;
        this.vendingModel.currentOutput = this.vendingModel.currentInput - this.vendingModel.currentPrice;
    };
    VendingBlockComponent.prototype.selectItem = function (item) {
        this.vendingModel.tip.resetStatus();
        if (this.vendingModel.selectedDrinks.length < this.maxCount) {
            if (this.vendingModel.currentInput >= this.vendingModel.currentPrice + item.price) {
                this.vendingModel.selectedDrinks.push(item);
                this.vendingModel.currentPrice += item.price;
                item.count -= 1;
                this.vendingModel.currentOutput = this.vendingModel.currentInput - this.vendingModel.currentPrice;
            }
            else {
                this.vendingModel.tip.prepareTip("Внесено недостаточно средств!");
            }
        }
        else {
            this.vendingModel.tip.prepareTip("Вы выбрали максимальное количество напитков!");
        }
    };
    VendingBlockComponent.prototype.buyDrinks = function () {
        if (this.vendingModel.selectedDrinks.length > 0) {
            this.vendingModel.tip.resetStatus();
            if (this.vendingModel.currentOutput > 0) {
                this.vendingModel.tip.prepareTip("Не забудьте взять вашу сдачу: " + String(this.vendingModel.currentOutput) + " руб");
            }
            this.vendingModel.cash += this.vendingModel.currentPrice;
            this.putChangedData();
            this.vendingModel.resetCurrentStatus();
        }
    };
    VendingBlockComponent = __decorate([
        Component({
            selector: 'app-vending-block',
            templateUrl: './vending-block.component.html',
            styleUrls: ['./vending-block.component.css']
        }),
        __metadata("design:paramtypes", [HttpService])
    ], VendingBlockComponent);
    return VendingBlockComponent;
}());
export { VendingBlockComponent };
//# sourceMappingURL=vending-block.component.js.map