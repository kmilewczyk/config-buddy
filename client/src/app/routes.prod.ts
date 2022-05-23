import { Routes } from "@angular/router";
import { ShellModule } from "./shell/shell.module";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => ShellModule,
  }
];
