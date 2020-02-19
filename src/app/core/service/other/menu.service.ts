import { Injectable } from '@angular/core';
import { HttpApiService } from '@shared/http-api-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
  ) { }

  //This is template service. whenever create new service. copy this code and paste it in new service and do changes according to it.


  getMenu(): Array<any> {
    const menu = [
      {
        name: 'Dashboard', path: '/admin/home', key: 'home', children: [

        ]
      },
      {
        name: 'Settings', path: '/admin/settings', key: 'settings', children: [
          {
            name: 'View profile',
            key: 'my-profile',
            path: '/admin/settings/my-profile'
          }
        ]
      },

      {
        name: 'Sports Manager', path: '/admin/sports/sports-list', key: 'sports', children: [
          {
            name: 'Sports List',
            key: 'sports-list',
            path: '/admin/sports/sports-list'
          },
          {
            name: 'Sports Create',
            key: 'sports-create',
            path: '/admin/sports/sports-create'
          }
        ]
      },

      {
        name: 'Courts Manager', path: '/admin/courts/courts-list', key: 'courts', children: [
          {
            name: 'Courts List',
            key: 'courts-list',
            path: '/admin/courts/courts-list'
          },
          {
            name: 'Courts Create',
            key: 'courts-create',
            path: '/admin/courts/courts-create'
          }
        ]
      },
    ];

    return menu;
  }





}


