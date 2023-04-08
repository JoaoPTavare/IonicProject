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

  public cardapio1 = [
    {nome: "Pizza Margherita", codigo:1, ingrediente: "Molho de tomate, mussarela, manjericão fresco", valor: 35.00, visibled: false, img:['img_pizza01']},
    {nome: "Pizza Pepperoni", codigo:1, ingrediente: "Molho de tomate, mussarela, pepperoni", valor: 40.00, visibled: false, img:['img_pizza02']},
    {nome: "Pizza Frango com Catupiry", codigo:1, ingrediente: "Molho de tomate, mussarela, frango desfiado, catupiry", valor: 45.00, visibled: false, img:['img_pizza03']},
    {nome: "Pizza Quatro Queijos", codigo:1, ingrediente: "Molho de tomate, mussarela, parmesão, provolone, gorgonzola", valor: 50.00, visibled: false, img:['img_pizza04']},
    {nome: "Pizza Calabresa", codigo:1, ingrediente: "Molho de tomate, mussarela, calabresa fatiada, cebola", valor: 42.00, visibled: false, img:['img_pizza05']},
    {nome: "Pizza Portuguesa", codigo:1, ingrediente: "Molho de tomate, mussarela, presunto, cebola, ovos, azeitonas, pimentão", valor: 48.00, visibled: false, img:['img_pizza06']} ] 

  public cardapio2 = [
    {nome:"Hambúrguer de frango grelhado",  codigo: 2, ingredientes:"pão de hambúrguer, hambúrguer de frango grelhado, queijo prato, alface, tomate e molho especial.", valor:20.00, visibled: false},
    {nome:"Hambúrguer vegetariano", codigo: 2, ingredientes:"pão de hambúrguer integral, hambúrguer vegetariano de soja, queijo branco, rúcula, cebola roxa e molho de iogurte.", valor:22.00, visibled: false},
    {nome:"Hambúrguer de carne com cheddar", codigo: 2, ingredientes:"pão de hambúrguer, hambúrguer de carne, queijo cheddar derretido, cebola caramelizada, picles e maionese caseira.", valor:25.00, visibled: false},
    {nome:"Hambúrguer de picanha", codigo: 2, ingredientes:"pão de hambúrguer artesanal, hambúrguer de picanha, queijo gorgonzola, bacon crocante, rúcula e molho de mostarda e mel.", valor:30.00, visibled: false},
    {nome:"Hambúrguer de salmão", codigo: 2, ingredientes:"pão de hambúrguer, hambúrguer de salmão grelhado, queijo brie, alface americana, tomate e molho tártaro.", valor:35.00, visibled: false},
    {nome:"Hambúrguer de cordeiro", codigo: 2, ingredientes:"pão de hambúrguer, hambúrguer de cordeiro temperado, queijo de cabra, rúcula, cebola roxa e molho de hortelã.", valor:40.00, visibled: false} ]

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
