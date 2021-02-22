import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Restangular } from "ngx-restangular";
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificacionsService {
  ciudad:any;
  mensajes:any = [];
  publicidads:any = [];
  seccions:any = [];
  constructor(
    private platform: Platform,
    private restangular:Restangular,
    private localNotifications: LocalNotifications
  ){ 

  }


  iniciar(){
    this.ciudad = JSON.parse(localStorage.getItem('ciudad'));
    if(this.ciudad){
      // console.log(this.ciudad);
      console.log("cargar notificacion");
      
      this.cargarmensajes(); 
    }
  }

   cargarmensajes(){
    return new Promise(resolve => {
      this.restangular.one('mensajesnotificacion').customGET(this.ciudad.id).toPromise()
        .then((data)=> {
          // console.log(data);
          
          this.mensajes = data.data;
          this.publicidads = data.publicidad;
          this.seccions = data.seccions;
          // console.log(this.mensajes);
          
          this.generarnotificaciones();
          resolve(true);
        },
        ()=>{
          resolve(false);
        });
    });
  }

  generarnotificaciones(){
    if(this.publicidads.length > 0 || this.seccions.length > 0){
      if(this.publicidads.length > 0){
        this.localNotifications.schedule({ 
          id: 0, 
          summary: 'Promociones', 
          group: 'eventos', 
          groupSummary: true,
          smallIcon: 'res://n_icon',
          icon: 'file://assets/imgs/new/tr.png',
          sound: this.platform.is('android') ? 'file://assets/imgs/new/sound.mp3' : 'file://assets/imgs/new/sound.caf',
          // trigger: { every: ELocalNotificationTriggerUnit.DAY},
          trigger: { in: 20, unit: ELocalNotificationTriggerUnit.SECOND },
          led: '662d8e',
          // led: { color: '662d8e', on: 500, off: 500 },
          data: {index:0,item:this.publicidads[0],datos:this.publicidads}, 
          vibrate: true,
          lockscreen: true,
          color: '#662d8e'
        });
      }else{
        this.localNotifications.schedule({ 
          id: 0, 
          summary: 'Promociones', 
          group: 'eventos', 
          groupSummary: true,
          smallIcon: 'res://n_icon',
          icon: 'file://assets/imgs/new/tr.png',
          sound: this.platform.is('android') ? 'file://assets/imgs/new/sound.mp3' : 'file://assets/imgs/new/sound.caf',
          // trigger: { every: ELocalNotificationTriggerUnit.DAY},
          trigger: { in: 20, unit: ELocalNotificationTriggerUnit.SECOND },
          led: '662d8e',
          // led: { color: '662d8e', on: 500, off: 500 },
          data: {index:0,item:this.seccions[0],datos:'seccion',id:0}, 
          vibrate: true,
          lockscreen: true,
          color: '#662d8e'
        });
      }
      
      let id = 1; 
      let index=0;

      for (const iterator of this.publicidads) {
        console.log("id publicidad " +id);
        
        this.localNotifications.schedule(
          {
            id:id, 
            smallIcon: 'res://n_icon',
            // icon: 'file://assets/imgs/new/tr.png',
            title: iterator.titulo,
            // text: "Fecha del Evento "+iterator.expira,
            text: iterator.descripcion,
            attachments: [iterator.imgpequehna],
            color: '#662d8e',
            group: 'eventos',
            led: '662d8e',
            data: {index:index,item:iterator,datos:this.publicidads},
            // trigger: { every: ELocalNotificationTriggerUnit.DAY,count:iterator.dias},
            //  // trigger: { every: ELocalNotificationTriggerUnit.DAY,count:iterator.dias},
            trigger: { in: 22, unit: ELocalNotificationTriggerUnit.SECOND }
          }
        );
        index += 1;
        id += 1;
      } 
      for (const iterator of this.seccions) {
        console.log("id seccion " +id);
        this.localNotifications.schedule(
          {
            id:id, 
            smallIcon: 'res://n_icon',
            // icon: 'file://assets/imgs/new/tr.png',
            title: iterator.nombre,
            // text: "Fecha del Evento "+iterator.expira,
            text: iterator.descripcion,
            attachments: [iterator.imagen],
            color: '#662d8e',
            group: 'eventos',
            led: '662d8e',
            data: {index:index,item:iterator,datos:'seccion',id:id},
            // trigger: { every: ELocalNotificationTriggerUnit.DAY,count:iterator.dias},
            // // trigger: { every: ELocalNotificationTriggerUnit.DAY,count:iterator.dias},
            trigger: { in: 22, unit: ELocalNotificationTriggerUnit.SECOND }
          }
        );
        index += 1;
        id += 1;
      } 
    }


















    // this.localNotifications.schedule(notpublicidads);
    if(this.mensajes.length > 0){
      let dias = [];
      dias[0] = 1;
      dias[1] = 4;
      dias[2] = 5;
      let fecha = new Date();   
      for (let index1 = 0; index1 < 3; index1++) {
        let mensaje = this.mensajes[Math.floor((Math.random() * this.mensajes.length) + 0)];   
        this.localNotifications.schedule(
          {
            id:6+index1,
            title: mensaje.titulo,
            text: mensaje.mensaje,
            smallIcon: 'res://n_icon',
            icon: 'file://assets/imgs/new/tr.png',
            sound: this.platform.is('android') ? 'file://assets/imgs/new/sound.mp3' : 'file://assets/imgs/new/sound.caf',
            trigger: { every: { weekday: dias[index1], hour: 9, minute: 0 },count:5},
            led: '662d8e',
            // led: { color: '#662d8e', on: 500, off: 500 },
            // data:{page:"my page"},
            vibrate: true,
            lockscreen: true,
            color: '#662d8e'
          }
        );
        mensaje = this.mensajes[Math.floor((Math.random() * this.mensajes.length) + 0)];
        this.localNotifications.schedule(
          {
            id:6+index1, 
            title: mensaje.titulo,
            text: mensaje.mensaje,
            smallIcon: 'res://n_icon',
            icon: 'file://assets/imgs/new/tr.png',
            sound: this.platform.is('android') ? 'file://assets/imgs/new/sound.mp3' : 'file://assets/imgs/new/sound.caf',
            trigger: { every: { weekday: dias[index1], hour: 19, minute: 0 },count:5},
            led: '662d8e',
            // led: { color: '#662d8e', on: 500, off: 500 },
            // data:{page:"my page"},
            vibrate: true,
            lockscreen: true,
            color: '#662d8e'
          }
        );
      }   
    }
    
  }
}
