"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerReviewsPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var pipe_module_1 = require("src/app/Pipes/pipe/pipe.module");
var angular_1 = require("@ionic/angular");
var customer_reviews_routing_module_1 = require("./customer-reviews-routing.module");
var ionic4_star_rating_1 = require("ionic4-star-rating");
var customer_reviews_page_1 = require("./customer-reviews.page");
var CustomerReviewsPageModule = /** @class */ (function () {
    function CustomerReviewsPageModule() {
    }
    CustomerReviewsPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                customer_reviews_routing_module_1.CustomerReviewsPageRoutingModule,
                pipe_module_1.PipeModule,
                ionic4_star_rating_1.StarRatingModule
            ],
            declarations: [customer_reviews_page_1.CustomerReviewsPage]
        })
    ], CustomerReviewsPageModule);
    return CustomerReviewsPageModule;
}());
exports.CustomerReviewsPageModule = CustomerReviewsPageModule;
