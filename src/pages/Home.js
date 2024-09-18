// src/pages/Home.js
import React, { useState } from 'react';
import JobList from '../components/JobList';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import SearchInput from '../components/inputs/SearchInput'; // Import SearchInput
import LinkedInInput from '../components/inputs/LinkedInInput'; // Import LinkedInInput
import EmailInput from '../components/inputs/EmailInput'; // Import EmailInput
import { SearchIcon, BriefcaseIcon, HomeIcon, ArrowRightIcon } from '../components/icons';


const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [linkedinValue, setLinkedInValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  return (
      <div className="flex flex-col min-h-screen">
          <header className="w-full bg-white py-4 shadow-sm">
              {/* Your header content */}
          </header>
          <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
              <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#EF753E]">
                          Move to your dream city with Gullie
                      </h1>
                      <p className="max-w-[600px] text-lg text-gray-500">
                          Discover the world's most ambitious and relocation-friendly companies. Take your career to the next level (and the next city!)
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                          <SearchInput value={searchValue} onChange={setSearchValue} className="flex-1" />
                          <LinkedInInput value={linkedinValue} onChange={setLinkedInValue} className="flex-1" />
                          <EmailInput value={emailValue} onChange={setEmailValue} className="flex-1" />
                          <Button className="px-6 py-2 rounded-md bg-[#EF753E] text-white hover:bg-[#e66a37] h-full">
                              Search
                          </Button>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                          By submitting your information, you agree to receive job opportunities and updates from Gullie. Your
                          profile will be screened and assessed to ensure it is a good fit before we recommend any jobs. Your data
                          will be used in accordance with our{" "}
                          <Link to="#" className="underline">
                              Privacy Policy
                          </Link>
                          .
                      </p>
                  </div>
                  <img src="/hero.png" width={400} height={400} alt="Hero" className="mx-auto rounded-lg shadow-lg" />
              </div>
          </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">How Gullie Works</h2>
          <p className="max-w-[600px] text-lg text-gray-500">
            Gullie is your partner in finding and securing your dream job in a new city. Here's how it works:
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="bg-[#EF753E] text-white rounded-full w-10 h-10 flex items-center justify-center">
                <SearchIcon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Search and Apply</h3>
            </div>
            <p className="text-gray-500">
              Start by inputting your LinkedIn profile and searching for job opportunities that match your skills and
              interests. Gullie will shortlist the best-fit opportunities for you to apply to.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="bg-[#EF753E] text-white rounded-full w-10 h-10 flex items-center justify-center">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Secure the Opportunity</h3>
            </div>
            <p className="text-gray-500">
              Once you've applied and secured an opportunity, Gullie will work with you and the employer to ensure a
              smooth relocation process. We'll handle the logistics and support you every step of the way.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="bg-[#EF753E] text-white rounded-full w-10 h-10 flex items-center justify-center">
                <HomeIcon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Settle in Your New Home</h3>
            </div>
            <p className="text-gray-500">
              Gullie will provide personalized support to help you and your family settle into your new city. From
              finding housing to navigating the local community, we'll ensure you have a seamless transition.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Hottest Jobs</h2>
          <p className="max-w-[600px] text-lg text-gray-500">
            Check out the latest job opportunities from top companies offering relocation assistance. All applicants
            are pre-vetted to ensure they are a good fit.
          </p>
        </div>
        <JobList />
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#EF753E] to-[#EF753E]">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4 text-white">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Attract Top Talent with Gullie
          </h2>
          <p className="max-w-[600px] text-lg">
            Immigrant talent is the key to driving innovation and growth. Studies show that immigrant-founded
            companies are 60% more likely to go public and have 2.5x higher revenue than non-immigrant founded
            companies. Tap into this pool of highly skilled and motivated individuals with Gullie. All applicants are
            pre-vetted to ensure they are a good fit for your company.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="px-6 py-2 rounded-md bg-white text-black hover:bg-gray-200">
              List Opportunities
            </Button>
            <Link
              to="#"
              className="inline-flex items-center px-6 py-2 rounded-md text-white hover:bg-white hover:text-gray-900"
            >
              How we support you with relocation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <img
          src="/gullieteam.jpg"
          width={600}
          height={400}
          alt="Call to Action"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  </div>
);
}
export default Home;
