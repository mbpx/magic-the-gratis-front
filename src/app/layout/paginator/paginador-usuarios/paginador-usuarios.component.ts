import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginador-usuarios',
  templateUrl: './paginador-usuarios.component.html',
  styleUrls: ['./paginador-usuarios.component.css']
})
export class PaginadorUsuariosComponent implements OnInit {

  @Input() paginador:any;

  paginas: number[];

  desde:number;

  hasta:number;

  constructor() { }

  ngOnInit(): void {
    this.initPaginator();
  }

  ngOnChanges(changes: SimpleChanges){
    let paginadorActualizado=changes['paginador'];
    if(paginadorActualizado.previousValue){
      this.initPaginator();
    }
  }

  private initPaginator():void{
    this.desde=Math.min(Math.max(1,this.paginador.number-2),this.paginador.totalPages-5);
    this.hasta=Math.max(Math.min(this.paginador.totalPages,this.paginador.number+4),6);
    if(this.paginador.totalPages>5){
      this.paginas=new Array(this.hasta-this.desde+1).fill(0).map((_valor,indice)=>indice+this.desde);
    }else{
    this.paginas=new Array(this.paginador.totalPages).fill(0).map((_valor,indice)=>indice+1);
    }
  }

}