import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // To track the form submission status

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending'); // Indicate that the email is being sent

    emailjs
      .sendForm('service_6rchv3c', 'template_aj6f1x5', form.current, {
        publicKey: 'tRp_Z6LJHXc3t7VxT',
      })
      .then(
        () => {
          setStatus('success'); // Set success status after a successful send
        },
        (error) => {
          setStatus('failed'); // Set failure status if the email fails
          console.error('Error sending email:', error.text);
        },
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-semibold text-yellow-400 mb-8">Contact Us</h1>

      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="user_name" className="block text-lg font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="mt-2 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-lg font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="mt-2 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-300">
              Subjcet
            </label>
            <textarea
              name="subject"
              id="subject"
              required
              rows="4"
              className="mt-2 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>




          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              className="mt-2 w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 mt-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <div className="mt-6 text-center text-green-400">
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}
        {status === 'failed' && (
          <div className="mt-6 text-center text-red-400">
            <p>Sorry, something went wrong. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};
