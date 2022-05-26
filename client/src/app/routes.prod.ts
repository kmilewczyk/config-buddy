import { Routes } from "@angular/router";
import { ShellModule } from "./shell/shell.module";
import {ShellComponent} from "@app/shell/shell.component";
import {ThrottleResolver} from "@app/dev/misc/resolvers/throttle.resolver";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("@app/core/core.module").then(m => m.CoreModule),
    resolve: {ThrottleResolver},
  }
];
