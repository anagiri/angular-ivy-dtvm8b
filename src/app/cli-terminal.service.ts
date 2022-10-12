import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CliTerminalService {
    constructor() {
      this.terminal = new BehaviorSubject<string>('Terminal Demo');
    }
    private terminal: BehaviorSubject<string>;

    sendMessage(msg: string) {
      this.terminal.next(msg)
    }

    getResonse() {
        return this.terminal;
    }

}
