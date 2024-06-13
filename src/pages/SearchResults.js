// src/pages/SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton, SubmitProfileButton } from '../components/ui/Button';
import { BriefcaseIcon, DollarSignIcon, GlobeIcon, MapPinIcon, UsersIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/icons';
import UserHeader from '../components/UserHeader';

const SearchResults = () => (
  <div className="flex flex-col min-h-[100dvh]">
    <UserHeader />
    <section className="w-full py-6 md:py-8 lg:py-10 xl:py-12 bg-[#EF753E] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Top 10 opportunities we picked for you</h2>
          <div className="flex items-center gap-2">
            <ChevronLeftIcon className="h-5 w-5 text-white" />
            <div className="flex items-center gap-2 text-white">
              <span>1</span>
              <span>/</span>
              <span>10</span>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow-md p-6 text-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold">Acme Inc</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Revolutionizing the way people interact with the web.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-5 text-gray-500" />
                <span>Software Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon className="h-5 w-5 text-gray-500" />
                <span>$100,000 - $150,000</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon className="h-5 w-5 text-gray-500" />
                <span>Senior Level</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-500" />
                <span>Hybrid/Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-gray-500" />
                <span>500+ employees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-6 md:py-8 lg:py-10 xl:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Acme Inc</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Revolutionizing the way people interact with the web.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Funding</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Acme Inc is a Series B startup, having raised $50 million in funding to date.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Company Mission</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our mission is to revolutionize the way people interact with the web, making it more intuitive,
                  efficient, and accessible for everyone.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Company Values</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Innovation: We constantly push the boundaries of what's possible.</li>
                  <li>Collaboration: We believe in the power of teamwork and cross-functional collaboration.</li>
                  <li>Integrity: We are committed to honesty, transparency, and ethical business practices.</li>
                  <li>Diversity: We celebrate diversity and foster an inclusive work environment.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Visa Sponsorship</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We are able to sponsor work visas for qualified candidates.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Company Benefits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Competitive salary and equity</li>
                  <li>Comprehensive health, dental, and vision insurance</li>
                  <li>401(k) retirement plan with employer matching</li>
                  <li>Generous paid time off and sick leave</li>
                  <li>Professional development and learning opportunities</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Founders & People</h3>
                <div className="flex items-center gap-4">
                  <img src="/placeholder.svg" width={48} height={48} alt="Founder" className="rounded-full" />
                  <div>
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-gray-500 dark:text-gray-400">Co-founder and CEO</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <img src="/placeholder.svg" width={48} height={48} alt="Founder" className="rounded-full" />
                  <div>
                    <h4 className="text-lg font-semibold">Jane Smith</h4>
                    <p className="text-gray-500 dark:text-gray-400">Co-founder and CTO</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Office Location</h3>
                <div className="flex items-center gap-4">
                  <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400">123 Main Street, San Francisco, CA 94105</p>
                </div>
                <div className="mt-4">
                  <div />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Articles about the company</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <img src="/placeholder.svg" width={80} height={60} alt="Article thumbnail" className="rounded-md" />
                    <div>
                      <h4 className="text-lg font-semibold">Acme Inc Raises $50 Million in Series B Funding</h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        The funding will be used to accelerate product development and expand the team.
                      </p>
                      <Link to="#" className="text-[#EF753E] hover:underline">
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <img src="/placeholder.svg" width={80} height={60} alt="Article thumbnail" className="rounded-md" />
                    <div>
                      <h4 className="text-lg font-semibold">Acme Inc Wins Best Startup of the Year Award</h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        The company was recognized for its innovative approach and positive impact on the industry.
                      </p>
                      <Link to="#" className="text-[#EF753E] hover:underline">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow-md p-6 text-gray-900">
          <h2 className="text-2xl font-bold mb-4">Software Engineer</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">What the job involves</h3>
              <p className="text-gray-500 dark:text-gray-400">
                As a Software Engineer, you will be responsible for building and maintaining our core web application.
                You will collaborate with cross-functional teams to deliver new features and improvements, ensuring a
                seamless user experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Who you are</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proficient in JavaScript, React, and modern web development frameworks</li>
                <li>Experience in building scalable and maintainable web applications</li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Excellent communication and collaboration abilities</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <FavoriteButton />
              <SubmitProfileButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SearchResults;
