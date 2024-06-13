// src/components/LeadCaptureForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './ui/Input';
import Button from './ui/Button';
import axios from 'axios';

const LeadCaptureForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: '',
    linkedinUrl: '',
    email: '',
    nationality: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_GEMINI_API_ENDPOINT', formData);
      // Handle the response data here
      navigate('/search-results');
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        className="flex-1 px-4 py-2 rounded-md text-gray-900"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <Input
        type="url"
        name="linkedinUrl"
        placeholder="Linkedin URL"
        className="flex-1 px-4 py-2 rounded-md text-gray-900"
        value={formData.linkedinUrl}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 px-4 py-2 rounded-md text-gray-900"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="nationality"
        placeholder="Nationality"
        className="flex-1 px-4 py-2 rounded-md text-gray-900"
        value={formData.nationality}
        onChange={handleChange}
      />
      <Button type="submit" className="px-6 py-2 rounded-md bg-primary text-white hover:bg-secondary">
        Search
      </Button>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        By submitting your information, you agree to receive job opportunities and updates from Gullie. Your
        profile will be screened and assessed to ensure it is a good fit before we recommend any jobs. Your data
        will be used in accordance with our{" "}
        <Link to="#" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};

export default LeadCaptureForm;
