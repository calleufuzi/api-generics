import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export abstract class ApiService<T, ID> {
  constructor(protected _http: HttpClient, protected _baseUrl: string) {}
}
