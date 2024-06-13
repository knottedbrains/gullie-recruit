// src/pages/Profile.js
import React, { useState } from 'react';
import { EmailInput, LinkedInInput, ResumeUploader } from '../components/inputs';
import {
    LocationSelector,
    NationalitySelector,
    LanguageSelector,
    AvailabilitySelector,
    RolePreferenceSelector
} from '../components/selectors';
import { FavoriteButton, SubmitProfileButton } from '../components/ui/Button';

const Profile = () => {
    const [nationality, setNationality] = useState('');
    const [location, setLocation] = useState([]);
    const [language, setLanguage] = useState([]);
    const [availability, setAvailability] = useState([]);
    const [rolePreference, setRolePreference] = useState([]);

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
                <div className="space-y-4">
                    <EmailInput value="" onChange={() => {}} />
                    <LinkedInInput value="" onChange={() => {}} />
                    <ResumeUploader />
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-4">Preferences</h1>
                <div className="space-y-4">
                    <LocationSelector
                        locations={location}
                        setLocations={setLocation}
                        title="Locations"
                        placeholder="Select Locations"
                    />
                    <NationalitySelector
                        nationality={nationality}
                        setNationality={setNationality}
                        title="Nationality"
                        placeholder="Select Nationality"
                    />
                    <LanguageSelector
                        languages={language}
                        setLanguages={setLanguage}
                        title="Languages"
                        placeholder="Select Languages"
                    />
                    <AvailabilitySelector
                        availability={availability}
                        setAvailability={setAvailability}
                        title="Availability"
                        placeholder="Select Availability"
                    />
                    <RolePreferenceSelector
                        roles={rolePreference}
                        setRoles={setRolePreference}
                        title="Role Preference"
                        placeholder="Select Roles"
                    />
                </div>
            </div>
            <div className="flex space-x-4 mt-4">
                <FavoriteButton />
                <SubmitProfileButton />
            </div>
        </div>
    );
};

export default Profile;
