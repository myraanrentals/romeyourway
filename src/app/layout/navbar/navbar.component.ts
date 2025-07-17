import { Component, HostListener, Input } from '@angular/core';
import $ from 'jquery';
// function _window(): any {
//   // Return the native window object
//   return window;
// }
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  winWidth:any = '';
  @Input() isMegaMenuVisible:boolean=false;
  isSecondLevelVisible:boolean=false;
  menu:any[]=[
    {
      name:'about',
      id:'1',
      sub_menu:[
        {name:'Sightseeing Cruises', link:'s'},
        {name:'Dubai Yacht Tours', link:'s'},
        {name:'Dubai Creek Cruise', link:'s'},
        {name:'Dubai Marina Cruise', link:'s'},
        {name:'Dinner Cruises in Dubai', link:'s'}
      ]
    },
    {
      name:'attraction',
      id:'2',
      sub_menu:[
        {name:'Sightseeing Cruises 1', link:'s'},
        {name:'Dubai Yacht Tours 1', link:'s'},
        {name:'Dubai Creek Cruise 1', link:'s'},
        {name:'Dubai Marina Cruise 1', link:'s'},
        {name:'Dinner Cruises in Dubai 1', link:'s'}
      ]
    },
    {
      name:'city guide',
      id:'3',
      sub_menu:[
        {name:'Sightseeing Cruises 2', link:'s'},
        {name:'Dubai Yacht Tours 2', link:'s'},
        {name:'Dubai Creek Cruise 2', link:'s'},
        {name:'Dubai Marina Cruise 2', link:'s'},
        {name:'Dinner Cruises in Dubai 2', link:'s'}
      ]
    },
    {
      name:'themes',
      id:'4',
      sub_menu:[
        {name:'Sightseeing Cruises 3', link:'s'},
        {name:'Dubai Yacht Tours 3', link:'s'},
        {name:'Dubai Creek Cruise 3', link:'s'},
        {name:'Dubai Marina Cruise 3', link:'s'},
        {name:'Dinner Cruises in Dubai 3', link:'s'}
      ]
    }
  ]
  mobileMenuConfig:boolean=false;
  submenus:any[]=[];

  constructor(){

  }


  ngOnInit(){

  }
  toggleMegaMenu(flag:boolean){
    this.isMegaMenuVisible = flag;
  }

  showMenu(id:number){
    this.isSecondLevelVisible= true;
    let subObj:any = this.menu.filter(m=> m.id == id);
    this.submenus = [];
    this.submenus = subObj[0].sub_menu;
  }
}
