import http from 'k6/http';
import encoding from 'k6/encoding';

const username = 'dbo-order-srv';
const password = 'dbo-order-srv-passwd';

import { group } from 'k6';



export const options = {
    // vus: 1,
    // duration: '2s',
    stages: [{ duration: '1s', target: 110, },
            { duration: '2s', target: 10, },
            { duration: '3s', target: 10, },
            { duration: '1s', target: 10, },
            { duration: '1s', target: 10, },
            { duration: '1s', target: 10, },
            { duration: '1s', target: 10, }],
    
};

export default async function () {

    group('Get So By Agent Id', function () {
        const getSoByAgentId = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/agent/{{id}}/sales-orders', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So By Agent Id', getSoByAgentId)
    });

     group('Get So By Id', function () {
        const getSoById = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders?id={{id}}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
         console.log('Get So By Id', getSoById)
     });
    
    group('Get So Detail By So Id', function () {
        const getSoDetailBySoId = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/{{id}}/details', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Detail By So Id', getSoDetailBySoId)
    });

    group('Get So Detail By Id', function () {
        const getSoDetailById = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/details/{{id}}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Detail By Id', getSoDetailById)
    });

    group('Get So Upload History By Id', function () {
        const getSoUploadHistoryById = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/upload-histories/{{id}}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Upload History By Id', getSoUploadHistoryById)
    });

    
    group('Get So Upload Item Errors By Request Id', function () {
        const getSoUploadItemErrorsByRequestId = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/upload-histories-by-request-id/{{id}}/error-items', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Upload Item Errors By Request Id', getSoUploadItemErrorsByRequestId)
    });

    group('Get So Upload Item Errors By So Upload History Id', function () {
        const getSoUploadItemErrorsBySoUploadHistoryId = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/upload-histories/{{id}}/error-items', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Upload Item Errors By So Upload History Id', getSoUploadItemErrorsBySoUploadHistoryId)
    });

}