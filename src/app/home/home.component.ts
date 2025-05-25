import { AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements AfterViewInit {

   @ViewChild('carousel') carouselRef!: ElementRef;

  ngAfterViewInit(): void {
     const carousel = this.carouselRef.nativeElement as HTMLElement;;
  const indicatorButtons = carousel.parentElement?.querySelectorAll('.text-indicators button') || [];

  carousel.addEventListener('slid.bs.carousel', function (event:any) {
    indicatorButtons.forEach(btn => btn.classList.remove('active'));
    if (event.to !== undefined && indicatorButtons[event.to]) {
      indicatorButtons[event.to].classList.add('active');
    }
  });
  }

}
