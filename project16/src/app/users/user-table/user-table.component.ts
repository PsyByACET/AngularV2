import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Muser, MyWorkerType } from 'src/app/shared/models/muser.model';
import { MuserService } from 'src/app/shared/services/muser.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: Muser[] = [];
  id: number;
  myWorkerType = MyWorkerType;
  
  @Input() typeS = null;
  @Input() title = '';
  @Input() searchStroke = '';
  

  constructor(private muserSevice: MuserService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }


  getByType(type: number) {
    // console.log(type);
    // console.log(this.users);
    return this.users.filter(users => users.type === type);
  }

  FindAge(birthday: string): any{
    let timeDiff = Math.abs(Date.now() - Date.parse(birthday));
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    return age;
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }
  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
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
  async onDelete(id: number) {
    try {
        await this.muserSevice.deleteOneById(id);
        this.getData();
      //await this.muserSevice.deleteOneById(this.id);
    } catch(err) {
      console.error(err);
    }
  }
}
