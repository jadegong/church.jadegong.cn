/**
 * Rewrite window fetch.
 * v0.0.1 2021/03/30 Forrest
 */
import { Message } from 'element-ui';
import querystring from 'querystring';
import { tools } from './tools';
import constants from './constants';
let oldFetchfn = fetch;
window.fetch = function (input, opts) {
    return new Promise(function (resolve, reject) {
        let abort_promise = function () {
            reject(new Error('fetch abort'));
        };
        let reqUrl = input;
        let headerToken = localStorage.getItem(constants.TOKEN_NAME);
        // 鉴权方式统一在header里放token
        opts.headers = {...opts.headers, [constants.TOKEN_NAME]: headerToken || ''};
        let p = oldFetchfn(reqUrl, opts).then(res => {
            let te = res.json();
            te.then(json => {
                // 错误码处理
                if (json.status !== constants.STATUS_CODE.SUCCESS) {
                    Message.closeAll();
                    if (json.status === '50' || json.status === '1000' || json.status === '45') {
                        if (json.status === '45') {
                            message.warn('该用户无法登录，请联系管理员！', 1).then(() => {
                                return false;
                            })
                        } else if (json.status === '50') {
                            message.destroy();
                            message.warn('', 1).then(() => {
                                tools.clearCache();
                                tools.routeHashChange('/login');
                                return false;
                            })
                        } else if (json.status === '1000') {
                            message.destroy();
                            message.warn('登录超时，请重新登录！', 1).then(() => {
                                tools.clearCache();
                                tools.routeHashChange('/login');
                                return false;
                            })
                        }
                    } else if (json.status === '55') {
                        // tools.routeHashChange('/personalCenter/errorPage');
                    } else {
                        // fix: 不符合一般消息体数据结构的数据resolve到相应的地方处理。
                        resolve(json);
                    }
                } else {
                    resolve(json);
                }
            });
        }).catch(err => {
            reject(err);
        });
        p.abort = abort_promise;
        return p;
    })
};

