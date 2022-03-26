import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CadastrarPjComponent, CadastroPjComponent } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrarPjService } from './services';



@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatToolbarModule,
    SharedModule
  ],
  providers: [
    CadastrarPjService
  ]
})
export class CadastroPjModule { }
