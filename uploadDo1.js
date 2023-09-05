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

    

    group('Upload Do With Csv', function () {
        const credentials = `${username}:${password}`;
        const encodedCredentials = encoding.b64encode(credentials);
        const data = {
            "file": "${uploadfile}",
            "use_master": "true"
        }
        const uploadDoWithCsv = http.request('POST', 'https://moonlay-api.dbo.dev/order-srv/upload-delivery-orders', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Upload Do With Csv', uploadDoWithCsv)
    });

   
}