import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})

export class DraftComponent {
  captains = [];
  captainCount = 1;

  AddCaptain(form: NgForm) {
    this.captains.push(form.value.captain);
    this.captainCount = this.captains.length;
    form.reset();
  }
}
