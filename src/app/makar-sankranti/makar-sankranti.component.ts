import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-makar-sankranti',
  templateUrl: './makar-sankranti.component.html',
  styleUrls: ['./makar-sankranti.component.css']
})
export class MakarSankrantiComponent {
  @Input() title: string = 'Happy Makar Sankranti';
  @Input() tailCount: number = 1;

  getTailArray(): number[] {
    return new Array(this.tailCount);
  }
}
