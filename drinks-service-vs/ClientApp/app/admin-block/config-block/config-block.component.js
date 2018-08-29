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
import { VendingModel } from '../../_models/vending.model';
import { HttpService } from '../../_services/http.service';
var ConfigBlockComponent = /** @class */ (function () {
    function ConfigBlockComponent(httpService) {
        this.httpService = httpService;
        this.modelIsReady = false; // For data loading control
        this.cashIsChanging = false; // For input mode activate/deactivate
    }
    ConfigBlockComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    /*
      Loads data from the server
    */
    ConfigBlockComponent.prototype.loadData = function () {
        var _this = this;
        this.httpService.getData("/api/vending/0").subscribe(function (data) {
            _this.vendingModel = new VendingModel(data);
            _this.modelIsReady = true;
        });
    };
    /*
      Update request to the server
    */
    ConfigBlockComponent.prototype.saveChanges = function () {
        this.httpService.putData("/api/vending", this.vendingModel).subscribe();
    };
    ConfigBlockComponent.prototype.switchChangeCashMode = function () {
        this.cashIsChanging = !this.cashIsChanging;
    };
    ConfigBlockComponent.prototype.saveNewCash = function () {
        this.saveChanges();
        this.switchChangeCashMode();
    };
    ConfigBlockComponent.prototype.changeBlocking = function (coin) {
        this.vendingModel.changeBlockingStatus(coin);
        this.saveChanges();
    };
    ConfigBlockComponent = __decorate([
        Component({
            selector: 'app-config-block',
            templateUrl: './config-block.component.html',
            styleUrls: ['./config-block.component.css']
        }),
        __metadata("design:paramtypes", [HttpService])
    ], ConfigBlockComponent);
    return ConfigBlockComponent;
}());
export { ConfigBlockComponent };
//# sourceMappingURL=config-block.component.js.map