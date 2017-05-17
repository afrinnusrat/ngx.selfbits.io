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
    /**
     *
     * Create multiple new invites
     * @param invites Multiple invites
     */
    invitesBulkPost(invites?: models.NewInviteArray, extraHttpRequestParams?: any): Observable<models.InviteArray>;
    /**
     *
     * Bulk delete existing invites
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    invitesDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns invites
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.InvitePage>;
    /**
     *
     * delete existing invite
     * @param inviteId The invite identifier
     */
    invitesInviteIdDelete(inviteId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing invite
     * @param inviteId The invite identifier
     */
    invitesInviteIdGet(inviteId: string, extraHttpRequestParams?: any): Observable<models.Invite>;
    /**
     *
     * update existing invite
     * @param inviteId The user identifier
     * @param updatedInvite updated invite
     */
    invitesInviteIdPut(inviteId: string, updatedInvite: models.InviteUpdate, extraHttpRequestParams?: any): Observable<models.Invite>;
    /**
     *
     * Create new invite
     * @param invite Your new invite
     */
    invitesPost(invite: models.NewInvite, extraHttpRequestParams?: any): Observable<models.Invite>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param inviteBulkUpdate Use filter to find the invites and do a bulk update
     */
    invitesPut(filter: string, inviteBulkUpdate: models.InviteBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new invites
     * @param invites Multiple invites
     */
    invitesBulkPostWithHttpInfo(invites?: models.NewInviteArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing invites
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    invitesDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns invites
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing invite
     * @param inviteId The invite identifier
     */
    invitesInviteIdDeleteWithHttpInfo(inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing invite
     * @param inviteId The invite identifier
     */
    invitesInviteIdGetWithHttpInfo(inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing invite
     * @param inviteId The user identifier
     * @param updatedInvite updated invite
     */
    invitesInviteIdPutWithHttpInfo(inviteId: string, updatedInvite: models.InviteUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new invite
     * @param invite Your new invite
     */
    invitesPostWithHttpInfo(invite: models.NewInvite, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param inviteBulkUpdate Use filter to find the invites and do a bulk update
     */
    invitesPutWithHttpInfo(filter: string, inviteBulkUpdate: models.InviteBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
