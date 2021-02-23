import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string,columna:string): any[] {
    //console.log(arreglo);
    if(texto === ''){
      return arreglo
    }

    return arreglo.filter(item =>{
      return item[columna].toLowerCase().includes(texto.toLowerCase());
    });
  }
}
