import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  cartCount = 0;
  wishlistCount = 0;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
