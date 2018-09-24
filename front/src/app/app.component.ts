import { Component, Input } from '@angular/core';
import { MenuService } from './services/menu.service';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private menuData: any;

  constructor(menu: MenuService) {
    menu.getList()
      .subscribe((data: any) => {
        console.log(data);
        this.menuData = data.menu;
        this.menuData.forEach(menuParent => menuParent.show = false);

      });
  }

  toggleMenu(menuItem) {
    menuItem.show = !menuItem.show;
  }
}
