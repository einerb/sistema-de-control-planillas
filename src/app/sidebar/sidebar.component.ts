import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Inicio", icon: "nc-bank", class: "" },
  { path: "/icons", title: "Líderes", icon: "nc-single-02", class: "" },
  { path: "/maps", title: "Digitadores", icon: "nc-touch-id", class: "" },
  { path: "/notifications", title: "Programas", icon: "nc-briefcase-24", class: "" },
  { path: "/table", title: "Informes", icon: "nc-single-copy-04", class: "" },
/*  { path: "/icons", title: "Icons", icon: "nc-diamond", class: "" },
   { path: "/maps", title: "Maps", icon: "nc-pin-3", class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "nc-bell-55",
    class: "",
  },
  { path: "/user", title: "User Profile", icon: "nc-single-02", class: "" },
  { path: "/table", title: "Table List", icon: "nc-tile-56", class: "" },
  {
    path: "/typography",
    title: "Typography",
    icon: "nc-caps-small",
    class: "",
  }, */
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
