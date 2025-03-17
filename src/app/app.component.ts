import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsGalleryComponent } from './products-gallery/products-gallery.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'drvowood';
}
