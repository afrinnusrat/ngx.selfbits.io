import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';
import { SERVICES } from './services/services';
import { APIS } from './api/api';
let initConfiguration: Configuration;

@NgModule({
	imports: [CommonModule, HttpModule],
	declarations: [],
	exports: [],
	providers: [...APIS, ...SERVICES]
})
export class Selfbits {
	public static forRoot(configuration: Configuration): ModuleWithProviders {
		initConfiguration = new Configuration(configuration);
		return {
			ngModule: Selfbits,
			providers: [
				{ provide: Configuration, useValue: initConfiguration }
			]
		}
	}
}
