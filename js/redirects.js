const redirects = {
  '/plan-a-trip/family-friends/girlfriend-getaways/girlfriend-getaways/': {
    date: '2021-02-15',
    url: '/plan-a-trip/family-friends/girlfriend-getaways/girlfriend-getaways-ideas/'
  },
}

const currentUrl = window.location.pathname
  .toLowerCase()
  .replace('index.html', '');

console.log('CURRENT', currentUrl, redirects);

let redirectUrl = false;
if (redirects[currentUrl]) {
  redirectUrl = redirects[currentUrl].url;
} else if (currentUrl.indexOf('_') > -1) {
  redirectUrl = currentUrl.replace(/_/g, '-').replace(/\.html$/, '');
}

if (redirectUrl && redirectUrl.substr(0,1) == '/') {
  window.location = redirectUrl;
}

