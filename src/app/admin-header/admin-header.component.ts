import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent implements OnInit {

ngOnInit(): void {
  
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

}
