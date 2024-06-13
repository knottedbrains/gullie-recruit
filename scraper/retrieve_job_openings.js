const puppeteer = require('puppeteer');
const { scrapeJobOpenings, saveJobToFirestore } = require('./job_scraper');

const retrieveGoogleURLSforSearchTerm = async (searchTerm) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const query = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
  await page.goto(query, { waitUntil: 'networkidle2' });

  const urls = await page.evaluate(() => {
    const results = Array.from(document.querySelectorAll('a'));
    return results
      .map((a) => a.href)
      .filter((href) => href.startsWith('https://apply.workable.com/'));
  });

  await browser.close();
  return urls;
};

const main = async () => {
  const searchTerm = 'companies with relocation opportunities and visa sponsorship site:https://apply.workable.com/*';
  const companyURLs = await retrieveGoogleURLSforSearchTerm(searchTerm);

  if (companyURLs.length === 0) {
    console.log('No company URLs found.');
    return;
  }

  for (const website of companyURLs) {
    console.log(`Scraping job openings from ${website}...`);
    const jobOpenings = await scrapeJobOpenings(website);
    console.log(`Found ${jobOpenings.length} job openings.`);
    for (const job of jobOpenings) {
      console.log(`Title: ${job.title}, URL: ${job.url}`);
      await saveJobToFirestore(job);
    }
    console.log('---------------------------------------------------------');
  }
};

main().catch(console.error);
