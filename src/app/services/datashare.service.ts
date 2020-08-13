import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Parameter } from "../models/parameter";
import { catchError } from "rxjs/internal/operators";

@Injectable({
  providedIn: "root",
})
export class DataShareService {
  dataParameters: any[] = [];

  constructor() {}
}
