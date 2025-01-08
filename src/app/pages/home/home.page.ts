import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonText, IonButton } from '@ionic/angular/standalone';
import {RouterLink} from '@angular/router' //Para navegar importar esta libreria


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, RouterLink],
})
export class HomePage {
  constructor() {}
}
