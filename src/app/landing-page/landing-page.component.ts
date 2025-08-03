import {AfterViewInit, Component, ElementRef, viewChild} from '@angular/core';
import {julz, lucy} from "../model/characters";
import {CharacterSheetComponent} from "../character-sheet/character-sheet.component";
import {CountdownComponent} from "../countdown/countdown.component";
import {MapsContainerComponent} from "../maps-container/maps-container.component";
import {XDividerComponent} from "../x-divider/x-divider.component";
import {jarallax} from 'jarallax';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  imports: [
    CharacterSheetComponent,
    CountdownComponent,
    MapsContainerComponent,
    XDividerComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements AfterViewInit {

  protected readonly julz = julz;
  protected readonly lucy = lucy;
  protected readonly mapLinkSchlossRennhof: string = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1437.1447781219222!2d8.5875999959296!3d49.59847968535715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797d115c6275ceb%3A0xedd396e25b078df2!2sSchloss%20Rennhof!5e1!3m2!1sde!2sde!4v1754225997805!5m2!1sde!2sde'
  protected readonly mapLinkSchwetzingen: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2162.728696230647!2d8.569963389431907!3d49.38424914447091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c7ed6e2b9395%3A0xfea143c768885e24!2sSchloss%20Schwetzingen!5e1!3m2!1sde!2sde!4v1744908602532!5m2!1sde!2sde'

  parallaxContainer = viewChild<ElementRef>('parallaxContainer');


  constructor(private readonly breakPointsObserver: BreakpointObserver) {
  }

  ngAfterViewInit() {
    const isHandset = this.breakPointsObserver.isMatched('(max-width: 1200px)')
    jarallax(this.parallaxContainer()?.nativeElement, {
      speed: 0.2,
      imgSrc: 'bg2small.jpg', // Update path to your image
      imgSize: isHandset ? 'cover' : 'contain',
      imgPosition: isHandset ? '40% 0%' : 'center 0%',
      imgRepeat: 'no-repeat'
    });
  }
}
