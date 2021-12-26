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
  form: FormGroup;

  constructor(private channelService: ChannelsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      Email: new FormControl('email'),
      SMS: new FormControl('sms'),
      Push: new FormControl('push'),
      Telegram: new FormControl('telegram'),
      Viber: new FormControl('viber'),
      Whatsapp: new FormControl('whatsapp'),
    });
    this.channels = this.channelService.channelsDATA;
  }

  private onChange = (value: Channel) => {};
  private onTouched = (value: Channel) => {};

  change(e, name) {
    let control = this.form.get(name).value;
    if (e.target.checked) {
      this.formArray.push(new FormControl(control));
    } else {
      this.formArray.removeAt(this.formArray.value.indexOf(control));
    }

    this.onChange(this.formArray.value);
  }

  writeValue(obj: Channel[]): void {
    console.log(obj);
    this.formArray = new FormArray(
      obj.map((channel) => {
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
