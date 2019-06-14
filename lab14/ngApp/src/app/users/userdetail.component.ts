import { Component } from "@angular/core";
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
    selector : 'user-detail',

    template : `
        <h2> Hello user detail </h2>
        <p>Id: {{user.login.uuid}}  </p>
        <p>First Last Name: {{user.name.first }} {{user.name.last }}</p>
       
    `,

    providers : [],

    styles : []

})

export class UserdetailComponent {

    private data : any[];
    private user
    private id;
    constructor(private route: ActivatedRoute, private userService : DataService) {
        const uuid: Observable<string> = route.params.pipe(map(p => p.id));
        console.log(uuid);
        route.params.subscribe(params => {this.id = params['uuid']})
       
        this.user = userService.getUserDetailFromCachedData(this.id);
        
        console.log(this.user)
    }

    ngOnInit() {
       
    }

}