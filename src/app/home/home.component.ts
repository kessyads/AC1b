import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showBanner: boolean = true; // Controla se o banner é exibido ou não

  toggleBanner() {
    this.showBanner = !this.showBanner; // Alterna o valor da variável
  }
}
