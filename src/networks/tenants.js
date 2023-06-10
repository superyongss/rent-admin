import {request} from "./requests";

export function getTenants(address) {
    return request({
        url: '/api/v1/tenants',
        params: {
            address
        }
    }).then(res => {
        return res
    })
}

export function getTenant(id, name, address) {
    return request({
        url: '/api/v1/tenant',
        method: 'post',
        data: {
            id,
            name,
            address
        }
    })
}