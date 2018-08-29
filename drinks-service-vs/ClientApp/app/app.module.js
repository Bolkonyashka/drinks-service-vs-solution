var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VendingBlockComponent } from './vending-block/vending-block.component';
import { DrinkItemsComponent } from './vending-block/drink-items/drink-items.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './_services/http.service';
import { AdminBlockComponent } from './admin-block/admin-block.component';
import { ConfigBlockComponent } from './admin-block/config-block/config-block.component';
import { EditDrinksBlockComponent } from './admin-block/edit-drinks-block/edit-drinks-block.component';
var appRoutes = [
    { path: '', component: VendingBlockComponent },
    { path: 'admin/:key', component: AdminBlockComponent },
    { path: '**', component: VendingBlockComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                VendingBlockComponent,
                DrinkItemsComponent,
                AdminBlockComponent,
                ConfigBlockComponent,
                EditDrinksBlockComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                RouterModule.forRoot(appRoutes),
                FormsModule
            ],
            providers: [HttpService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map