import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username: string;

    constructor(private _http: Http){
        console.log("Github Service Ready...");
        this.username = "matt-walsh";
    }

    getUser(){
        return this._http.get("http://api.github.com/users/" + this.username)
        .map(res =>res.json());
    };

    getRepos(){
        return this._http.get("http://api.github.com/users/" + this.username + "/repos")
        .map(res =>res.json());
    };

    getStarred(){
        return this._http.get("https://api.github.com/users/"+ this.username + "/starred")
        .map(res=>res.json());
    }

    setUser(username: string){
        this.username = username;
    }
}