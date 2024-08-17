import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from './user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: "ceca",
      username: "cecaNoviSad",
      email: "ceca@gmail.com",
      address: {
        street: "santica",
        suite: "nosuite",
        city: "Novi Sad",
        zipcode: "21000",
        geo: {
          lat: "00",
          lng: "11",
        }
      },
      phone: "444",
      website: "www.ja.com",
      company: {
        name: "danas",
        catchPhrase: "sutra",
        bs: "nobs"
      }
    }
  ];

  constructor(private userService: UserServiceService, private fb: FormBuilder) { }

  userForm = this.fb.group({
    id: [''],
    name: [''],
    phone: [''],
  })

  get nameValue(): string {
    return this.userForm.value.name || '';
  }

  get phoneValue(): string {
    return this.userForm.value.phone || '';
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe( (users: User[]) => {
      console.log(users);
      this.users = users;
    });
  }

  createUser(): void {
    this.userService.createUser({...this.users[0], name: this.nameValue, phone: this.phoneValue })
      .subscribe( (data) => this.users.push(data));
    // this.users = [...this.users, {...this.users[0], id: this.users.length, name: this.nameValue, phone: this.phoneValue }]
    this.userForm.reset(); 
  }

  deleteUser(id: number): void {
    this.userService.delete(this.users[id].id); 
    this.users = this.users.filter( (user: User) => id !== user.id) 
  }
}
