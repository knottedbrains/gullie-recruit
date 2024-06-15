const puppeteer = require('puppeteer');
const { db } = require('../src/firebase');

const scrapeJobOpenings = async (website) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(website, { waitUntil: 'networkidle2' });

  const jobOpenings = await page.evaluate(() => {
    const jobList = [];
    const jobSelectors = [
      'a[data-ui="job-title"]',
      'a[href*="/j/"]',
      'div.job-listing > a',
    ];

    jobSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const title = element.innerText.trim();
        const url = element.href;
        const description = document.querySelector('.job-description')?.innerText || '';
        const benefits = document.querySelector('.job-benefits')?.innerText || '';
        const requirements = document.querySelector('.job-requirements')?.innerText || '';
        if (title && url) {
          jobList.push({ title, url, description, benefits, requirements });
        }
      });
    });

    return jobList;
  });

  await browser.close();
  return jobOpenings;
};

const saveJobToFirestore = async (job) => {
  try {
    await db.collection('jobs').add(job);
    console.log(`Job added to Firestore: ${job.title}`);
  } catch (error) {
    console.error('Error adding job to Firestore:', error);
  }
};

module.exports = { scrapeJobOpenings, saveJobToFirestore };
