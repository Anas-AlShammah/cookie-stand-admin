import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-green-500 p-6 mb-12 mt-12">
      <form className="max-w-md mx-auto">
        <FormField label="Location" id="location" placeholder="Enter Location" />
        <FormField label="Description" id="description" placeholder="Enter Description" />
        <FormField
          label="Minimum Customers Per Hour"
          id="minimum_customers_per_hour"
          placeholder="Enter Minimum Customers Per Hour"
          type="number"
        />
        <FormField
          label="Maximum Customers Per Hour"
          id="maximum_customers_per_hour"
          placeholder="Enter Maximum Customers Per Hour"
          type="number"
        />
        <FormField
          label="Average Cookies Per Sale"
          id="average_cookies_per_sale"
          placeholder="Enter Average Cookies Per Sale"
          type="number"
        />
        <SubmitButton />
      </form>
    </div>
  );
}

function FormField({ label, id, placeholder, type = "text" }) {
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
