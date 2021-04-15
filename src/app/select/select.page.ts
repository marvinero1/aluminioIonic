import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  public isLogged:boolean = false;
  constructor(public router:Router) { }

  ngOnInit() {
    this.onCheckUser();  

  }

  goProducts(){
    this.router.navigate(['/productos']);
  }

  goImportadoras(){
    this.router.navigate(['/importadoras']);
  }

  getCurrentUser() {
    let user_string = localStorage.getItem("currentUser");
    if (user_string) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  onCheckUser(): void {
    if (this.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
