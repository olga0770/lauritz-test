import { NgModule } from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule, MatDividerModule, MatCardModule,
  MatSnackBarModule, MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule,
  MatNativeDateModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatGridListModule, MatMenuModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatSnackBarModule, MatCardModule, MatDividerModule, MatTooltipModule, MatNativeDateModule, MatDatepickerModule,
    MatBadgeModule
  ],
  exports: [MatButtonModule, MatCheckboxModule,
    MatGridListModule, MatMenuModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatSnackBarModule, MatCardModule, MatDividerModule, MatTooltipModule, MatNativeDateModule, MatDatepickerModule,
    MatBadgeModule
  ]

})
export class MaterialModule { }

