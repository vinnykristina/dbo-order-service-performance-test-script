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

    const data =
    {
        "warehouse_id": 4,
        "order_source_id": 1,
        "order_status_id": 17,
        "do_ref_code": "Testing-054",
        "do_ref_date": "2023-04-17",
        "driver_name": "test",
        "plat_number": "B1912BC",
        "note": "Test Note DO",
        "delivery_order_details": [
            {
                "id": '${do_detail_id}',
                "qty": 0,
                "note": "send"
            }
        ]
    }

    const credentials = `${username}:${password}`;

    group('Update DO by ID', function () {
        const UpdateDoById = http.request('PUT', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders/${id}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Update DO by ID', UpdateDoById)
    });
}