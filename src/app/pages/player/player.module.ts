import { TopArtistComponent } from './../../components/top-artist/top-artist.component';
import { HomeComponent } from './../home/home.component';
import { MenuBottomComponent } from './../../components/menu-bottom/menu-bottom.component';
import { LeftPainelComponent } from './../../components/left-painel/left-painel.component';
import { PlayerRoutes } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFooterComponent } from 'src/app/components/user-footer/user-footer.component';



@NgModule({
  declarations: [
    PlayerComponent,
    LeftPainelComponent,
    MenuBottomComponent,
    UserFooterComponent,
    HomeComponent,
    TopArtistComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
