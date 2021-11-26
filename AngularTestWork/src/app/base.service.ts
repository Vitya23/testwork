import { Injectable } from '@angular/core';
import { CATS } from './interface';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  cats: CATS[] = [
    {
      img: 'assets/images/cats/cat1.jpg',
      title: 'Shironeko',
      text: 'Самый счастливый кот в мире',
      like: false,
    },
    {
      img: 'assets/images/cats/cat2.jpg',
      title: 'Garfi',
      text: 'Самый злой кот в мире',
      like: true,
    },
    {
      img: 'assets/images/cats/cat3.jpg',
      title: 'Sam',
      text: 'У кота Сэма есть потрясающие брови',
      like: true,
    },
    {
      img: 'assets/images/cats/cat4.jpg',
      title: 'Snoopy',
      text: 'Самый очаровательный котик',
      like: true,
    },
    {
      img: 'assets/images/cats/cat5.jpg',
      title: 'Venus',
      text: 'Кошка с двумя лицами',
      like: true,
    },
    {
      img: 'assets/images/cats/cat6.jpg',
      title: 'Maru',
      text: 'Повелитель коробок',
      like: true,
    },
    {
      img: 'assets/images/cats/cat7.jpg',
      title: 'Lil Bub',
      text: 'Вечный котёнок',
      like: true,
    },
    {
      img: 'assets/images/cats/cat8.jpg',
      title: 'Banye',
      text: 'Всегда удивлённый кот',
      like: true,
    },
    {
      img: 'assets/images/cats/cat9.jpg',
      title: 'Grumpy Cat',
      text: 'Вечно злой кот',
      like: true,
    },
    {
      img: 'assets/images/cats/cat10.jpg',
      title: 'Hamilton',
      text: 'Кот с усами',
      like: true,
    },
    {
      img: 'assets/images/cats/cat11.jpg',
      title: 'Nala',
      text: 'Кот с бабочкой',
      like: true,
    },
    {
      img: 'assets/images/cats/cat12.jpg',
      title: 'Colonel Meow',
      text: 'Это кот?',
      like: true,
    },
  ];

  constructor() {}
}
