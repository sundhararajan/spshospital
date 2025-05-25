import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  

 @ViewChild('navbar') navbar!: ElementRef;
 isHomePage = false;
  

 constructor(private router: Router) {}

  

  ngOnInit(): void {

     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.urlAfterRedirects === '/' || event.url === '/home';
      }
    });

    document.addEventListener("DOMContentLoaded", function () {     
      document.querySelectorAll('.dropdown-menu').forEach(function (element) {
          element.addEventListener('click', function (e) {
              e.stopPropagation();
          });
      })
  });

  // Add this after Bootstrap JS is loaded
  document.querySelectorAll('.has-megamenu').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const bsDropdown = new bootstrap.Dropdown(toggle);
    dropdown.addEventListener('mouseenter', () => bsDropdown.show());
    dropdown.addEventListener('mouseleave', () => bsDropdown.hide());
});
  

}
  // DOMContentLoaded  end

  @HostListener('mouseover')
  onMouseOver() {
  if (this.isHomePage) {   
    this.toggleNavbarStyle('light');
   
  }
}
 @HostListener('mouseout')
onMouseOut() {
  if (this.isHomePage) {
    this.toggleNavbarStyle('dark');
  }
}
  
   toggleNavbarStyle(style: 'light' | 'dark') {   
    const nav = this.navbar.nativeElement as HTMLElement; // Select the navbar element
      if (style === 'light') {         
          nav.classList.remove('navbar-dark');
          nav.classList.add('navbar-light');
      } else {
          nav.classList.remove('navbar-light');
          nav.classList.add('navbar-dark');
      }
  }

  
  

 


}
