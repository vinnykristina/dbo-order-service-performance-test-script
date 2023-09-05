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


    group('Create Retry Process For So Sync To Kafka', function () {
        const createRetryProcessForSoSyncToKafka = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/retry-to-sync-kafka/{{id}}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Create Retry Process For So Sync To Kafka', createRetryProcessForSoSyncToKafka)
    });

    group('Create Export So', function () {
        const createExportSo = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/export', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Create Export So', createExportSo)
    });

    group('Create Export So Detail', function () {
        const createExportSoDetail = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/export/sales-order-details', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Create Export So Detail', createExportSoDetail)
    });
 

}