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

    
    
    group('Update So Detail By Id', function () {
        const credentials = `${username}:${password}`;
        const encodedCredentials = encoding.b64encode(credentials);
        const data = {
            "so_detail_code": "${so_detail_code}",
            "order_status_id": 16,
            "reason": "Salah Input"
        }
        const updateSoDetailById = http.request('PUT', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/{{id}}/details/{{so_details_id}}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Update So Detail By Id', updateSoDetailById)
    });

    group('Update So Detail By So Id', function () {
        const credentials = `${username}:${password}`;
        const encodedCredentials = encoding.b64encode(credentials);
        const data = {
            "order_status_id": 10,
            "reason": "Tidak Ada Stok",
            "sales_order_details": [
                {
                    "id": "${salesOrderDetailsId5}",
                    "order_status_id": 16,
                    "reason": "Salah Input"
                }
            ]
        }
        const updateSoDetailBySoId = http.request('PUT', 'https://moonlay-api.dbo.dev/order-srv/sales-orders/{{salesOrderId5}}/details', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Update So Detail By So Id', updateSoDetailBySoId)
    });

   }