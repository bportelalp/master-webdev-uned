
const dns = require("dns");
const domain = "www.google.com";

dns.lookup(domain, 4, function(error, address, family) {
  dns.reverse(address, function(error, domains) {
    console.log(domain + " -> " + address + " -> " + domains);
  });
});
