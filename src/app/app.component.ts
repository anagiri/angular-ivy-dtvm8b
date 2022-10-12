import { Component, VERSION } from '@angular/core';
import {CliTerminalComponent} from './cli-terminal.component';
import {CliTerminalDialogComponent} from './cli-terminal-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

      constructor(public dialog: MatDialog) {

        }

openDialog() {
  //alert('hello')
        const dialogRef = this.dialog.open(CliTerminalDialogComponent, {
          width: '98%',
          height: '98%',
          maxWidth: '100%',
          data: {dialogMode:true}
        });
}

}
