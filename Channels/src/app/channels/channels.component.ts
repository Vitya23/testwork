import { Channel } from './../../interfaces';
import { channelsDATA } from './config';
import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormArray,
  FormGroup,
  FormBuilder,
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
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.channels = channelsDATA;

    this.form = this.fb.group({
      channels: this.fb.array(this.channels.map((x) => x.name.toLowerCase())),
    });
  }

  private onChange = (value: Channel) => {};
  private onTouched = (value: Channel) => {};

  change(i) {
    const checkboxControl = this.form.controls.channels as FormArray;

    if (checkboxControl.controls[i].value) {
      checkboxControl.controls[i].patchValue(
        this.channels[i].name.toLowerCase(),
        {
          emitEvent: false,
        }
      );
    }

    this.onChange(checkboxControl.value.filter((value) => !!value));
  }

  writeValue(obj: string[]): void {
    const checkboxControl = this.form.controls.channels as FormArray;

    checkboxControl.controls.map((e, i) => {
      if (obj.length > 0 && obj.includes(e.value)) {
        return;
      } else {
        checkboxControl.controls[i].patchValue(false);
      }
    });
  }

  registerOnChange(fn: (value: Channel) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: Channel) => void) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
