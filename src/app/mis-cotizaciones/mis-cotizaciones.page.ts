import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';

@Component({
  selector: 'app-mis-cotizaciones',
  templateUrl: './mis-cotizaciones.page.html',
  styleUrls: ['./mis-cotizaciones.page.scss'],
})
export class MisCotizacionesPage implements OnInit {


  cotizaciones$: any = [];

  constructor(public api: AuthProvider,private downloader: Downloader) {}

  ngOnInit() {
    this.getCotizaciones();
  }

  getCotizaciones() {
    this.api.getAllObject('getMisCotizaciones')
      .subscribe((res) => {
        this.cotizaciones$ = res;
        console.log(this.cotizaciones$);
      });
  }

  show(element) {
    console.log(element);

    var request: DownloadRequest = {
      uri: element.file,
      title: element.file,
      description: '',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: ''
      }
    };
    console.log(request);
    
    this.downloader.download(request)
              .then((location: string) => console.log('File downloaded at:'+location))
              .catch((error: any) => console.error(error));

  }

  presentAlertConfirm(element){
    console.log(element);
    
  }
}