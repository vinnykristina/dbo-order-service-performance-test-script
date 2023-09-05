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

    group('Get So By Salesman', function () {
        const getSoBySalesman = http.request('GET', 'https://api.dbo.dev/order-srv/salesman/520/sales-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So By Salesman ', getSoBySalesman)
    });

     group('Get So By Store Id', function () {
        const getSoByStoreId = http.request('GET', 'https://api.dbo.dev/order-srv/stores/1419/sales-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
         console.log('Get So By Store Id', getSoByStoreId)
     });
    
    group('Get So By Host to Host', function () {
        const getSoByH2H = http.request('GET', 'https://api.dbo.dev/order-srv/h2h/sales-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So By Host to Host', getSoByH2H)
    });

    group('Get So By Id', function () {
        const getSoById = http.request('GET', 'https://api.dbo.dev/order-srv/sales-orders?id=372132', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So By Id', getSoById)
    });

    group('Get So All', function () {
        const getSoAll = http.request('GET', 'https://api.dbo.dev/order-srv/sales-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So All', getSoAll)
    });

    group('Get So Detail All', function () {
        const getSoDetailAll = http.request('GET', 'https://api.dbo.dev/order-srv//sales-order-detail', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Detail All', getSoDetailAll)
    });

    group('Get So Upload Histories All', function () {
        const getSoUploadHistoriesAll = http.request('GET', 'https://api.dbo.dev/order-srv//sales-order-detail', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Upload Histories All', getSoUploadHistoriesAll)
    });

    group('Get SOSJ Upload Histories All', function () {
        const getSOSJUploadHistoriesAll = http.request('GET', 'https://api.dbo.dev/order-srv//sales-order/upload-histories', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get SOSJ Upload Histories All', getSOSJUploadHistoriesAll)
    });

    group('Get So Sync To Kafka Histories All', function () {
        const getSoSyncToKafkaHistoriesAll = http.request('GET', 'https://api.dbo.dev/order-srv/sales-orders/event-logs', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Sync To Kafka Histories All', getSoSyncToKafkaHistoriesAll)
    });

    group('Get Sosj Upload Item Errors By Request Id', function () {
        const getSosjUploadItemErrorsByRequestId = http.request('GET', 'https://api.dbo.dev/order-srv/sosj/upload-histories/415d66fd-a107-4d36-8cfc-ee90d561c51a/error-items', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get Sosj Upload Item Errors By Request Id', getSosjUploadItemErrorsByRequestId)
    });

    group('Get Sosj Upload Item Errors By Sosj Upload History Id', function () {
        const getSosjUploadItemErrorsBySosjUploadHistoryId = http.request('GET', 'https://api.dbo.dev/order-srv/sosj/upload-histories/items/6437cf59d92346deb81a8f77', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get Sosj Upload Item Errors By Sosj History Upload Id', getSosjUploadItemErrorsBySosjUploadHistoryId)
    });

    group('Get So Journeys All', function () {
        const getSoJourneysAll = http.request('GET', 'https://api.dbo.dev/order-srv/sales-orders/journeys', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Journeys All ', getSoJourneysAll)
    });

    group('Get So Journeys By So Id', function () {
        const getSoJourneysBySoId = http.request('GET', 'https://api.dbo.dev/order-srv/sales-orders/610/journeys', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Get So Journeys By So Id ', getSoJourneysBySoId)
    });

    group('Create Retry Process For SO Upload', function () {
        const cretaeRetryProcessForSOUpload = http.request('GET', 'https://api.dbo.dev/order-srv/sales-orders/upload-sales-orders/retry/641bbee1af1e78f57a1035da', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Create Retry Process For SO Upload', cretaeRetryProcessForSOUpload)
    });
}