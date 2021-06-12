import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  lpz$:any = [];
  cbba$:any = [];
  stz$:any = [];
  oru$:any = [];
  pot$:any = [];
  suc$:any = [];
  tar$:any = [];
  beni$:any = [];
  pando$:any = [];

  constructor(public modalController: ModalController,public auth:AuthProvider) { 

  }

  ngOnInit() {
    this.getCiudadaLPZ();
    this.getCiudadaCBBA();
    this.getCiudadaSTCZ();
    this.getCiudadaORU();
    this.getCiudadaPOT();
    this.getCiudadaSUC();
    this.getCiudadaTAR();
    this.getCiudadaBENI();
    this.getCiudadaPANDO();
  }

  getCiudadaLPZ(){  
    this.auth.getAllObject('contactgetLPZ').subscribe((res) =>{ 
      this.lpz$ = res;
      //console.log(this.contactos$);       
    });
  }

  getCiudadaCBBA(){  
    this.auth.getAllObject('contactgetCBBA').subscribe((res) =>{ 
      this.cbba$ = res;
      //console.log(this.contactos$);       
    });
  }

  getCiudadaSTCZ(){  
    this.auth.getAllObject('contactgetSTCZ').subscribe((res) =>{ 
      this.stz$ = res;
      //console.log(this.contactos$);       
    });
  }

  getCiudadaORU(){  
    this.auth.getAllObject('contactgetOR').subscribe((res) =>{ 
      this.oru$ = res;
      //console.log(this.contactos$);       
    });
  }
  getCiudadaPOT(){  
    this.auth.getAllObject('contactgetPOT').subscribe((res) =>{ 
      this.pot$ = res;
      //console.log(this.contactos$);       
    });
  }
  getCiudadaSUC(){  
    this.auth.getAllObject('contactgetSUC').subscribe((res) =>{ 
      this.suc$ = res;
      //console.log(this.contactos$);       
    });
  }
  getCiudadaTAR(){  
    this.auth.getAllObject('contactgetTAR').subscribe((res) =>{ 
      this.tar$ = res;
      //console.log(this.contactos$);       
    });
  }

  getCiudadaBENI(){  
    this.auth.getAllObject('contactgetBENI').subscribe((res) =>{ 
      this.beni$ = res;
      //console.log(this.contactos$);       
    });
  }
  getCiudadaPANDO(){  
    this.auth.getAllObject('contactgetPANDO').subscribe((res) =>{ 
      this.pando$ = res;
      //console.log(this.contactos$);       
    });
  }
  
  cerrarModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
