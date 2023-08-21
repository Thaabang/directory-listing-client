import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../directory.service';
import {DirectoryItem} from "./directory-item.model";

@Component({
  selector: 'app-directory-listing',
  templateUrl: './directory-listing.component.html',
  styleUrls: ['./directory-listing.component.sass']
})
export class DirectoryListingComponent implements OnInit {

  currentDirectory: string = '';
  parentDirectory: string = '';
  directoryPath = '';
  directoryListing: any[] = [];

  constructor(private directoryService: DirectoryService) { }

  ngOnInit(): void {
    this.currentDirectory = this.directoryPath;
    this.fetchDirectoryListing();
  }

  fetchDirectoryListing(): void {
    this.directoryService.getDirectoryListing(this.directoryPath)
      .subscribe((data: DirectoryItem[]) => {
        const directories = data.filter(item => item.isDirectory);
        const files = data.filter(item => !item.isDirectory);

        this.directoryListing = [...directories, ...files];
      });
  }



  onDirectorySelect(path: string): void {
    this.directoryPath = path;
    this.currentDirectory = path;
    this.fetchDirectoryListing();
  }

  onBack(): void {
    if (this.currentDirectory) {
      const lastBackslashIndex = this.currentDirectory.lastIndexOf('/');
      if (lastBackslashIndex !== -1) {
        this.currentDirectory = this.currentDirectory.substring(0, lastBackslashIndex);
        this.directoryPath = this.currentDirectory;
        this.fetchDirectoryListing();
      }
    }
  }
}
