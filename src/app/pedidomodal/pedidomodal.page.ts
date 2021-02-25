import { Component, Input, OnInit, VERSION } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pedidomodal',
  templateUrl: './pedidomodal.page.html',
  styleUrls: ['./pedidomodal.page.scss'],
})
export class PedidomodalPage implements OnInit {
  @Input() nombre: string;
  @Input() alto: string;
  @Input() ancho: string;
  @Input() categorias_id: string;
  @Input() codigo: string;
  @Input() color: string;
  @Input() descripcion: string;
  @Input() disponibilidad: string;
  @Input() estado: string;
  @Input() id: string;
  @Input() imagen: string;
  @Input() novedad: string;
  @Input() precio: string;
  @Input() puntuacion: string;
  @Input() subcategorias_id: string;
  @Input() tipo_medida: string;


  
  constructor(public modalController: ModalController,) { }

  ngOnInit() {
   
    console.log(this.nombre);
    
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  name = 'Angular ' + VERSION.major;
  value = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }
}
