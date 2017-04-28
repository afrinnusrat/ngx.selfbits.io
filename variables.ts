import { OpaqueToken } from '@angular/core';
import { Configuration } from './configuration';

export const BASE_PATH = new OpaqueToken('basePath');
export const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}
