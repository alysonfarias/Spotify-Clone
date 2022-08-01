import { HomeComponent } from './../home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';

export const PlayerRoutes: Routes = [
  {
    path: '', component: PlayerComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  }
]
