/**
 * Tools functions.
 * v0.0.1 2021/03/30 Forrest
 */
export const tools = {
    /**
     * 获取url的查询数据，返回一个对象
     * @param url string
     * @returns {...}
     */
    getQueryObj(url) {
        let theRequest = {};
        if (url.indexOf('?') !== -1) {
            let str = url.substring(url.indexOf('?') + 1);
            let strs = str.split('&');
            for (let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
            }
        }
        return theRequest;
    },
};
