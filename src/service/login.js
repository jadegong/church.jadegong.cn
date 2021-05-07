/**
 * Login http requests services.
 * v0.0.1 2021/03/29 Forrest Create File.
 *      1.Check token.
 */
import { fetch } from '../utils/fetchFilter';
export function checkToken (params) {
    return fetch('/api/login/checkToken', {
        data: params,
    });
}
