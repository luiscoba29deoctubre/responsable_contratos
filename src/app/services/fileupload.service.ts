import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  private apiUrl = "http://localhost:3000"; // URL to web api del servidor

  // sacado de https://stackoverflow.com/questions/47936183/angular-file-upload

  constructor(private http: HttpClient) {}
  public postFileParameters(fileToUpload: File): Observable<boolean> {
    const endpoint = "your-destination-url";
    const formData: FormData = new FormData();
    formData.append("fileKey", fileToUpload, fileToUpload.name);
    return this.http.post<any>( // aqui estamos enviando el un parametro y el body al mismo tiempo
      `${this.apiUrl}/parameters/postFileParameters`,
      formData
    );

    //  .catch((e) => this.handleError(e));
  }
}
