import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isVisible: boolean = false;

  constructor(private eRef: ElementRef, private renderer: Renderer2) {}

  toggleMegaMenu() {
    this.isVisible = !this.isVisible;
    const navLinks = this.eRef.nativeElement.querySelector('#navLinks');
    
    if (this.isVisible) {
      this.renderer.addClass(navLinks, 'nav-active');
    } else {
      this.renderer.removeClass(navLinks, 'nav-active');
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const navLinks = this.eRef.nativeElement.querySelector('#navLinks');
    
    if (this.isVisible && navLinks && !this.eRef.nativeElement.contains(event.target)) {
      this.toggleMegaMenu();
    }
  }
}
