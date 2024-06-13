const puppeteer = require('puppeteer');
const firebase = require('firebase/compat/app');
require('firebase/compat/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const scrapeJobOpenings = async (website) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(website, { waitUntil: 'networkidle2' });

  const jobOpenings = await page.evaluate(() => {
    const jobList = [];
    const jobSelectors = ['a[data-ui="job-title"]', 'a[href*="/j/"]', 'div.job-listing > a'];

    jobSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const title = element.innerText.trim();
        const url = element.href;
        if (title && url) {
          jobList.push({ title, url });
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
