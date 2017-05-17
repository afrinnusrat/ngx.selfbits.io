import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ActionsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * delete existing action
     * @param actionId The action identifier
     */
    actionsActionIdDelete(actionId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Execute action. If the action code throws errors, they are caught and information is provided in the payload with status code 200.
     * @param actionId The action identifier
     * @param payload Execution payload
     */
    actionsActionIdExecPost(actionId: string, payload?: models.ActionExecutionRequestPayload, extraHttpRequestParams?: any): Observable<models.ActionExecutionResponse>;
    /**
     *
     * Get one existing action
     * @param actionId The action identifier
     */
    actionsActionIdGet(actionId: string, extraHttpRequestParams?: any): Observable<models.Action>;
    /**
     *
     * update existing action
     * @param actionId The user identifier
     * @param updatedAction updated action
     */
    actionsActionIdPut(actionId: string, updatedAction: models.ActionUpdate, extraHttpRequestParams?: any): Observable<models.Action>;
    /**
     *
     * Create multiple new actions
     * @param actions Multiple actions
     */
    actionsBulkPost(actions?: models.NewActionArray, extraHttpRequestParams?: any): Observable<models.ActionArray>;
    /**
     *
     * Bulk delete existing actions
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    actionsDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns actions
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    actionsGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ActionPage>;
    /**
     *
     * Create new action
     * @param action Your new action
     */
    actionsPost(action?: models.NewAction, extraHttpRequestParams?: any): Observable<models.Action>;
    /**
     *
     * Bulk update existing actions
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param actionBulkUpdate Use filter to find the actions and do a bulk update
     */
    actionsPut(filter: string, actionBulkUpdate: models.ActionBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * delete existing action
     * @param actionId The action identifier
     */
    actionsActionIdDeleteWithHttpInfo(actionId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Execute action. If the action code throws errors, they are caught and information is provided in the payload with status code 200.
     * @param actionId The action identifier
     * @param payload Execution payload
     */
    actionsActionIdExecPostWithHttpInfo(actionId: string, payload?: models.ActionExecutionRequestPayload, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing action
     * @param actionId The action identifier
     */
    actionsActionIdGetWithHttpInfo(actionId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing action
     * @param actionId The user identifier
     * @param updatedAction updated action
     */
    actionsActionIdPutWithHttpInfo(actionId: string, updatedAction: models.ActionUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create multiple new actions
     * @param actions Multiple actions
     */
    actionsBulkPostWithHttpInfo(actions?: models.NewActionArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing actions
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    actionsDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns actions
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    actionsGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new action
     * @param action Your new action
     */
    actionsPostWithHttpInfo(action?: models.NewAction, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing actions
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param actionBulkUpdate Use filter to find the actions and do a bulk update
     */
    actionsPutWithHttpInfo(filter: string, actionBulkUpdate: models.ActionBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
