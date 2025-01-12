import React, { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    propertyInfo: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        onClose(); // Close the modal after successful submission
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Get a Quote</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              required
            />
            <textarea
              name="propertyInfo"
              placeholder="Property Information"
              value={formData.propertyInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-red-500 text-red-500 hover:text-red-600 px-4 py-2 rounded ml-4"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
  );
} 