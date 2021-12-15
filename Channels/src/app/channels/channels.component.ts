import { Channel } from './../../interfaces';
import { ChannelsService } from './../channels.service';
import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

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
  channels: Channel[];
  formArray = new FormArray([]);

  constructor(private channelService: ChannelsService) {}

  ngOnInit() {
    this.channels = this.channelService.channelsDATA;
  }

  private onChange = (value: any) => {};
  private onTouched = (value: Channel) => {};

  change(e) {
    let control = this.formArray;
    if (e.target.checked) {
      control.push(new FormControl(e.target.value));
    } else {
      control.removeAt(this.formArray.value.indexOf(e.target.value));
    }

    this.onChange(control.value);
  }

  writeValue(obj: Channel[]): void {
    console.log('start value');
    this.formArray = new FormArray(
      obj.map((channel) => {
        console.log(channel);
        return new FormControl(channel);
      })
    );
  }

  registerOnChange(fn: (value: Channel) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: Channel) => void) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
