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
        "file": "https://lambda-upload-srv.s3-ap-southeast-1.amazonaws.com/order-service/sales-orders/5d227d64-dbac-44d0-8b89-7ddec8647f4d.xlsx"
    }

    const dataSOSJ = {
        "file": "https://lambda-upload-srv.s3-ap-southeast-1.amazonaws.com/order-service/sosj/fb711eff-e7d3-493e-ad30-386691638453.csv"
    }

    group('Upload SO With CSV', function () {
        const uploadSOWithCSV = http.request('POST', 'https://api.dbo.dev/order-srv/upload-sales-orders', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Upload SO With CSV', uploadSOWithCSV)
    });

    group('Upload SOSJ With CSV', function () {
        const uploadSOSJWithCSV = http.request('POST', 'https://api.dbo.dev/order-srv/upload-sosj', JSON.stringify(dataSOSJ), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
        })
        console.log('Upload SOSJ With CSV', uploadSOSJWithCSV)
    });


}
