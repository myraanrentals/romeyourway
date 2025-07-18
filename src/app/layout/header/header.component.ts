import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isVisible: boolean = false;
  dropdownOpen: boolean = false;
  constructor(
    private eRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) {}

  toggleMegaMenu() {
    this.isVisible = !this.isVisible;
    const navLinks = this.eRef.nativeElement.querySelector('#navLinks');

    if (this.isVisible) {
      this.renderer.addClass(navLinks, 'nav-active');
    } else {
      this.renderer.removeClass(navLinks, 'nav-active');
    }
  }
  closeMenu() {
    // close menu on link click
    this.isVisible = false;
    this.dropdownOpen = false;
    const navLinks = this.eRef.nativeElement.querySelector('#navLinks');
    this.renderer.removeClass(navLinks, 'nav-active');
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const navLinks = this.eRef.nativeElement.querySelector('#navLinks');

    if (this.isVisible && navLinks && !this.eRef.nativeElement.contains(event.target)) {
      this.toggleMegaMenu();
    }
  }
}
