import http from 'k6/http';
// import encoding from 'k6/encoding';
import { group } from 'k6';

const username = 'dbo-order-srv';
const password = 'dbo-order-srv-passwd';


export const options = {
    // vus: 1,
    // duration: '2s',
    stages: [{ duration: '1s', target: 10, },
    { duration: '2s', target: 10, },
    { duration: '3s', target: 10, },
    { duration: '1s', target: 10, },
    { duration: '1s', target: 10, },
    { duration: '1s', target: 10, },
    { duration: '1s', target: 10, }],

};

export default async function () {
    const credentials = `${username}:${password}`;

    group('Get DO All', function () {
        const getDoAll = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO All', getDoAll)
    });

    group('Get DO By H2H', function () {
        const getDoByH2h = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/h2h/delivery-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO By H2H', getDoByH2h)
    });

    group('Get DO Detail All', function () {
        const getDoDetailAll = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders/details', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Detail All', getDoDetailAll)
    });

    group('Get DO Upload Histories All', function () {
        const getDoUploadHisAll = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders/upload-histories', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Upload Histories All', getDoUploadHisAll)
    });

    group('Get DO Sync to Kafka Histories All', function () {
        const getDoSyncToKafkaHisAll = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders/sync-to-kafka-histories', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Sync to Kafka Histories All', getDoSyncToKafkaHisAll)
    });

    group('Get DO Journeys All', function () {
        const getDoJourneysAll = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders/journeys', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Journeys All', getDoJourneysAll)
    });

    group('Get DO By Sales Order ID', function () {
        const getDoBySalesOrderId = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders/?so_id=${so_id}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO By Sales Order ID', getDoBySalesOrderId)
    });

    group('Get DO  By Salesman', function () {
        const getDoBySalesman = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/salesman/${salesman_id}/delivery-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO By Salesman', getDoBySalesman)
    });

    group('Get DO By Store', function () {
        const getDoByStore = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/stores/${store_id}/delivery-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO By Store', getDoByStore)
    });

    group('Get DO By Agent ID', function () {
        const getDoByAgentId = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/agent/${agent_id}/delivery-orders', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO By Agent ID', getDoByAgentId)
    });

    group('Get DO By ID', function () {
        const getDoById = http.request('GET', 'https://moonlay-api.dbo.dev/order-srv/sales-orders?id=${id}', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO By ID', getDoById)
    });

    group('Get DO Detail By DO ID', function () {
        const getDoDetailByDoId = http.request('GET', 'https://moonlay-api.dbo.dev/delivery-orders/${id}/details?do_detail_id=${do_detail_id}', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Detail By DO ID', getDoDetailByDoId)
    });

    group('Get DO Detail By ID', function () {
        const getDoDetailById = http.request('GET', 'https://moonlay-api.dbo.dev/delivery-orders/${do_detail_id}/details/${id}', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Detail By ID', getDoDetailById)
    });

    group('Get DO Upload History By ID', function () {
        const getDoUploadHisById = http.request('GET', 'https://moonlay-api.dbo.dev/delivery-orders/upload-histories/${request_id}', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Upload History By ID', getDoUploadHisById)
    });

    group('Get DO Upload Item Errors By DO Upload History ID', function () {
        const getDoUploadItemErrByDoUploadHisId = http.request('GET', 'https://moonlay-api.dbo.dev/delivery-orders/upload-histories/${do_upload_history_id}/error-items', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Upload Item Errors By DO Upload History ID', getDoUploadItemErrByDoUploadHisId)
    });

    group('Get DO Upload Item Errors By Request ID', function () {
        const getDoUploadItemErrByReqId= http.request('GET', 'https://moonlay-api.dbo.dev/delivery-orders/upload-histories-by-request-id/${request_id}/error-items', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Upload Item Errors By Request ID', getDoUploadItemErrByReqId)
    });

    group('Get DO Journeys By Delivery Order ID', function () {
        const getDoJourneysByDoId= http.request('GET', 'https://moonlay-api.dbo.dev/delivery-orders/${id}/journeys', JSON.stringify(), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Get DO Journeys By Delivery Order ID', getDoJourneysByDoId)
    });


}