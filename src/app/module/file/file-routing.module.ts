import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileListComponent} from "../../component/file/file-list/file-list.component";

const routes: Routes = [
    {
        path: '',
        component: FileListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
