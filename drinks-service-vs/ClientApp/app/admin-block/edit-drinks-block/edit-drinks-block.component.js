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
import { DrinkItem } from '../../_models/drink.item';
import { HttpService } from '../../_services/http.service';
var EditDrinksBlockComponent = /** @class */ (function () {
    function EditDrinksBlockComponent(httpService) {
        this.httpService = httpService;
        this.drinksIsReady = false; // For data loading control
        this.drinksList = []; // Array of drinks in vending machine
        this.tableMode = true; // Flag to change delete-modify/add mode
        this.drinkForEdit = new DrinkItem(); // Model for change drink item
    }
    EditDrinksBlockComponent.prototype.ngOnInit = function () {
        this.loadDrinks();
    };
    /*
      Loads data from the server
    */
    EditDrinksBlockComponent.prototype.loadDrinks = function () {
        var _this = this;
        this.drinksList = [];
        this.drinksIsReady = false;
        this.httpService.getData("/api/drinks").subscribe(function (data) {
            var dataArray = Array.prototype.slice.call(data, 0);
            for (var key in dataArray) {
                var drinkItem = new DrinkItem(data[key]);
                _this.drinksList.push(drinkItem);
            }
            _this.drinksIsReady = true;
        });
    };
    /*
      Update request to the server
    */
    EditDrinksBlockComponent.prototype.saveChanges = function () {
        this.httpService.putData("/api/drinks", this.drinkForEdit).subscribe();
        this.drinkForEdit = new DrinkItem();
    };
    /*
      Delete request to the server
    */
    EditDrinksBlockComponent.prototype.deleteDrink = function (drink) {
        var _this = this;
        this.httpService.deleteDataByID("/api/drinks", drink.id).subscribe(function () {
            var index = _this.drinksList.indexOf(drink);
            if (index > -1) {
                _this.drinksList.splice(index, 1);
            }
        });
    };
    /*
      Create request to the server
    */
    EditDrinksBlockComponent.prototype.saveNewDrink = function () {
        var _this = this;
        this.httpService.createData("/api/drinks", this.drinkForEdit).subscribe(function () {
            _this.loadDrinks();
            _this.cancel();
        });
    };
    EditDrinksBlockComponent.prototype.editDrink = function (drink) {
        this.drinkForEdit = drink;
    };
    EditDrinksBlockComponent.prototype.cancel = function () {
        this.drinkForEdit = new DrinkItem();
        this.tableMode = true;
    };
    EditDrinksBlockComponent.prototype.switchToCreateMode = function () {
        this.tableMode = false;
        this.drinkForEdit = new DrinkItem();
    };
    EditDrinksBlockComponent = __decorate([
        Component({
            selector: 'app-edit-drinks-block',
            templateUrl: './edit-drinks-block.component.html',
            styleUrls: ['./edit-drinks-block.component.css']
        }),
        __metadata("design:paramtypes", [HttpService])
    ], EditDrinksBlockComponent);
    return EditDrinksBlockComponent;
}());
export { EditDrinksBlockComponent };
//# sourceMappingURL=edit-drinks-block.component.js.map