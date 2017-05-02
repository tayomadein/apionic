import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ filterPropertyByPipe } from './pipes';

@NgModule({
    declarations: [filterPropertyByPipe],
    imports: [CommonModule],
    exports:[filterPropertyByPipe]
})
export class AllPipes{}
