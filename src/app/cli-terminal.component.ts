import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Subject} from 'rxjs';
import {NgTerminal} from 'ng-terminal';
import {Terminal} from 'xterm';
import {CliTerminalService} from './cli-terminal.service';


@Component({
    selector: 'app-cli-terminal-component',
    template: `
        <ng-terminal
          #term
          [dataSource]="writeSubject"
          [ngClass]="{
              'ng-terminal': true
          }">
      </ng-terminal>`,
    styleUrls: []
})
export class CliTerminalComponent implements OnInit, AfterViewInit {
    private static KEYCODES = {
        DELETE: 8,
        ENTER: 13,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40
    };

    @ViewChild('term', {static: false}) child: NgTerminal;

    writeSubject = new Subject<string>();

    title = 'Auth UI Command Terminal';

    underlying: Terminal;


    tenantName ='ls';

    constructor(
        private terminalService: CliTerminalService, 
        ) {

        }

    prompt = 'bash-3.2$ '; //'auth-cli> ';

    clearScreen() {
        this.child.underlying.reset();
        this.child.write(this.prompt);
    }

    ngOnInit() {
        this.terminalService.getResonse().subscribe(
            response => {
                this.writeSubject.next(response);
            },
            () => {},
            () => {}
        );
        //this.child.underlying.setOption('fontSize', 20);
        //this.child.underlying.resize(110,80)
    }

    ngAfterViewInit() {
        const term = this.child.underlying;
        term.setOption('fontSize', 40);
        //term.setOption('letterSpacing','2');

        //this.child.underlying.resize(110,80)
        
        this.child.write(this.prompt);

        const write = s => {
            this.terminalService.sendMessage(s);
        };

        this.child.keyEventInput.subscribe(e => {
            const ev = e.domEvent;

            const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

            if (ev.keyCode === CliTerminalComponent.KEYCODES.ENTER) {
                this.terminalService.sendMessage('\r\n' + this.prompt);
            } else if (ev.ctrlKey && ev.key === 'v') {
                navigator.clipboard.readText().then(text => write(text.trim()));
            } else if (ev.ctrlKey && ev.key === 'c') {
                document.execCommand('copy');
            } else if (ev.keyCode === CliTerminalComponent.KEYCODES.DELETE) {
                // Do not delete the prompt
                if (
                    term.buffer.active.cursorX >
                    this.prompt.length
                ) {
                    write('\b \b');
                }
            } else if (printable) {
                write(e.key);
            }
        });
    }
}
