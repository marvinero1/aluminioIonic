import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
import { Router } from '@angular/router';
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
    private file: File, private downloader:Downloader,private router: Router ) {}

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

    // const fileTransfer: FileTransferObject = this.transfer.create();

    // const url = ('https://192.168.1.7:5000/api/');
    const url = ('https://altools.es/api/');

    var downloadURL = (url + 'download/' + element.file);
    let menjsa=("Mi Cotizacion"+ element.file);
    let descr=("Descripcion"+element.descripcion);

    var request: DownloadRequest = {
      uri: downloadURL,
      title: menjsa,
      description: descr,
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: 'MyFile.pdf'
        }
    };

    this.downloader.download(request)
    .then((location: string) => console.log('File downloaded at:'+location))
    .catch((error: any) => console.error(error));

    console.log(downloadURL );
    
    // fileTransfer.download(url, 'download/' + element.file ).then((entry) => {
    //   console.log('download complete: ' + entry.toURL());
    // }, (error) => {
    //   console.log(error);
    // });
  }

  presentAlertConfirm(element){
    console.log(element);
  }
  perfil(){
    this.router.navigate(['/perfil']);
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