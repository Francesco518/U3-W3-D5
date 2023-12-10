import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: string= '';
  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.restore();
    const user = this.authSrv.utente?.user;

    if (user) {
      this.userName = user.nome
    }
  }
}


