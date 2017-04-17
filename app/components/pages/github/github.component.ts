import { Component } from '@angular/core';
import {GithubService} from '../../../services/github/github.service';

@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html',
    styleUrls:['github.component.css']
})
export class GithubComponent{ 
    user: any;
    repos: any[];
    starred: number;


    constructor(private _githubService: GithubService){
        //Get user, repo, and number of starred repos from GitHub using the github.service
        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos; 
        });

        this._githubService.getStarred().subscribe(starredRepos=>{
            this.starred = starredRepos.length;
        });
    }

    public getIssuesURL(issue_url: string){
        return issue_url.split("{",1)[0];
    }

    public getFormattedDate(date: string){
        return date.split("T", 1)[0];
    }
}
