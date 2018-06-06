import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

    listas: Lista[] = [];

    constructor(){

        let lista1 = new Lista( "compras" );
        let lista2 = new Lista( "juegos" );
        let lista3 = new Lista( "Equipos" );

        this.listas.push( lista1 );
        this.listas.push( lista2 );
        this.listas.push( lista3 );

        console.log("servicio inicializado...");
    }
}