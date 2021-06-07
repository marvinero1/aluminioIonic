import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cantactanos',
  templateUrl: './cantactanos.page.html',
  styleUrls: ['./cantactanos.page.scss'],
})
export class CantactanosPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }

}
