import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgTerminalModule } from 'ng-terminal';
import { CliTerminalComponent } from './cli-terminal.component';
import { CliTerminalDialogComponent } from './cli-terminal-dialog.component';
import { CliTerminalService } from './cli-terminal.service';
import { AngularMaterialsModule } from './angular-materials.module'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgTerminalModule,
    AngularMaterialsModule],
  declarations: [AppComponent, CliTerminalComponent, CliTerminalDialogComponent],
  providers: [
    CliTerminalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
