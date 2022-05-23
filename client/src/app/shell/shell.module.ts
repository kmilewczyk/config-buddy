import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { ShellComponent } from './shell.component';
import {ThrottleResolver} from "@app/dev/misc/resolvers/throttle.resolver";

/**
 * Module that is included in the initial load. Its focus is to:
 * * Be as small as it is possible
 * * Render as soon as possible
 * * Give the user something to work with as soon as possible
 */
@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      loadChildren: () => import("@app/core/core.module").then(m => m.CoreModule),
      resolve: { ThrottleResolver },
      component: ShellComponent,
    }])
  ],
})
export class ShellModule { }
