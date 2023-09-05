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

    const data = {
        "order_status_id": "10",
        "reason": "Tidak Ada Stok",
        "sales_order_details": [
            {
                "id": "1222",
                "order_status_id": "16",
                "reason": "Salah Input"
            }
        ]
    }

    group('Update SO', function () {
        const updateSO = http.request('POST', 'https://api.dbo.dev/order-srv/sales-orders/{{salesOrderId}}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Update SO ', updateSO)
    });


}
