import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';
import { SERVICES } from './services/services';
import { APIS_ADMIN, APIS_APP } from './api/api';

@NgModule({
	imports: [CommonModule, HttpModule],
	declarations: [],
	exports: [],
	providers: [...APIS_ADMIN, ...APIS_APP, ...SERVICES]
})
export class Selfbits {
	public static forRoot(configuration: Configuration): ModuleWithProviders {
		return {
			ngModule: Selfbits,
			providers: [
				{ provide: Configuration, useValue: configuration }
			]
		}
	}
}
