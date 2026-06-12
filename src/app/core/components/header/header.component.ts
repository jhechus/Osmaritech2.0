import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  mobileMenuOpen = false;

  navLinks: NavLink[] = [
    { label: 'Servicios', path: '/servicios' },
    { label: 'Paquetes', path: '/paquetes' },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Proceso', path: '/proceso' },
    { label: 'Nosotros', path: '/nosotros' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.mobileMenuOpen = false;
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu(): void {
    this.mobileMenuOpen = false;
  }
}
