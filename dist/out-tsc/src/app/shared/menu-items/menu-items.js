var __decorate =
    (this && this.__decorate) ||
    function(decorators, target, key, desc) {
        var c = arguments.length,
            r =
            c < 3 ?
            target :
            desc === null ?
            (desc = Object.getOwnPropertyDescriptor(target, key)) :
            desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
import { Injectable } from "@angular/core";
const MENUITEMS = [{
        state: "app-parametrica",
        type: "link",
        name: "Paramétrica",
        icon: "all_inclusive",
    },
    {
        state: "new-component",
        type: "link",
        name: "Nuevo Componente",
        icon: "all_inclusive",
    },
    /*
    { state: "dashboard", name: "Dashboard", type: "link", icon: "av_timer" },
    { state: "button", type: "link", name: "Buttons", icon: "crop_7_5" },
    { state: "grid", type: "link", name: "Grid List", icon: "view_comfy" },
    { state: "lists", type: "link", name: "Lists", icon: "view_list" },
    { state: "menu", type: "link", name: "Menu", icon: "view_headline" },
    { state: "tabs", type: "link", name: "Tabs", icon: "tab" },
    { state: "stepper", type: "link", name: "Stepper", icon: "web" },
    {
        state: "expansion",
        type: "link",
        name: "Expansion Panel",
        icon: "vertical_align_center",
    },
    { state: "chips", type: "link", name: "Chips", icon: "vignette" },
    { state: "toolbar", type: "link", name: "Toolbar", icon: "voicemail" },
    {
        state: "progress-snipper",
        type: "link",
        name: "Progress snipper",
        icon: "border_horizontal",
    },
    {
        state: "progress",
        type: "link",
        name: "Progress Bar",
        icon: "blur_circular",
    },
    {
        state: "dialog",
        type: "link",
        name: "Dialog",
        icon: "assignment_turned_in",
    },
    { state: "tooltip", type: "link", name: "Tooltip", icon: "assistant" },
    { state: "snackbar", type: "link", name: "Snackbar", icon: "adb" },
    { state: "slider", type: "link", name: "Slider", icon: "developer_mode" },
    {
        state: "slide-toggle",
        type: "link",
        name: "Slide Toggle",
        icon: "all_inclusive",
    },
*/
];
let MenuItems = class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
};
MenuItems = __decorate([Injectable()], MenuItems);
export { MenuItems };
//# sourceMappingURL=menu-items.js.map