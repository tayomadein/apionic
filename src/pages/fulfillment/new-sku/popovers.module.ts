import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPopover, UnitTypePopover, CurrencyCodePopover} from './popovers';
import { IonicModule } from 'ionic-angular';
import { NewSKU } from './new-sku';

@NgModule({
    declarations: [CategoryPopover, UnitTypePopover, CurrencyCodePopover],
    imports: [
        CommonModule,
        IonicModule.forRoot(NewSKU)],
    entryComponents:[CategoryPopover, UnitTypePopover, CurrencyCodePopover]
})
export class AllPopovers{}


/*
SOURCES:
https://forum.ionicframework.com/t/rc-0-how-do-you-import-export-modules-into-your-app/65168/8
http://stackoverflow.com/questions/39415903/error-no-component-factory-found-for-termsconditions
*/
