// nav-bar.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { NavItems, NavItem } from './nav-items'; // ← IMPORTANTE: esta linha

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navigation: NavItem[] = NavItems; // ← IMPORTANTE: carrega os dados do Sacola Cheia
  currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  isActive(url: string | undefined): boolean {
    if (!url) return false;
    return this.currentUrl === url || this.currentUrl.startsWith(url);
  }
}
