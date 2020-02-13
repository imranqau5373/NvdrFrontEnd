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
        name: 'Job manager', path: '/admin/jobs', key: 'add-job', children: [
          {
            name: 'New job',
            key: 'job-info',
            path: '/admin/add-job/job-info'
          },
          {
            name: 'New job',
            key: 'form-builder',
            path: '/admin/add-job/form-builder'
          },
        ]
      },
      {
        name: 'Sports List', path: '/admin/sports-list', key: 'sports', children: [
          {
            name: 'Sports List',
            key: 'sports-list',
            path: '/admin/sports-list'
          }
        ]
      },
      {
        name: 'Category manager', path: '/admin/categories', key: 'categories', children: [
          {
            name: 'Category list',
            key: 'categories-list',
            path: '/admin/categories/categories-list'
          },
          {
            name: 'Add category',
            key: 'categories-add',
            path: '/admin/categories/categories-add'
          },
          {
            name: 'Update category',
            key: 'categories-update',
            path: '/admin/categories/categories-update'
          }
        ]
      }
    ];

    return menu;
  }





}


