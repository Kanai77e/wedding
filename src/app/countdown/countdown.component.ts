import {Component} from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {
  weddingDate: Date = new Date('2025-10-11T15:00:00');
  timeLeft: any = {};
  private timer: any;

  ngOnInit(): void {
    this.calculateTimeLeft();
    this.timer = setInterval(() => this.calculateTimeLeft(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private calculateTimeLeft(): void {
    const now = new Date().getTime();
    const distance = this.weddingDate.getTime() - now;

    if (distance < 0) {
      this.timeLeft = null;
      clearInterval(this.timer);
      return;
    }

    this.timeLeft = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }
}
