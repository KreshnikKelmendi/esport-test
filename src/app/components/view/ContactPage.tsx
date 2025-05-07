import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const ContactPage = () => {
  return (
    <>
    <Header />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-britanica text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 max-w-xl mx-auto font-britanica-regular text-lg text-gray-500">
              Reach out to our team through these channels
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Email Section */}
                <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-xl">
                  <div className="bg-white p-4 rounded-full shadow-md mb-4">
                    <FiMail className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-britanica text-gray-900 mb-2">Mail Us</h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:marketing@fesk.gg"
                      className="text-base font-britanica-regular text-gray-700 hover:text-indigo-800 transition-colors block"
                    >
                      marketing@fesk.gg
                    </a>
                    <a
                      href="mailto:info@fesk.gg"
                      className="text-base font-britanica-regular text-gray-700 hover:text-indigo-800 transition-colors block"
                    >
                      info@fesk.gg
                    </a>
                  </div>
                </div>

                {/* Location Section */}
                <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-xl">
                  <div className="bg-white p-4 rounded-full shadow-md mb-4">
                    <FiMapPin className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-britanica text-gray-900 mb-2">Location</h3>
                  <div className="text-base text-gray-700">
                    <p className="font-britanica mb-1">Visit us</p>
                    <address className="not-italic font-britanica-regular">
                      Rr. Eqrem Çabej 31,<br />
                      Prishtinë,<br />
                      10000 Republika e Kosovës
                    </address>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-10 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.797041421164!2d21.1524903154669!3d42.66738187916748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ec0d54062c1%3A0x6a346b1e76b33b5b!2sEqrem%20%C3%87abej%2C%20Prishtina!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;