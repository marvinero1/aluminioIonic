import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Restangular } from "ngx-restangular";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos$:any=[];
  
  constructor(public api:AuthProvider,private http:HttpClient, 
    private restangular:Restangular,private router: Router, ) { 
    
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
      this.api.getAllObject('productos')
      .subscribe((res) =>{ 
        this.productos$ = res;
        console.log(this.productos$);
                
      });
  }
  producto(){
    this.router.navigate(['/producto/', this.productos$.id, ]);
  }

}
