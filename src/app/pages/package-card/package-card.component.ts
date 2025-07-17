import { Component, EventEmitter, HostListener, Input, Output, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, CommonModule,MatIcon],
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements AfterViewInit {
  @Input() isSidebarOpen!: boolean;
  @Output() closeSidebar = new EventEmitter<void>();
  @ViewChild('sidePanelContent') sidePanelContent!: ElementRef;
  
  isMobileView = false;

  constructor(private cdr: ChangeDetectorRef) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges(); 
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 767;
  }

  closeSidePanel() {
    this.closeSidebar.emit();
  }

  scrollToTop() {
    if (this.sidePanelContent) {
      requestAnimationFrame(() => {
        this.sidePanelContent.nativeElement.scrollTop = 0;
      });
    }
  }


}
