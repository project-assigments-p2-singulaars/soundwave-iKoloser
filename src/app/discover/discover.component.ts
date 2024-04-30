import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent {
  // Lógica del componente aquí si es necesario
}
