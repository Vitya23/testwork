import { CHANNEL } from './../../interfaces';
import { ChannelsService } from './../channels.service';
import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormArray,
  FormControl,
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
  channels: CHANNEL[];
  formArray: FormArray;

  constructor(private channelService: ChannelsService) {}

  ngOnInit() {
    this.channels = this.channelService.channelsDATA;
  }
  private onChange = (value: any) => {};
  private onTouched = (value: any) => {};

  change(e) {
    if (e.target.checked) {
      this.formArray.push(new FormControl(e.target.value));
    } else {
      this.formArray.removeAt(this.formArray.value.indexOf(e.target.value));
    }
  }

  writeValue(obj: any): void {
    this.formArray = new FormArray(
      obj.map((channel) => {
        return new FormControl(channel);
      })
    );
    console.log(this.formArray.value);

    this.formArray.valueChanges.subscribe((res) => {
      this.onChange(res);
    });
  }

  active(name) {
    return this.formArray.value.includes(name.toLowerCase());
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
