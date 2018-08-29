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
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { HttpService } from '../_services/http.service';
var AdminBlockComponent = /** @class */ (function () {
    function AdminBlockComponent(activateRoute, router, httpService) {
        this.activateRoute = activateRoute;
        this.router = router;
        this.httpService = httpService;
        this.verySecretKey = "koko"; // Safety first
        this.configAction = true; // Admin panel mode flag
        this.keyChecking();
    }
    AdminBlockComponent.prototype.ngOnInit = function () {
    };
    /*
      Key checking. If the key is incorrect - return to the main page
    */
    AdminBlockComponent.prototype.keyChecking = function () {
        var _this = this;
        this.paramKey = this.activateRoute.snapshot.params['key'];
        this.keyIsRight = this.verySecretKey == this.paramKey.toString();
        if (!this.keyIsRight) {
            setTimeout(function () { _this.router.navigate(['/']); }, 5000);
        }
    };
    AdminBlockComponent.prototype.openConfig = function () {
        this.configAction = true;
    };
    AdminBlockComponent.prototype.openDrinkList = function () {
        this.configAction = false;
    };
    AdminBlockComponent = __decorate([
        Component({
            selector: 'app-admin-block',
            templateUrl: './admin-block.component.html',
            styleUrls: ['./admin-block.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router, HttpService])
    ], AdminBlockComponent);
    return AdminBlockComponent;
}());
export { AdminBlockComponent };
//# sourceMappingURL=admin-block.component.js.map