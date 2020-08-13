import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DataService } from "../../services/active-directory/data.service";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-dialog-exit",
  templateUrl: "./dialog-exit.component.html",
  styleUrls: ["./dialog-exit.component.scss"],
})
export class DialogExitComponent {
  animal: string;
  name: string;
  dialogRef;
  apiDenariusService: any;
  perfilUsuarioDenarius: any;

  constructor(private activeDirectory: DataService, public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogExitComponent, {
      width: "250px",
    });
  }

  logOut(): void {
    this.activeDirectory.logout();
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }
}
