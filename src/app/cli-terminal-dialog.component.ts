import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { CliTerminalComponent}

@Component({
    selector: 'app-cli-terminal-dialog-component',
    template: `
    <div>
        <div style="width:1200px">
        <app-cli-terminal-component></app-cli-terminal-component>
        </div>
        <button (click)="close()">Close</button>
    </div>`,
    styleUrls: []
})
export class CliTerminalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CliTerminalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

   close() {
     this.dialogRef.close();
   }
}
