import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from "../clases/listas";

@Pipe({
    name: 'pendientes',
    pure: false // esto me dice que es un pipe impuro, tiene que estar pendiente de los cambios
})
export class PendientesPipe implements PipeTransform {
    transform( listas: Lista[], estado: boolean = false ): Lista[] {
       
        let nuevaLista: Lista[] = []; 

        for (let lista of listas) {

            if ( lista.terminado == estado ) {
                nuevaLista.push( lista );
            }
        }
        return nuevaLista;
    }
}