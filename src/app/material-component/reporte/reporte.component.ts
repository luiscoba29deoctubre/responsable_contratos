import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ScriptService } from "./script.service";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ReporteService } from "../../services/reporte/reporte.service";
import { ReporteDto } from "../../models/dtos/ReporteDto";
import { NgxSpinnerService } from "ngx-spinner";

declare let pdfMake: any;

@Component({
  selector: "app-reporte",
  templateUrl: "./reporte.component.html",
  styleUrls: ["./reporte.component.css"],
})
export class ReporteComponent implements OnInit {
  externalDataRetrievedFromServer = [];
  actividades = [];

  pesosPerfiles = {
    empresarial: 10,
    financiero: 20,
    operativo: 30,
    comercial: 40,
    documental: 50,
  };

  constructor(
    private reporteService: ReporteService,
    private scriptService: ScriptService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    this.scriptService.load("pdfMake", "vfsFonts");

    this.reporteService.getProveedores().subscribe(
      async (reporteDto: ReporteDto) => {
        console.log("llega reporteDto", reporteDto);

        this.spinner.hide();
      },
      (error) => {
        console.log("aqui error hay ", error);
        this.spinner.hide();
      }
    );
  }

  ngOnInit(): void {
    this.externalDataRetrievedFromServer = [
      { data: "NOMBRE / RAZÓN SOCIAL", values: "PUBLICIDAD ESTRELLA S.A." },
      { data: "NOMBRE COMERCIAL", values: "PUBLIESTRELLA" },
      { data: "FECHA DE CALIFICACIÓN", values: "Sunday, September 13, 2020" },
      {
        data: "ACTIVIDAD ECONÓMICA Principal",
        values: "Venta de productos publicitarios",
      },
      {
        data: "ACTIVIDAD ECONÓMICA Secundaria",
        values: "Servicios comunicacionales, consultoría en comunicación",
      },
    ];

    this.actividades = [
      {
        vacio: "BIENES",
        categoria: "MARKETING",
        detalle: "MATERIAL PUBLICITARIO",
      },
      { vacio: "SERVICIOS", categoria: "SERVICIOS", detalle: "LAVANDERÍA" },
      {
        vacio: "OBRA CIVIL",
        categoria: "cat de obra",
        detalle: "det de cat de obra",
      },
      {
        vacio: "CONSULTORÍA",
        categoria: "cat de consult",
        detalle: "det de cat consult",
      },
    ];
  }

  generatePdf(action = "open") {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();

    switch (action) {
      case "open":
        pdfMake.createPdf(documentDefinition).open();
        break;
      case "print":
        pdfMake.createPdf(documentDefinition).print();
        break;
      case "download":
        pdfMake.createPdf(documentDefinition).download();
        break;

      default:
        pdfMake.createPdf(documentDefinition).open();
        break;
    }
  }

  buildTableBodySinCabecera(data, columns) {
    const body = [];

    //  body.push(columns);

    data.forEach(function (row) {
      const dataRow = [];

      columns.forEach(function (column) {
        console.log("column", { column });

        dataRow.push({ text: row[column].toString(), fontSize: 10 });
      });

      body.push(dataRow);
    });

    return body;
  }

  tableSinCabecera(data, columns) {
    return {
      table: {
        //   headerRows: 1,
        body: this.buildTableBodySinCabecera(data, columns),
      },
    };
  }

  buildTableBody(data, columns) {
    const body = [];

    body.push(["", "CATEGORIA", "Detalle del Bien / Servcio / Consultoría"]);

    data.forEach(function (row) {
      const dataRow = [];

      columns.forEach(function (column) {
        dataRow.push({ text: row[column].toString(), fontSize: 10 });
      });

      body.push(dataRow);
    });

    return body;
  }

  table(data, columns) {
    return {
      table: {
        widths: ["33%", "33%", "33%"],
        headerRows: 1,
        body: this.buildTableBody(data, columns),
      },
    };
  }

