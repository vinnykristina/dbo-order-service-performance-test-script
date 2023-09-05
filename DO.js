import http from 'k6/http';
// import encoding from 'k6/encoding';
import { group } from 'k6';

const username = 'dbo-order-srv';
const password = 'dbo-order-srv-passwd';

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

    const credentials = `${username}:${password}`;
    const encodedCredentials =  encoding.b64encode(credentials);

    group('Create Retry Process For DO Sync To Kafka', function () {
        const createRetryProcessForDO = http.request('GET', 'https://api.dbo.dev/order-srv/delivery-orders/retry-to-sync-kafka/{{doEventLogId}}', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Create Retry Process For DO Sync To Kafka', createRetryProcessForDO)
    });

    group('Create Export DO All', function () {
        const createExportDOAll = http.request('GET', 'https://api.dbo.dev/order-srv/delivery-orders/export', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Create Export DO All', createExportDOAll)
    });

    group('Create Export DO Detail All', function () {
        const createExportDODetailAll = http.request('GET', 'https://api.dbo.dev/order-srv/delivery-orders/export/delivery-order-details', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Create Export DO Detail All', createExportDODetailAll)
    });


}
