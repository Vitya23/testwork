import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/project/shared/base.service';
import { CATS } from 'src/app/project/state/cats.model';
import { CatsService } from 'src/app/project/state/cats.service';

@Component({
  selector: 'app-functional-page',
  templateUrl: './functional-page.component.html',
  styleUrls: ['./functional-page.component.scss'],
})
export class FunctionalPageComponent implements OnInit, OnDestroy {
  reg: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  pageName = '';
  submitName = '';
  form: FormGroup;
  cat: CATS;
  catSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private catsService: CatsService,
    private alert: BaseService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.pageName = 'Редактирование кота';
      this.submitName = 'Редактировать';
      this.catSub = this.catsService
        .getById(this.route.snapshot.params.id)
        .subscribe((cat: CATS) => {
          this.cat = cat;
          this.form = new FormGroup({
            title: new FormControl(cat.info.title, [
              Validators.required,
              Validators.maxLength(11),
            ]),
            description: new FormControl(cat.info.description, [
              Validators.required,
              Validators.maxLength(100),
            ]),
            photo: new FormControl(cat.info.photo, [
              Validators.required,
              Validators.pattern(this.reg),
            ]),
          });
        });
    } else {
      this.pageName = 'Создание нового кота';
      this.submitName = 'Добавить';
      this.form = new FormGroup({
        title: new FormControl(null, [
          Validators.required,
          Validators.maxLength(11),
        ]),
        description: new FormControl(null, [
          Validators.required,
          Validators.maxLength(100),
        ]),
        photo: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.reg),
        ]),
      });
    }
  }
  ngOnDestroy() {
    if (this.catSub) {
      this.catSub.unsubscribe();
    }
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const cat: any = {
      title: this.form.value.title,
      description: this.form.value.description,
      photo: this.form.value.photo,
    };
    if (this.route.snapshot.params.id) {
      this.catsService.update(this.cat.id, cat);
      this.alert.success('Пост обновлён');
    } else {
      this.catsService.add(cat);
      this.form.reset();
      this.alert.success('Пост создан');
    }
  }
}
