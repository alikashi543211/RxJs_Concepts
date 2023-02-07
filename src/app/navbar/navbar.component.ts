import { DesignUtilityService } from './../services/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    exclusive:boolean = false;
    constructor(private _designUtilityService:DesignUtilityService) {

    }

    ngOnInit(): void {
        this._designUtilityService.exclusive.subscribe(res => {
            this.exclusive = res;
        });
    }

}
