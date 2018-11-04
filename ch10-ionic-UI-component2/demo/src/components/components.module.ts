import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
@NgModule({
	declarations: [AComponent,
    BComponent],
	imports: [],
	exports: [AComponent,
    BComponent]
})
export class ComponentsModule {}
