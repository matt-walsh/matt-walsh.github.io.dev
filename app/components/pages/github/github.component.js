"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var github_service_1 = require("../../../services/github/github.service");
var GithubComponent = (function () {
    function GithubComponent(_githubService) {
        var _this = this;
        this._githubService = _githubService;
        //Get user, repo, and number of starred repos from GitHub using the github.service
        this._githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
        this._githubService.getStarred().subscribe(function (starredRepos) {
            _this.starred = starredRepos.length;
        });
    }
    GithubComponent.prototype.getIssuesURL = function (issue_url) {
        return issue_url.split("{", 1)[0];
    };
    GithubComponent.prototype.getFormattedDate = function (date) {
        return date.split("T", 1)[0];
    };
    return GithubComponent;
}());
GithubComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'github',
        templateUrl: 'github.component.html',
        styleUrls: ['github.component.css']
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], GithubComponent);
exports.GithubComponent = GithubComponent;
//# sourceMappingURL=github.component.js.map