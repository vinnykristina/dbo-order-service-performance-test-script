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

    
    group('Delete Do Detail By Id', function () {
        const deleteDoDetailById = http.request('DELETE', 'https://moonlay-api.dbo.dev/order-srv/delivery-orders/details/${deliveryOrderDetailId3}', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Delete Do Detail By Id', deleteDoDetailByIdd)
    });

}