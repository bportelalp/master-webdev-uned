
const dns = require("dns");
const domain = "google.com";

dns.lookup(domain, 4, function(error, address, family) {
  if (error) {
    console.error("DNS lookup failed with code " + error.code);
  } else {
    console.log(domain + " -> " + address);
  }
});