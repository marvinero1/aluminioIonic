import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos$:any = [];
  constructor(public api:AuthProvider,public alertController: AlertController,
    private router: Router,) { }

  ngOnInit() {
    this.getPedido();
  }

  getPedido(){
    this.api.getAllObject('getPedidoRealizado')
    .subscribe((res) =>{ 
      this.pedidos$ = res;
      console.log(this.pedidos$);        
    });
    }

    
    perfil(){
      this.router.navigate(['/perfil']);
    }
}
