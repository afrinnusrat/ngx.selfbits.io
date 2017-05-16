import * as models from './models';
export interface InvitePage {
    docs?: Array<models.Invite>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
