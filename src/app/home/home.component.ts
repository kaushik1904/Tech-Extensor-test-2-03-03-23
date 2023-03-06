import { Component } from '@angular/core';
import { VirtualService } from '../shared/service/virtual.service';
import { VirtualProgram } from 'src/app/model/virtualProgram.module';
import { VirtualProject } from 'src/app/model/virtualProject.module';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: VirtualService) {}

  virtualProgramOptions: VirtualProgram[] = [];
  virtualProjectOptions: VirtualProject[] = [];
  selectedProjects: VirtualProject[] = [];
  selectedVirtualProgram = [];
  selectedVirtualProject = [];

  onClick() {
    this.service.getAllPrograms().subscribe((res) => {
      console.log(res);
      this.virtualProgramOptions = res;
    });
    this.service.getAllProjects().subscribe((res) => {
      this.virtualProjectOptions = res;
    });
  }

  selectOnProgram(program: MatSelectChange) {
    this.selectedVirtualProgram = program.value;
    console.log(program.value);
    // if (program.value == 'selectedVirtualProgram') {
    //   const array = this.virtualProgramOptions.map((e) => {
    //     return e;
    //   });
    //   console.log(array);
    // }

    this.selectedProjects = this.virtualProjectOptions
      .filter((item) => {
        return this.selectedVirtualProgram.some(
          (data) => data == item.programID
        );
      })
      .filter((value, index, self) => {
        return (
          self.findIndex((item) => item.projectName === value.projectName) ===
          index
        );
      });

    console.log(this.selectedProjects);
  }

  selectOnProject(program: MatSelectChange) {
    this.selectedVirtualProject = program.value;
    console.log(program.value);
  }
}
