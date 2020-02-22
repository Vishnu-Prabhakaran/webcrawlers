var robotParser = require('robots-parser');
const request = require('request-promise');

const robotsUrl = 'https://textfiles.meulie.net/robots.txt';

async function getRbotsTxt(robotsUrl) {
  const robotTxt = await request.get(robotsUrl);
  const robots = robotParser(robotsUrl, robotTxt);
  //return robotTxt;
  console.log(
    robots.isAllowed('https://textfiles.meulie.net/100/', 'YourNameBot') // do not exist - no rule
  );
  console.log(
    robots.isAllowed('https://textfiles.meulie.net/100/', 'rogerbot') // exist - no crawling
  );
  console.log(robots.getCrawlDelay());
}

getRbotsTxt(robotsUrl);

// var robots = robotsParser(
//   'http://example.com/robots.txt',
//   [
//     'User-agent: *',
//     'Disallow: /dir/',
//     'Disallow: /test.html',
//     'Allow: /dir/test.html',
//     'Allow: /test.html',
//     'Crawl-delay: 1',
//     'Sitemap: http://example.com/sitemap.xml',
//     'Host: example.com'
//   ].join('\n')
// );

// console.log(robots.isAllowed('http://example.com/test.html', 'Sams-bot/1.0')); //false
// robots.isAllowed('http://example.com/dir/test.html', 'Sams-bot/1.0'); // true
// robots.isDisallowed('http://example.com/dir/test2.html', 'Sams-Bot/1.0'); // true
// robots.getCrawlDelay('Sams-bot/1.0'); // 1 sec
// robots.getSitemaps(); // http://example.com/sitemap.xml
// //robots.getPreferredHost(); //example.com
