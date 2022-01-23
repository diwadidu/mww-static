const redirects = {
  '/plan-a-trip/oinkmen-forever/': {
    date: '2021-12-31',
    url: '/plan-a-trip/nature/waterfalls/black-river-michigan'
  }
}

const currentUrl = window.location.pathname
  .toLowerCase()
  .replace('index.html', '');

console.log('CURRENT', currentUrl, redirects);

let redirectUrl = false;
if (redirects[currentUrl]) {
  redirectUrl = redirects[currentUrl].url;
} else if (currentUrl.indexOf('_') > -1) {
  redirectUrl = currentUrl.replace(/_/g, '-');
}

if (redirectUrl && redirectUrl.substr(0,1) == '/') {
  window.location = redirectUrl;
}

