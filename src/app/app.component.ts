import { Component, OnInit } from '@angular/core';
import { AtwebService } from './atweb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'atweb';

  res;

  constructor(private api: AtwebService) {

  }

  public ngOnInit(): void {
    this.api.get().subscribe( v => this.res = v );
  }

}
