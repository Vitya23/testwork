import { Channel, Channels } from './../interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  channelsDATA: Channel[] = [
    {
      name: 'Email',
      icon: 'assets/svg/email.svg',
    },
    {
      name: 'SMS',
      icon: 'assets/svg/sms.svg',
    },
    {
      name: 'Push',
      icon: 'assets/svg/push.svg',
    },
    {
      name: 'Telegram',
      icon: 'assets/svg/telegram.svg',
    },
    {
      name: 'Viber',
      icon: 'assets/svg/viber.svg',
    },
    {
      name: 'Whatsapp',
      icon: 'assets/svg/whatsapp.svg',
    },
  ];

  constructor() {}

  get(): Channels {
    return { channels: ['telegram', 'email'] };
  }

  send(form): Channels {
    console.log(form);
    return form;
  }
}
