import { Injectable } from "@angular/core";
import { MsalUserService } from "../../services/active-directory/msaluser.service";

export interface Menu {
  state: string;
  type: string;
  name: string;
  icon: string;
  perfil: string;
}

const MENUITEMS = [
  {
    state: "app-parametrica",
    type: "link",
    name: "Paramétrica",
    icon: "all_inclusive",
    perfil: "AUDITOR",
  },
  {
    state: "new-component",
    type: "link",
    name: "Nuevo Componente",
    icon: "all_inclusive",
    perfil: "user",
  },
];

@Injectable()
export class MenuItems {
  public perfil: string;

  constructor(private msalService: MsalUserService    ) {}

  getMenuitem(): Menu[] {
    let SHOW_MENUITEMS: Menu[] = [];

    this.perfil = this.msalService.perfil;

    SHOW_MENUITEMS = MENUITEMS.filter((item) => item.perfil === this.perfil);

    return SHOW_MENUITEMS;
  }
}
