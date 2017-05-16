import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class InvitesApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    invitesBulkPost(invites?: models.NewInviteArray, extraHttpRequestParams?: any): Observable<models.InviteArray>;
    invitesDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    invitesGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.InvitePage>;
    invitesInviteIdDelete(inviteId: string, extraHttpRequestParams?: any): Observable<{}>;
    invitesInviteIdGet(inviteId: string, extraHttpRequestParams?: any): Observable<models.Invite>;
    invitesInviteIdPut(inviteId: string, updatedInvite: models.InviteUpdate, extraHttpRequestParams?: any): Observable<models.Invite>;
    invitesPost(invite: models.NewInvite, extraHttpRequestParams?: any): Observable<models.Invite>;
    invitesPut(filter: string, inviteBulkUpdate: models.InviteBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    invitesBulkPostWithHttpInfo(invites?: models.NewInviteArray, extraHttpRequestParams?: any): Observable<Response>;
    invitesDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    invitesGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    invitesInviteIdDeleteWithHttpInfo(inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    invitesInviteIdGetWithHttpInfo(inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    invitesInviteIdPutWithHttpInfo(inviteId: string, updatedInvite: models.InviteUpdate, extraHttpRequestParams?: any): Observable<Response>;
    invitesPostWithHttpInfo(invite: models.NewInvite, extraHttpRequestParams?: any): Observable<Response>;
    invitesPutWithHttpInfo(filter: string, inviteBulkUpdate: models.InviteBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
