import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goProducts(){
    this.router.navigate(['/productos']);
  }

  goImportadoras(){
    this.router.navigate(['/importadoras']);
  }
}
