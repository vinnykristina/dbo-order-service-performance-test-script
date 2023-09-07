import http from 'k6/http';
import { group } from 'k6';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from 'k6/data';
import encoding from 'k6/encoding';

const username = 'dbo-order-srv';
const password = 'dbo-order-srv-passwd';

const csvData = new SharedArray('data.csv', function () {
  // Load CSV file and parse it using Papa Parse
  const csvFile = open('./data.csv');
  const parsedData = papaparse.parse(csvFile, { header: false }).data;
  return parsedData;
});

export default function () {
let data;
  for (const row of csvData) {
     data = row; // Replace 'id' with the actual column name from your CSV
      console.log(typeof row);
      console.log(row);

      
    // for (const id of csvData) {
    //     data = id
    //     // console.log(data.id);
    //     const _string = JSON.stringify(data);
    //     const _parse = JSON.parse(_string);
    //     console.log(_parse.id);
    }

    const credentials = `${username}:${password}`;
    const encodedCredentials = encoding.b64encode(credentials);

    group('Get DO Detail By DO ID', function () {

        const getDoDetailByDoId = http.request(`GET`, `https://moonlay-api.dbo.dev/order-srv/delivery-orders?id=${data}`, "", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedCredentials}`,
        },
    })
        console.log('Get DO Detail By DO ID', getDoDetailByDoId)
        console.log(getDoDetailByDoId.body)
    });
  }

