const dns = require('dns').promises;

async function testDNS() {
    const srvRecord = '_mongodb._tcp.cluster0.plipo0l.mongodb.net';
    console.log(`Searching for SRV record: ${srvRecord}`);

    try {
        const addresses = await dns.resolveSrv(srvRecord);
        console.log('Success! Found SRV addresses:');
        console.log(JSON.stringify(addresses, null, 2));
    } catch (err) {
        console.error('DNS Error:', err.message);
        console.log('\nTIP: Your network or DNS provider is blocking MongoDB SRV records.');
        console.log('To fix this:');
        console.log('1. Go to your MongoDB Atlas dashboard.');
        console.log('2. Click "Connect" -> "Drivers".');
        console.log('3. Select Node.js version "2.2.12 or later".');
        console.log('4. Copy that different looking connection string and use it in your .env file.');
    }
}

testDNS();
