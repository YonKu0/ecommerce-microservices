import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Have a question or need help? Fill out the form below or email us at 
        <a href="mailto:support@shophub.com" className="text-blue-600 underline ml-1">support@shophub.com</a>
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 w-full border rounded px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 w-full border rounded px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="mt-1 w-full border rounded px-3 py-2" rows={4} placeholder="Your message..." />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
