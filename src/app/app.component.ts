import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'creditCard';
  isBackEnabled: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
      if (window.location.pathname === '/payment') {
        this.isBackEnabled = true;
      }
  }

  goToPayment() {
    this.router.navigate(['payment']);
    this.isBackEnabled = true;
  }

  backToHome() {
    this.router.navigate(['']);
    this.isBackEnabled = false;
  }
}
