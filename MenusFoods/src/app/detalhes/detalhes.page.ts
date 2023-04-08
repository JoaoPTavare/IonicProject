import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
 
 
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetalhesPage implements OnInit {

  public cardapioImg = '../../assets/';
 
  public quantidade = 0;
  
  public detalhes = { 
    
    cod        : '',
    nome        : '',
    categoria   : '',
    Detalhes   : '', 
    valor       : '', 
    imagem     : '', 
    visibled    :false,

  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.detalhes = params['detalhes'];
    });
  }

  public add(){
    this.quantidade += 1;
  }

  public remove(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }

  ngOnInit() {
  }

   
}
