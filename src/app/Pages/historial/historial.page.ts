import { Component, OnInit } from '@angular/core';
import { MiModalComponent } from 'src/app/components/mi-modal/mi-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

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
