import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-overview-modal',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './overview-modal.component.html',
  styleUrl: './overview-modal.component.scss',
})
export class OverviewModalComponent {
  constructor(
    public dialogRef: MatDialogRef<OverviewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