  getDocumentDefinition() {
    return {
      content: [
        {
          stack: [
            {
              columns: [
                {
                  image:
                    "data:image/png;base64,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",
                  width: 100,
                },
                {
                  text: "CERTIFICADO DE REGISTRO Y CALIFICACIÓN DE PROVEEDORES",
                  bold: true,
                  fontSize: 12,
                  alignment: "center",
                  margin: [0, 15, 0, 20],
                },
              ],
            },
            {
              columns: [
                {
                  text: "CÓDIGO:",
                  fontSize: 10,
                  bold: true,
                  margin: [0, 15, 0, 5],
                },
                { text: "823736236523", fontSize: 10, margin: [0, 15, 0, 5] },
                {},
                {},
              ],
            },
            {
              columns: [
                { text: "FECHA DE EMISIÓN:", fontSize: 10, bold: true },
                { text: "02-03-2020", fontSize: 10 },
                { text: "FECHA DE ACTUALIZACIÓN:", fontSize: 10, bold: true },
                { text: "02-03-2020", fontSize: 10 },
              ],
              margin: [0, 0, 0, 20],
            },
            {
              text:
                "El presente documento certifica que el proceso de CALIFICACIÓN DE PROVEEDORES para la COOPERATIVA DE AHORRO Y CRÉDITO 29 DE OCTUBRE LTDA., ha concluido, reflejando la calificación detallada a continuación, para el proveedor:",
              margin: [0, 0, 0, 20],
              fontSize: 10,
              alignment: "center",
            },

            this.tableSinCabecera(this.externalDataRetrievedFromServer, [
              "data",
              "values",
            ]),

            {
              text: "ACTIVIDADES PARA LAS QUE SE CALIFICA:",
              fontSize: 10,
              bold: true,
              margin: [0, 20, 0, 5],
            },

            this.table(this.actividades, ["vacio", "categoria", "detalle"]),

            {
              text:
                "\t\t\t\t\t\t\t\t\t\t\t\t\tDETALLE DE LA CALIFICACIÓN  \t\t\t\t\t\t\t\t\t\t\t\t",
              bold: true,
              fontSize: 13,
              margin: [0, 20, 0, 5],
              background: "black",
              color: "white",
              alignment: "center",
            },

            {
              table: {
                widths: ["33%", "33%", "33%"],
                heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                headerRows: 1,
                body: [
                  [
                    {
                      text: "SECCIÓN",
                      colSpan: 2,
                      bold: true,
                      fontSize: 10,
                      alignment: "center",
                    },
                    {},
                    {
                      text: "CALIFICACIÓN",
                      fontSize: 10,
                      bold: true,
                      alignment: "center",
                    },
                  ],
                  [
                    {
                      text: "PERFILES:",
                      colSpan: 2,
                      fontSize: 10,
                      bold: true,
                    },
                    {},
                    {},
                  ],
                  [
                    {
                      text: "A",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {
                      text: "PERFIL EMPRESARIAL",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {
                      text: "11%",
                      fontSize: 10,
                      alignment: "center",
                    },
                  ],
                  [
                    {
                      text: "B",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {
                      text: "PERFIL FINANCIERO",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {
                      text: "38%",
                      fontSize: 10,
                      alignment: "center",
                    },
                  ],
                  [
                    {
                      text: "C",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {
                      text: "PERFIL OPERATIVO",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {},
                  ],
                  [
                    {
                      text: "D",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {
                      text: "PERFIL COMERCIAL",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {},
                  ],
                  [
                    {
                      text: "DOCUMENTACIÓN::",
                      colSpan: 2,
                      fontSize: 9,
                      bold: true,
                      alignment: "left",
                    },
                    {},
                    {},
                  ],
                  [
                    {
                      text: "E",
                      fontSize: 10,
                      bold: false,
                      alignment: "center",
                    },
                    {
                      text: "PERFIL DOCUMENTAL",
                      alignment: "center",
                      fontSize: 10,
                      bold: false,
                    },
                    {},
                  ],
                  [
                    {
                      text: "CALIFICACIÓN OBTENIDA",
                      colSpan: 2,
                      bold: true,
                      fontSize: 12,
                      alignment: "center",
                    },
                    {},
                    {},
                  ],
                ],
              },
            },
            {
              text:
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRESULTADO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
              bold: true,
              fontSize: 13,
              margin: [0, 20, 0, 5],
              background: "black",
              color: "white",
              alignment: "center",
            },
            {
              text:
                "El puntaje total obtenido por el proveedor " +
                "PUBLIESTRELLA" +
                " es de " +
                "95%" +
                " equivalente a una calificación" +
                "EXCELENTE" +
                ", lo cual indica que es un proveedor con" +
                "RIESGO MÍNIMO" +
                " para cumplir con los estándares y requerimientos internos, con lo cual" +
                "PUEDE PRESTAR SERVICIOS O ENTREGAR BIENES" +
                " a la COOPERATIVA DE  AHORRO Y CRÉDITO 29 DE OCTUBRE LTDA.",
              fontSize: 10,
              alignment: "justify",
              margin: [0, 0, 0, 5],
            },
            {
              text:
                "  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIMITACIONES \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
              bold: true,
              fontSize: 13,
              margin: [0, 20, 0, 5],
              background: "black",
              color: "white",
              alignment: "center",
            },
            {
              text:
                "Los resultados contenidos en el presente informe, se basan en la información y documentación legal, tributaria y financiera proporcionada por " +
                "PUBLICIDAD ESTRELLA S.A." +
                " . El trabajo ha consistido en validar y analizar la información provista con el objeto de asignar al proveedor, una calificación, en función de los parámetros definidos por la COOPERATIVA DE AHORRO Y CRÉDITO 29 DE OCTUBRE LTDA., y alineados a la normativa vigente (Resolución No. SEPS-1GT-1R-1GJ-2018-0279), para los Servicios Provistos por Terceros.",
              fontSize: 10,
              alignment: "justify",
              margin: [0, 0, 0, 20],
            },
            {
              text:
                "Aquellos proveedores que tengan mayor o igual a 60 puntos, podrán prestar servicios o entregar bienes a la Cooperativa, salvo que la Gerencia General autorice un score de menor puntaje.",
              fontSize: 10,
              color: "#03498F",
              bold: true,
              alignment: "center",
              margin: [0, 0, 0, 5],
            },
            {
              text:
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFIRMAS\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
              bold: true,
              fontSize: 13,
              margin: [0, 20, 0, 20],
              background: "black",
              color: "white",
              alignment: "center",
            },
            {
              columns: [
                {
                  text: "ELABORADO POR:",
                  margin: [44, 0, 0, 15],
                  fontSize: 10,
                },
                { text: "REVISADO POR:", margin: [44, 0, 0, 15], fontSize: 10 },
                { text: "APROBADO POR:", margin: [44, 0, 0, 15], fontSize: 10 },
              ],
            },
            {
              columns: [
                {
                  table: {
                    widths: ["90%"],
                    heights: [41],
                    headerRows: 1,
                    body: [[{}]],
                  },
                  margin: [45, 0, 0, 10],
                },
                {
                  table: {
                    widths: ["90%"],
                    heights: [41],
                    headerRows: 1,
                    body: [[{}]],
                  },
                  margin: [45, 0, 0, 10],
                },
                {
                  table: {
                    widths: ["90%"],
                    heights: [41],
                    headerRows: 1,
                    body: [[{}]],
                  },
                  margin: [45, 0, 0, 10],
                },
              ],
            },
            {
              columns: [
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Nombre:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Nombre:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Nombre:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
              ],
            },
            {
              columns: [
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Cargo:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Cargo:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Cargo:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
              ],
            },
            {
              columns: [
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Fecha:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Fecha:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
                {
                  table: {
                    widths: ["23%", "70%"],
                    heights: [10, 10, 10],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "Fecha:",
                          bold: true,
                          fontSize: 9,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
