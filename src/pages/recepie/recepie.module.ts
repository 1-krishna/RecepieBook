import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecepiePage } from './recepie';

@NgModule({
  declarations: [
    RecepiePage,
  ],
  imports: [
    IonicPageModule.forChild(RecepiePage),
  ],
})
export class RecepiePageModule {}
