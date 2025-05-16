import { JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Client {
  name: string;
  surname: string;
  address: string;
  age: number;
}
@Component({
  selector: 'app-custom-page',
  imports: [JsonPipe, SlicePipe, KeyValuePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  clients = signal<Client[]>([{
    name: 'juan',
    surname: 'fernandez',
    address: 'Toronto',
    age: 31
  }, {
    name: 'crist',
    surname: 'mir',
    address: 'Canada',
    age: 31
  }
  ]);

  profile = {
    name: 'juan',
    address: 'Barcelona, Spain',
    age: 50
  };

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada')
    }, 3500);
  });
}
