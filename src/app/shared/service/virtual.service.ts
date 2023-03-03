import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VirtualProgram } from 'src/app/model/virtualProgram.module';
import { map } from 'rxjs';
import { VirtualProject } from 'src/app/model/virtualProject.module';

@Injectable({
  providedIn: 'root',
})
export class VirtualService {
  constructor(private http: HttpClient) {}

  _virtualProgramsURL =
    ' http://cmi-ofm.azurewebsites.net/api/Program/GetAllActiveVirtualPrograms';

  _virtualProjectsURL =
    'http://cmi-ofm.azurewebsites.net/api/Program/GetVirtualProjects';

  getAllPrograms() {
    return this.http
      .get<{ virtualProgramList: VirtualProgram[] }>(this._virtualProgramsURL)
      .pipe(map((res) => res.virtualProgramList));
  }

  getAllProjects() {
    return this.http
      .get<{ virtualProgramDetails: VirtualProject[] }>(
        this._virtualProjectsURL
      )
      .pipe(map((res) => res.virtualProgramDetails));
  }
}
