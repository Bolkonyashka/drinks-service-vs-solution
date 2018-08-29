var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Component } from '@angular/core';
import { DrinkItem } from '../../_models/drink.item';
var DrinkItemsComponent = /** @class */ (function () {
    function DrinkItemsComponent() {
    }
    DrinkItemsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", DrinkItem)
    ], DrinkItemsComponent.prototype, "drinkItem", void 0);
    DrinkItemsComponent = __decorate([
        Component({
            selector: 'app-drink-items',
            templateUrl: './drink-items.component.html',
            styleUrls: ['./drink-items.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DrinkItemsComponent);
    return DrinkItemsComponent;
}());
export { DrinkItemsComponent };
//# sourceMappingURL=drink-items.component.js.map