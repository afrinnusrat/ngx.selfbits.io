import { NgModule, ModuleWithProviders, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';
import { BASE_PATH } from './variables';
import { SERVICES } from './services/services';
import { APIS } from './api/api';

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [],
    exports: [],
    providers: [...APIS, ...SERVICES]
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
