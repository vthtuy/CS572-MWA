import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http'; 
import { shareReplay } from 'rxjs/operators'; 

import { User } from '../users/user.model'; 

@Injectable({
    providedIn : 'root'
})

export class DataService {

    private data;
    private users$ ;

    constructor(private http : HttpClient){}

    getOnlineData() {
 
        return  this.http.get('https://randomuser.me/api/?results=10');

       
        // this.http.get('https://randomuser.me/api/?results=2').subscribe((res:any) => { 
        //     this.data = res.results;
        //     console.log(this.data);
        //     localStorage.setItem("users", JSON.stringify(this.data));
        // }); 
        // return this.data;
    }

    getUserDetailFromCachedData(id : string) {

        //TODO use shareReplay to avoid access localStorage multi times

        var users = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < users.length; i++) {
            if (users[i].login.uuid == id) { 
                return users[i];
            }
        }
        return null;
    }

}