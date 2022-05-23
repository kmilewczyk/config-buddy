import { Routes } from "@angular/router";
import { ShellModule } from "./shell/shell.module";
import {ShellComponent} from "@app/shell/shell.component";

export const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "",
        loadChildren: () => ShellModule
      }
    ]
  }
];
