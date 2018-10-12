import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Captain } from '../models/captain';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  captains = [];
  players = [];
  showCapForm = true;
  showPlayerForm = false;

  AddCaptain(form: NgForm) {
    if (form.valid) {
      this.captains.push(form.value.captain);
      console.log(this.captains);
    }
    form.reset();
  }

  EditCaptain(name) {
    console.log(name);

  }

  RemoveCaptain(index) {
    this.captains.splice(index, 1);
  }
}
