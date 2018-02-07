import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SocketService} from "./socket.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


import {AppComponent} from './app.component';
import {NicknameComponent} from './nickname/nickname.component';
import {CommunicationService} from "./communication.service";
import {TablaComponent} from './tabla/tabla.component';
import {CajaComponent} from './caja/caja.component';
import {ReglasComponent} from './reglas/reglas.component';


const routes = [
  {'path': '', component: NicknameComponent},
  {'path': 'tabla', component: TablaComponent},
  {'path': 'reglas', component: ReglasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NicknameComponent,
    TablaComponent,
    CajaComponent,
    ReglasComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SocketService, CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
