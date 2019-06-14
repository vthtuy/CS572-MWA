import { Component } from "@angular/core";
import { DataService } from '../service/data.service'; 
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({

    selector : 'user',

    template : `
        <p> hello user</p>
        <table>
            <thead>
                <td>Name</td>
                <td>Account</td>
                <td>Action</td>
            </thead>
            <tr *ngFor="let item of data">
                <td>{{item.name.first }} {{item.name.last }}</td>
                <td>{{item.login.username}}</td>
                <td><a [routerLink]="['users', item.login.uuid ]">Detail</a></td>
            </tr>
        </table>
    `,

    providers : [],

    styles : [] 
})

export class UserComponent {
    private data : any[]
    private sub : Subscription;
    constructor(private userService : DataService) { 
    }

    ngOnInit() { 
        this.sub = this.userService.getOnlineData().subscribe((res:any) => { 
            this.data = res.results ;
            console.log(this.data);
            localStorage.setItem("users", JSON.stringify(this.data));
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}