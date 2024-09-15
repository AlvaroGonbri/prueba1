import { Component, OnInit } from '@angular/core';
import { MiModalComponent } from 'src/app/components/mi-modal/mi-modal.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.page.html',
  styleUrls: ['./despacho.page.scss'],
})
export class DespachoPage implements OnInit {
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Si',
      cssClass: 'alert-button-confirm',
    },
  ];


  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: MiModalComponent,
    });
    return await modal.present();

}
}