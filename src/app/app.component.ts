import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<p>Hi, {{name}}</p>
			  <div><input type="text" [(ngModel)]="name" placeholder="Info" /></div>`,
	styles: ['p{color:#cecece;text-shadow:1px 1px 1px #000}']
})
export class AppComponent{
	@Input() name:string = 'AngularJS';
}