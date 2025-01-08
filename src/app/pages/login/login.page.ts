import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonButtons, IonButton, IonIcon, IonBackButton, 
  IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText,IonButtons,IonButton, 
    IonIcon,IonBackButton, IonItem, IonLabel,IonInput ]
})
export class LoginPage implements OnInit {

  constructor() { }

  usuario={
    username:'',
    password:''
  }
  ngOnInit() {
  }
    
    onSubmit(){
      console.log("works!!!!");
    }

}
