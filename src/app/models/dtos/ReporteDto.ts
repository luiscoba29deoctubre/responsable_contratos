export class ReporteDto {
  constructor(
    public nombrerazonsocial?: string,
    public nombrecomercial?: string,

    public fechadecalificacion?: string,

    public actividadeconomicaprincipal?: string,
    public actividadeconomicasecundaria?: string,

    public lstActividades?: any[],

    public pesosPerfiles?: any,

    public calificacion?: Calificacion
  ) {}
}

export class Calificacion {
  constructor(
    public calificacion?: string,
    public riesgo?: string,
    public resultado?: string
  ) {}
}
