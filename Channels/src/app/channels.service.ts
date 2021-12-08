import { CHANNEL, CHANNELS } from './../interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  channelsDATA: CHANNEL[] = [
    {
      name: 'Email',
      icon: 'assets/svg/email.svg',
      subscribe: false,
    },
    {
      name: 'SMS',
      icon: 'assets/svg/sms.svg',
      subscribe: false,
    },
    {
      name: 'Push',
      icon: 'assets/svg/push.svg',
      subscribe: false,
    },
    {
      name: 'Telegram',
      icon: 'assets/svg/telegram.svg',
      subscribe: false,
    },
    {
      name: 'Viber',
      icon: 'assets/svg/viber.svg',
      subscribe: false,
    },
    {
      name: 'Whatsapp',
      icon: 'assets/svg/whatsapp.svg',
      subscribe: false,
    },
  ];

  channels: CHANNELS[] = [];

  add(channel) {
    this.channels.push(channel);
    console.log(this.channels);
  }

  remove(channel) {
    this.channels = this.channels.filter((unsub) => unsub !== channel);
    console.log(this.channels);
  }

  constructor() {}
}
