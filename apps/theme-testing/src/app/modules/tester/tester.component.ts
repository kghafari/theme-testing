import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tester',
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './tester.component.html',
  styleUrl: './tester.component.css',
})
export class TesterComponent {}
