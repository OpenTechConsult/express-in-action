const url = require('node:url');

const parsedUrl = new URL('http://user:pass@www.example.com/profile?name=barry');

console.log(parsedUrl.href);
console.log(parsedUrl.origin);
console.log(parsedUrl.protocol);
console.log(parsedUrl.username);
console.log(parsedUrl.password);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)


