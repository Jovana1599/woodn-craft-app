import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  cartCount = 0;
  wishlistCount = 0;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkIfMobile();
  }

  ngOnInit(): void {
    this.checkIfMobile();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
    console.log(this.isMobile);
  }
}
