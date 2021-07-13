import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Restangular } from 'ngx-restangular';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-contrasenia',
  templateUrl: './contrasenia.page.html',
  styleUrls: ['./contrasenia.page.scss'],
})
export class ContraseniaPage implements OnInit {

  id:number;
  email:any;
  password:any;
  logs:any=[];
  dataForm: FormGroup;
  usuarios$:any=[];

  constructor(private _formBuilder: FormBuilder,public auth:AuthProvider, private restangular:Restangular,) { }

  ngOnInit() {
    this.dataForm = this.createForm();
    this.getEmail();
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      id : [this.id],
      //nombre: [this.data.nombre,Validators.compose([Validators.required])],
      email: [this.email],
      password: [this.password],
    });
  }

  submitData(){
    let data = this.dataForm.value;
    let id = data.id;
    console.log(data);
         
    this.auth.updateObjectByIdUser('updatepasswordIonic/', id , data).subscribe((datav) => {
      // console.log("Contra Cambiado");
      window.location.reload();
    });
    
  }

  getEmail(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res; 
      // console.log(this.usuarios$);
    });
  }

}
