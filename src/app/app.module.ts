import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner.component';
import { HeroProfileAdComponent } from './hero-profile-ad.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';


@NgModule({
  imports: [ BrowserModule ],
  providers: [AdService],
  declarations: [ AppComponent,
                  AdBannerComponent,
                  HeroJobAdComponent,
                  HeroProfileAdComponent,
                  AdDirective ],
  entryComponents: [ HeroJobAdComponent, HeroProfileAdComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

