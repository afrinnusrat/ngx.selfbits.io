export * from './ConfigService';
import  { ConfigService } from './ConfigService';
export * from './FileService';
import  { FileService } from './FileService';
export * from './FileAdminService';
import  { FileAdminService } from './FileAdminService';

export const SERVICES = [
	ConfigService,
	FileService,
	FileAdminService
];
