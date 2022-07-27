import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false}) appTitle!: ElementRef<HTMLHeadingElement>;

  title = 'This is Angular Shop';

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = this.title;
  }
}
