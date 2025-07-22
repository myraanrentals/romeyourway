import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../homepage/banner/banner.component';
import { ExperienceComponent } from '../homepage/experience/experience.component';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [BannerComponent, ExperienceComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
})
export class ListingComponent implements OnInit {
  public href: string = '';
  public experience: any = {};

  constructor(private _helperService: HelperService) {}

  ngOnInit() {
    sessionStorage.clear();
    this.experience = this._helperService.renderPackageData();
  }
}
