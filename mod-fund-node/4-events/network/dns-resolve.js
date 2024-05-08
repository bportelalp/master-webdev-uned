
const dns = require("dns");
const domain = "google.com";

dns.resolve(domain, "AAAA", function(error, addresses) {
  if (error) {
    console.error("DNS lookup ha fallado con el código " + error.code);
  } else {
    console.log(domain + " -> " + addresses);
  }
});
