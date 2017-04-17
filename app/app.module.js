"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var about_component_1 = require("./components/pages/about/about.component");
var github_component_1 = require("./components/pages/github/github.component");
var missing_component_1 = require("./components/pages/missing/missing.component");
var contact_component_1 = require("./components/pages/contact/contact.component");
var github_service_1 = require("./services/github/github.service");
var appRoutes = [
    //{ path: '', component: HomeComponent },
    { path: '', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'github', component: github_component_1.GithubComponent },
    { path: '**', component: missing_component_1.MissingComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule],
        declarations: [app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            //HomeComponent,
            about_component_1.AboutComponent,
            github_component_1.GithubComponent,
            contact_component_1.ContactComponent,
            missing_component_1.MissingComponent],
        providers: [platform_browser_1.Title, github_service_1.GithubService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map