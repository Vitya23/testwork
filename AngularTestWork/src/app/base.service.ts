import { Injectable } from '@angular/core';
import { CATS } from './interface';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  like_on: string = "assets/images/like_full.svg"
  like_off: string = "assets/images/like.svg"

  cats: CATS[] = [
    {
      id: '1',
      img: 'assets/images/cats/cat1.jpg',
      title: 'Shironeko',
      text: 'Самый счастливый кот в мире',
      like: false,
    },
    {
      id: '2',
      img: 'assets/images/cats/cat2.jpg',
      title: 'Garfi',
      text: 'Самый злой кот в мире',
      like: true,
    },
    {
      id: '3',
      img: 'assets/images/cats/cat3.jpg',
      title: 'Sam',
      text: 'У кота Сэма есть потрясающие брови',
      like: true,
    },
    {
      id: '4',
      img: 'assets/images/cats/cat4.jpg',
      title: 'Snoopy',
      text: 'Самый очаровательный котик',
      like: true,
    },
    {
      id: '5',
      img: 'assets/images/cats/cat5.jpg',
      title: 'Venus',
      text: 'Кошка с двумя лицами',
      like: true,
    },
    {
      id: '6',
      img: 'assets/images/cats/cat6.jpg',
      title: 'Maru',
      text: 'Повелитель коробок',
      like: true,
    },
    {
      id: '7',
      img: 'assets/images/cats/cat7.jpg',
      title: 'Lil Bub',
      text: 'Вечный котёнок',
      like: true,
    },
    {
      id: '8',
      img: 'assets/images/cats/cat8.jpg',
      title: 'Banye',
      text: 'Всегда удивлённый кот',
      like: true,
    },
    {
      id: '9',
      img: 'assets/images/cats/cat9.jpg',
      title: 'Grumpy Cat',
      text: 'Вечно злой кот',
      like: true,
    },
    {
      id: '10',
      img: 'assets/images/cats/cat10.jpg',
      title: 'Hamilton',
      text: 'Кот с усами',
      like: true,
    },
    {
      id: '11',
      img: 'assets/images/cats/cat11.jpg',
      title: 'Nala',
      text: 'Кот с бабочкой',
      like: true,
    },
    {
      id: '12',
      img: 'assets/images/cats/cat12.jpg',
      title: 'Colonel Meow',
      text: 'Это кот?',
      like: true,
    },
  ];

  constructor() {}

  changeLikes(id) {
    this.cats.map((item) => {
      if (id === item.id) {
        item.like = !item.like;
      }
    })
  }

  getLikes(type) {
   if(type){
    return this.like_on
   }
   else{
     return this.like_off
   }
  }
}
