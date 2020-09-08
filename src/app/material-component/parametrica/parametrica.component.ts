import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatDialog,
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from "@angular/material";
import { Parameter } from "../../models/parameter";
// services
import { ApiService } from "../../services/api.service";
import { FileUploadService } from "../../services/fileupload.service";
import { NotificationService } from "../../services/notification.service";
import { DialogBoxComponent } from "../dialog-box/dialog-box.component";

@Component({
  selector: "app-parametrica",
  templateUrl: "./parametrica.component.html",
  styleUrls: ["./parametrica.component.css"],
})
export class ParametricaComponent implements OnInit {
  allParameters: any; // es json que contiene todos los archivos json
  dataParameters: any[] = []; // es el json especifico que aparecera en la semana
  allNameParameters: any[] = []; // son los nombres de los archivos json

  nameItemListSelected: string;

  fileToUpload: File;

  displayedColumns: string[] = ["name", "code", "action"];
  dataSource = new MatTableDataSource<Parameter>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private apiservice: ApiService,
    private notifyService: NotificationService,
    private fileUploadService: FileUploadService
  ) {
    this.apiservice.getAllParameters().subscribe((allParameters) => {
      this.allParameters = allParameters;
      // con esto obtenemos los nombres de los archivos json
      for (let key in allParameters) {
        if (allParameters.hasOwnProperty(key)) {
          // console.log(key + " -> " + allParameters[key]);
          key = key.replace(".json", "");
          key = key.replace("_", " ");
          key = key.charAt(0).toUpperCase() + key.slice(1); // ponemos la primera letra en Mayuscula
          this.allNameParameters.push(key); // almacenamos las claves
        }
      }
    });
  }

  // sacado de https://morioh.com/p/526559a86600 el Toast que muestra mensajes
  showToasterSuccess() {
    this.notifyService.showSuccess("Información guardada", "Información");
  }

  showToasterError() {
    this.notifyService.showWarning("Código existente", "Error");
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    console.log("hace click");

    this.fileUploadService.saveFileParametersXLSX(this.fileToUpload).subscribe(
      (data) => {
        // do something, if upload success
        console.log("regresaaaaaaa");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerParametro(nameParameter) {
    this.nameItemListSelected = nameParameter;
    for (let key in this.allParameters) {
      if (this.allParameters.hasOwnProperty(key)) {
        // console.log(key + " -> " + allParameters[key]);
        key = key.replace(".json", "");
        key = key.replace("_", " ");
        key = key.charAt(0).toUpperCase() + key.slice(1); // ponemos la primera letra en Mayuscula

        if (key === nameParameter) {
          // volvemos a construir el nombre del archivo json
          this.dataParameters = this.allParameters[this.createNameJson()]; // agregamos los parametros a la tabla de parametros

          this.dataSource.data = this.dataParameters;
        }
      }
    }
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: "250px",
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === "Agregar") {
        this.addRowData(result.data);
      } else if (result.event === "Actualizar") {
        this.updateRowData(result.data);
      } else if (result.event === "Eliminar") {
        this.deleteRowData(result.data);
      }
      this.allParameters[this.createNameJson()] = this.dataParameters;
      this.enviarDataParameterOnServer();
      this.dataSource.data = this.dataParameters;
    });
  }
  // hace el cambio del registro en la tabla
  addRowData(row_obj) {
    // comprobaciòn para ver si ya existe el codigo
    const foundElement = this.dataParameters.find(
      (element) => row_obj.code === element.code
    );

    if (foundElement) {
      // se muestra mensaje de advertencia
      this.showToasterError();
    } else {
      const d = new Date();
      this.dataParameters.push({
        id: d.getTime(),
        code: row_obj.code,
        name: row_obj.name,
      });
    }
    // this.paginator.renderRows();
  }

  updateRowData(row_obj) {
    // comprobaciòn para ver si ya existe el codigo
    const foundElement = this.dataParameters.find(
      (element) => row_obj.code === element.code
    );

    if (foundElement) {
      // se muestra mensaje de advertencia
      this.showToasterError();
    } else {
      let id_row: number;
      for (let i = 0; i < this.dataParameters.length; i++) {
        if (this.dataParameters[i].id === row_obj.id) {
          id_row = row_obj.id;
          break;
        }
      }
      this.dataParameters = this.dataParameters.filter((value, key) => {
        return value.id !== row_obj.id;
      });
      this.dataParameters.push({
        id: id_row,
        code: row_obj.code,
        name: row_obj.name,
      });
    }
  }

  deleteRowData(row_obj) {
    this.dataParameters = this.dataParameters.filter((value, key) => {
      return value.id !== row_obj.id;
    });
  }

  createNameJson() {
    let key = this.nameItemListSelected;
    key = key.charAt(0).toLowerCase() + key.slice(1); // ponemos la primera letra en Mayuscula
    key = key.replace(" ", "_");
    key = key + ".json";
    return key;
  }

  enviarDataParameterOnServer() {
    this.apiservice
      .putSaveDataParameters(this.dataParameters, this.nameItemListSelected)
      .subscribe(
        (success) => console.log("enviarDataParameterOnServer() successful."),
        (error) => console.log("enviarDataParameterOnServer() error.")
      );
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
