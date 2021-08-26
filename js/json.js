console.log('connected');
const shop = {
    name: 'best buy',
    address: 'anywhere dhaka',
    profit: 15000,
    products: ['celling fan','daily cooking article','AC','varites items'],
    owener:{
        name: 'RFL',
        profession: 'business'
    },
    isExpensive: false
};
// convert to JSON
const shopStringified = JSON.stringify(shop);
//converted json back to normal object
const converted = JSON.parse(shopStringified);
console.log(shopStringified);
console.log(converted);


