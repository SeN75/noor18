import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/_services/helper.service';
import { ICON, user } from 'src/app/_common/globle';
import { RegistraionService } from './../../../_services/registraion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ICON = ICON;
  center = true;
  user = user;
  constructor(public helperSrv: HelperService, private registraionSrv: RegistraionService, private router: Router) { }

  ngOnInit(): void {
  }
  isLogin() {
    if (user.isLogin) {
      this.user.isLogin = false;
      this.registraionSrv.logout();
    }
    else
      this.router.navigateByUrl('/registration/login')
  }
}
