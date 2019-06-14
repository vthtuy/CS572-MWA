import { NgModule } from "@angular/core"; 
import { RouterModule } from '@angular/router';


import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from './userdetail.component';

@NgModule( {

    declarations:[
        UserComponent,
        UserdetailComponent
    ],

    imports:[ 
        CommonModule,
        RouterModule.forChild([
            { path: '', component: UserComponent },
            { path: 'users', component: UserComponent },
            { path: 'users/:uuid', component : UserdetailComponent}
          ])
    ],
    
    providers:[],

    bootstrap:[UserComponent]

})

export class UserModule{}