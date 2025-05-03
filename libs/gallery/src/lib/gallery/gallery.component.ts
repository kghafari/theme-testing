import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  galleryItems = [
    {
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Item 1',
      description:
        'Description for item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.m ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.m ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.m ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.m ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnails: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ],
    },
    {
      image:
        'https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg',
      title: 'Item 2',
      description:
        'Description for item 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.m ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.m ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.m ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnails: [
        'https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg',
        'https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg',
      ],
    },
    {
      image:
        'https://www.shutterstock.com/image-photo/very-wide-night-panorama-london-260nw-232927150.jpg',
      title: 'Item 3',
      description:
        'Description for item 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnails: [
        'https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg',
        'https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg',
      ],
    },
    {
      image:
        'https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg',
      title: 'Item 4',
      description:
        'Description for item 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnails: [
        'https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg',
        'https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg',
      ],
    },
    // Add more items as needed
  ];

  activeIndex = 0;

  scrollLeft() {
    this.activeIndex =
      (this.activeIndex - 1 + this.galleryItems.length) %
      this.galleryItems.length;
  }

  scrollRight() {
    this.activeIndex = (this.activeIndex + 1) % this.galleryItems.length;
  }

  navigateTo(index: number) {
    this.activeIndex = index;
  }
}
