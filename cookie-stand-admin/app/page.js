'use client'
import Link from "next/link";

import Image from 'next/image';
import React, { useState } from 'react';
import useSWR, {mutate} from 'swr';
import CityList from './cookie/CityList';
export default function Home() {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    minimum_customers_per_hour: '',
    maximum_customers_per_hour: '',
    average_cookies_per_sale: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://salmon20231005130044.azurewebsites.net/api/Cookiestand', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      mutate("https://salmon20231005130044.azurewebsites.net/api/Cookiestand");
      if (response.ok) {
        // Request was successful, you can handle the response here
        console.log('POST request was successful');
      } else {
        // Handle errors if the request was not successful
        console.error('POST request failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('An error occurred', error);
    }
  };

  return (
    <main>
      <div className="bg-green-500 p-6 mb-12 mt-12 text-black">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <FormField label="Location" id="location" placeholder="Enter Location" onChange={handleChange} />
          <FormField label="Description" id="description" placeholder="Enter Description" onChange={handleChange} />
          <FormField
            label="Minimum Customers Per Hour"
            id="minimum_customers_per_hour"
            placeholder="Enter Minimum Customers Per Hour"
            type="number"
            onChange={handleChange}
          />
          <FormField
            label="Maximum Customers Per Hour"
            id="maximum_customers_per_hour"
            placeholder="Enter Maximum Customers Per Hour"
            type="number"
            onChange={handleChange}
          />
          <FormField
            label="Average Cookies Per Sale"
            id="average_cookies_per_sale"
            placeholder="Enter Average Cookies Per Sale"
            type="number"
            onChange={handleChange}
          />
          <SubmitButton />
        </form>
      </div>
      <div className="flex justify-center"> {/* Center align the Link */}
    <Link href={`/cookie`} className="text-blue-500">See all</Link>
  </div>
      {/* <CityList /> */}
    </main>
  );
}

function FormField({ label, id, placeholder, type = "text", onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-white block mb-2">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full p-2 rounded-md"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="bg-white text-green-500 hover:bg-green-400 rounded-md py-2 px-4 w-full"
    >
      Submit
    </button>
  );
}
