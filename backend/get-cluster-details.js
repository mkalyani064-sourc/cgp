const dns = require('dns');
const resolver = new dns.Resolver();
resolver.setServers(['8.8.8.8']);

resolver.resolveSrv('_mongodb._tcp.cluster0.plipo0l.mongodb.net', (err, addresses) => {
    if (err) {
        console.error('Error resolving SRV:', err);
        return;
    }
    console.log('SRV Addresses:');
    console.log(JSON.stringify(addresses, null, 2));

    resolver.resolveTxt('cluster0.plipo0l.mongodb.net', (err, txt) => {
        if (err) {
            console.error('Error resolving TXT:', err);
            return;
        }
        console.log('TXT Records:');
        console.log(JSON.stringify(txt, null, 2));
    });
});
