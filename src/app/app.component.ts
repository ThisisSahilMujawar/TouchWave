import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { DependencyService } from './utils/util/dependency.service';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './templates/home/home.component';
import { ValuePropositionComponent } from './templates/value-proposition/value-proposition.component';
import { BusinessStrategyComponent } from './templates/business-strategy/business-strategy.component';
import { IndustryFootprintComponent } from './templates/industry-footprint/industry-footprint.component';
import { InformationCenterComponent } from './templates/information-center/information-center.component';
import { FooterComponent } from './templates/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    ValuePropositionComponent,
    BusinessStrategyComponent,
    IndustryFootprintComponent,
    InformationCenterComponent,
    FooterComponent
    
  ]
})
export class AppComponent implements OnInit {
  width: string = '100%';
  
  constructor(
    private responsive: BreakpointObserver,
    private dependencyService: DependencyService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const windowObj = this.dependencyService.get();
      if (windowObj) {
        this.width = windowObj.innerWidth + 'px';
      }
    }

    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,   
      Breakpoints.Medium,  
      Breakpoints.Large,   
      Breakpoints.XLarge   
    ]).subscribe({
      next: (state: BreakpointState) => {
        if (isPlatformBrowser(this.platformId)) {
          const windowObj = this.dependencyService.get();
          if (windowObj) {
            // this.width = windowObj.innerWidth + 'px';
            console.log(this.width)
          }
        }
      },
    });
  }
}
