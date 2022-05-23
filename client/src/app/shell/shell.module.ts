import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Module that is included in the initial load. Its focus is to:
 * * Be as small as it is possible
 * * Render as soon as possible
 * * Give the user something to work with as soon as possible
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ShellModule { }
