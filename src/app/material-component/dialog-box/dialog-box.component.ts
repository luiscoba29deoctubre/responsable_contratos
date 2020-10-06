import { Component, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Parameter } from "../../models/parameter";

interface Father {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-dialog-box",
  templateUrl: "./dialog-box.component.html",
  styleUrls: ["./dialog-box.component.css"],
})
export class DialogBoxComponent {
  action: string;
  padre: string;
  local_data: any;

  father: Father[] = [
    { value: "100", viewValue: "Steak" },
    { value: "2", viewValue: "Pizza" },
    { value: "3", viewValue: "Tacos" },
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Parameter
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.padre = this.local_data.padre;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: "Cancelar" });
  }
}
