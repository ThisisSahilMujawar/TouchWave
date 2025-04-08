import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavLinks{
  label: string;
  path: string;
}

@Component({
  selector: 'app-nav-links',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {
  navLinks: NavLinks[] = [
    { label: 'Products',
      path: '/products'
    },
    { label: 'Services',
      path: '/services'
    },
    {
      label: 'Careers',
      path: '/careers'
    },
    {
      label: 'About Us',
      path: '/about-us'
    },
    {
      label: 'Contact Us',
      path  : '/contact-us'
    }
  ]
  @Input() footer: boolean = false;
  
}
