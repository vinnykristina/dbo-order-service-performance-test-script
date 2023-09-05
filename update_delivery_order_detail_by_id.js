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

        "qty": 0,
        "note": "send"

    }

    const credentials = `${username}:${password}`;

    group('Update DO Detail by ID', function () {
        const UpdateDoDetailById = http.request('PUT', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders/details/${do_detail_id}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
        })
        console.log('Update DO Detail by ID', UpdateDoDetailById)
    });
}