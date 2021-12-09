import { CHANNEL } from './../../interfaces';
import { ChannelsService } from './../channels.service';
import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChannelsComponent),
  multi: true,
};

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
  providers: [VALUE_ACCESSOR],
})
export class ChannelsComponent implements OnInit, ControlValueAccessor {
  state: boolean;
  channels: CHANNEL[];

  constructor(private channelService: ChannelsService) {}

  ngOnInit() {
    this.channels = this.channelService.channelsDATA;
  }
  private onChange = (value: any) => {};

  setState(idx) {
    this.state = !idx.subscribe;
    idx.subscribe = this.state;
    this.onChange(this.state);
    if (this.state) {
      this.channelService.add(idx.name);
    } else {
      this.channelService.remove(idx.name);
    }
  }

  writeValue(obj: any): void {
    this.state = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
