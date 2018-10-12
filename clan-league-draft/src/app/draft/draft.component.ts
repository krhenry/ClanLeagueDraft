import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})

export class DraftComponent {
  captains = [];
  players = [];
  showCapForm = true;
  showPlayerForm = false;

  AddPlayer(playerType, form: NgForm) {
    if (form.valid) {
      switch (playerType) {
        case 'cap':
          this.captains.push(form.value.captain);
          break;
        case 'player':
          this.players.push(form.value.player);
          break;
        default:
          break;
      }
    }
    form.reset();
  }

  Remove(playerType, index) {
    switch (playerType) {
      case 'cap':
        this.captains.splice(index, 1);
        break;
      case 'player':
        this.players.splice(index, 1);
        break;
      default:
        break;
    }
  }

  FinalizedCaptains() {
    this.showCapForm = false;
    this.showPlayerForm = true;
  }

  FinalizedPlayers() {
    this.showPlayerForm = false;
  }
}
