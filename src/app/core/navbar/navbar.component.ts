/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {Component} from '@angular/core';

interface NavItem {
    displayName: string
    routerLink: string
}

@Component({
    selector: 'tripster-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    public navItems: Array<NavItem> = [
        {displayName: 'Editor', routerLink: 'editor'}
    ]
}
