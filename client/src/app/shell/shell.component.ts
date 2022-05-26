import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {InitialSpinnerService} from "@app/shell/_services/initial-spinner.service";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(public initialSpinner: InitialSpinnerService) { }

  ngOnInit(): void {
  }
}
