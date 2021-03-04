import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos$:any = [];
  constructor(public api:AuthProvider) { }

  ngOnInit() {
    this.getPedido();
  }

  getPedido(){
    this.api.getAllObject('getPedido')
    .subscribe((res) =>{ 
      this.pedidos$ = res;
      //console.log(this.pedidos$);        
    });
    }

}
