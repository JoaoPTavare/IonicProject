import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})


export class HomePage {



  public cardapio1 =[
    {cod: 1, nome: "Pizza Margherita",  Detalhes: "Molho de tomate, mussarela, manjericão fresco", valor: "R$35.00", visibled: false, imagem:'pizza_01.jpg',},
    {cod: 2, nome: "Pizza Pepperoni",  Detalhes: "Molho de tomate, mussarela, pepperoni", valor: "R$40.00", visibled: false, imagem:'pizza_02.jpg',},
    {cod: 3, nome: "Pizza Frango com Catupiry",  Detalhes: "Molho de tomate, mussarela, frango desfiado, catupiry", valor: "R$45.00", visibled: false, imagem:'pizza_03.jpg',},
    {cod: 4, nome: "Pizza Quatro Queijos",  Detalhes: "Molho de tomate, mussarela, parmesão, provolone, gorgonzola", valor: "R$50.00", visibled: false, imagem:'pizza_04.jpg',},
    {cod: 5, nome: "Pizza Calabresa",  Detalhes: "Molho de tomate, mussarela, calabresa fatiada, cebola", valor: "R$42.00", visibled: false, imagem:'pizza_05.jpg',},
    {cod: 6, nome: "Pizza Portuguesa",  Detalhes: "Molho de tomate, mussarela, presunto, cebola, ovos, azeitonas, pimentão", valor: "R$48.00", visibled: false, imagem:'pizza_06.jpg',},
      ]


  public cardapio2 = [
    {cod: 1, nome:"Hambúrguer de frango grelhado", Detalhes:"pão de hambúrguer, hambúrguer de frango grelhado, queijo prato, alface, tomate e molho especial.", valor:20.00, imagem:'burguer_01.jpg', visibled: false},
    {cod: 2, nome:'Hambúrguer clássico', valor:'R$19,90', Detalhes: 'pão de hambúrguer, hambúrguer de carne, queijo cheddar, alface, tomate, cebola e molho especial', imagem:'burguer_02.jpg', visibled: false},
    {cod: 3, nome:'Hambúrguer de frango', valor:' 22,90.', Detalhes: 'pão de hambúrguer, hambúrguer de frango empanado, queijo prato, alface, tomate e molho especial', imagem:'burguer_03.jpg', visibled: false},
    {cod: 4, nome:'Hambúrguer de picanha', valor:'29,90', Detalhes: 'pão de hambúrguer artesanal, hambúrguer de picanha, queijo provolone, bacon, cebola caramelizada e molho barbecue', imagem:'burguer_04.jpg', visibled: false},
    {cod: 5, nome:'Hambúrguer de salmão', valor:' 31,90', Detalhes: 'pão de hambúrguer, hambúrguer de salmão grelhado, cream cheese, rúcula, cebola roxa e molho de mostarda e mel', imagem:'burguer_05.jpg', visibled: false},
    {cod: 6, nome:'Hambúrguer vegano', valor:'R$ 24,90', Detalhes: 'pão de hambúrguer integral, hambúrguer de grão de bico e lentilha, queijo vegano, alface, tomate e maionese de abacate', imagem:'burguer_06.jpg', visibled: false},

    ]

  public categoria = [
    { id: '1', detalhes: this.cardapio1 },
    { id: '2', detalhes: this.cardapio2 }  
  ]
  public cardapioImg = '../../assets/';

  public segment = '1';
  
  constructor(private navCtrl: NavController) {}

 

  public verDetalhes(detalhes:any) {
    this.navCtrl.navigateForward('detalhes', {
      queryParams: { detalhes: detalhes }
    });
  }



 
}
