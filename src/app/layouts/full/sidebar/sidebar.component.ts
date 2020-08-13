import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit,
} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { MenuItems } from "../../../shared/menu-items/menu-items";
import { DataService } from "../../../services/active-directory/data.service";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: [],
})
//
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  nombre: string;

  private _mobileQueryListener: () => void;

  constructor(
    private activeDirectory: DataService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia("(min-width: 768px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.getName();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getName(): void {
    this.nombre = this.activeDirectory.getName();
  }
}
