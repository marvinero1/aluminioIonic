import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  
  public productoId:any = [];
  public novedad:boolean;

  constructor(private http:HttpClient,public api:AuthProvider,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.productoId = id;
    this.getProductById();
  }

  getProductById(){
    let routeParamId: string | number | null = this.route.snapshot.paramMap.get('id');
    if(routeParamId){
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      let a = this.api.getAllObjectById('productos/',id).subscribe((res) =>{ 
        this.productoId = res;
        console.log(this.productoId);
        this.novedad = this.productoId.novedad 
      });
    }
  }

  name = 'Angular ' + VERSION.major;
  value = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  favorito(productoFavorito){
    console.log('favorits');
    
  }



  back(){
    this.router.navigate(['/productos']);
  }
}
