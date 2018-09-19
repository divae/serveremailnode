var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'thisissmysubdontwork' }, function(err, tunnel) {
  console.log('LT running')
});