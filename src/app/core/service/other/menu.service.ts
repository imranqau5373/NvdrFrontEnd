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
        name: 'Category Manager', path: '/admin/categories/categories-list', key: 'sports', children: [
          {
            name: 'Category List',
            key: 'sports-list',
            path: '/admin/categories/categories-list'
          },
          {
            name: 'Category Create',
            key: 'sports-create',
            path: '/admin/categories/categories-create'
          }
        ]
      },

      {
        name: 'Facilities Manager', path: '/admin/facilities/facilities-list', key: 'courts', children: [
          {
            name: 'Courts List',
            key: 'courts-list',
            path: '/admin/facilities/facilities-list'
          },
          {
            name: 'Facility Create',
            key: 'courts-create',
            path: '/admin/facilities/facilities-create'
          }
        ]
      },
    ];

    return menu;
  }





}


