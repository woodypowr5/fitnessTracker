import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';
// import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {

}
