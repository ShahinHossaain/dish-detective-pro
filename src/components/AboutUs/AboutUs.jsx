import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ipsum
        ex. Donec id est vel tellus bibendum posuere. Sed sed purus ac orci
        vestibulum consectetur vel a ante. Suspendisse potenti. Vestibulum
        aliquam nulla sed velit suscipit bibendum. Etiam sit amet erat id ex
        lobortis vestibulum at at urna.
      </p>
      <h3 className="text-lg font-bold mb-2">Our Mission</h3>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ipsum
        ex. Donec id est vel tellus bibendum posuere. Sed sed purus ac orci
        vestibulum consectetur vel a ante. Suspendisse potenti. Vestibulum
        aliquam nulla sed velit suscipit bibendum. Etiam sit amet erat id ex
        lobortis vestibulum at at urna.
      </p>
      <h3 className="text-lg font-bold mb-2">Our Team</h3>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-gray-600">Jane Doe - CEO</li>
        <li className="text-gray-600">John Smith - CFO</li>
        <li className="text-gray-600">Sara Johnson - CMO</li>
      </ul>
      <h3 className="text-lg font-bold mb-2">Contact Us</h3>
      <p className="text-gray-600">
        Email: info@example.com
        <br />
        Phone: 555-555-5555
        <br />
        Address: 123 Main St, Anytown USA
      </p>
    </div>
  );
};

export default AboutUs;
