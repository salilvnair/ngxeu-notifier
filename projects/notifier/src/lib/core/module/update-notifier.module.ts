import { NgModule } from '@angular/core';
import { UpdateNotifierDialog } from '../update/update-dialog.component';
import { NotifierMaterialModule } from './notifier-material.module';


const DELCARATION_EXPORT_ARRAY = [
  UpdateNotifierDialog
];

const ENTRY_COMPONENT_ARRAY = [
  UpdateNotifierDialog
];

const IMPORT_EXPORT_MODULE_ARRAY = [
  NotifierMaterialModule
];


@NgModule({
  imports: [IMPORT_EXPORT_MODULE_ARRAY],
  declarations: [
    DELCARATION_EXPORT_ARRAY
  ],
  exports: [
    DELCARATION_EXPORT_ARRAY
  ],
  entryComponents:[ENTRY_COMPONENT_ARRAY],
})
export class UpdateNotifierModule { }
