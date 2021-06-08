import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  contactos$:any = [];

  constructor(public modalController: ModalController,public auth:AuthProvider) { 

  }

  ngOnInit() {
    this.getFavoritos();
  }

  getFavoritos(){  
    this.auth.getAllObject('getcontactos').subscribe((res) =>{ 
      this.contactos$ = res;
      //console.log(this.contactos$);       
    });
  }

  cerrarModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
