import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Muser, MyWorkerType } from 'src/app/shared/models/muser.model';
import { MuserService } from 'src/app/shared/services/muser.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Muser[];
  myWorkerType = MyWorkerType;

  constructor(private muserSevice: MuserService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  // getByType(type: number) {
  //   return this.users.filter(users => users.type === type)
  // }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile'])
  }
  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id])
  }

  async getData() {
    try {
      let users = this.muserSevice.getAll();
      this.users = isNullOrUndefined(await users) ? [] : await users; 
      //this.users = await users;
    } catch(err) {
      console.error(err);
    }
  }
}
