import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrademarkComponent } from '../../utils/trademark/trademark.component';
import { NavLinksComponent } from '../../utils/nav-links/nav-links.component';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    TrademarkComponent,
    NavLinksComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


}
