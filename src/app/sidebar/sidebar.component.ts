import { Component } from '@angular/core';
import { ShellService } from '../shell/shell.service';


@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    constructor(private shellService: ShellService) {
    }

    navigate(url: string) {
        this.shellService.navigate(url);
    }
}
