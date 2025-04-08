import { Component } from '@angular/core';
import { TrademarkComponent } from '../../utils/trademark/trademark.component';
import { NavLinksComponent } from '../../utils/nav-links/nav-links.component';

@Component({
  selector: 'app-header',
  imports: [TrademarkComponent, NavLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
}
