import { Channel, Channels } from './../interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  constructor() {}

  get(): Channels {
    return { channels: ['telegram', 'email'] };
  }
}
