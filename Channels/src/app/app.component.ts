import { ChannelsService } from './channels.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private ch: ChannelsService) {}
  ngOnInit() {
    this.form = this.fb.group({
      channels: this.fb.control([]),
    });
    this.form.patchValue(this.ch.get());
  }

  click() {
    console.log(this.form.value.channels);
  }
}
