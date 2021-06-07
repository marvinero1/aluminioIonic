import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-mis-cotizaciones',
  templateUrl: './mis-cotizaciones.page.html',
  styleUrls: ['./mis-cotizaciones.page.scss'],
})
export class MisCotizacionesPage implements OnInit {
 

  cotizaciones$: any = [];
  logs:any=[];
  usuarios$:any=[];
  
  constructor(public auth: AuthProvider,private transfer: FileTransfer,
    private file: File) {}

  ngOnInit() {
    this.getUser();
  }

  getCotizaciones(user_id:number) {
    this.auth.getAllObjectById('getMisCotizaciones/', user_id)
      .subscribe((res) => {
        this.cotizaciones$ = res;
        console.log(this.cotizaciones$);
      });
  }

  show(element) {

    //console.log(element);

    const fileTransfer: FileTransferObject = this.transfer.create();

    const url = ('http://192.168.1.7:5000/api/');

    //console.log(url);
    
    fileTransfer.download(url, 'download/' + element.file ).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log(error);
    });
  }

  presentAlertConfirm(element){
    console.log(element);
  }

  
  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
      let user_id =  this.usuarios$.id;

      this.getCotizaciones(user_id);
      //console.log(this.usuarios$);
    });
  }
}