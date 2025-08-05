"use client";

import Link from 'next/link';
import React, { useState } from 'react';


const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/code-goes-here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setLoading(false);
        setIsFormSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className='text-white container mx-auto mb-8 min-h-screen lg:text-xl'>
        <a href='/' className='flex justify-center items-center'><button type="button" className="text-3xl md:text-6xl bg-gradient-to-r from-black to-white gradient-text rounded-md">Bringing Your Vision to Life</button></a>
        <p className="flex flex-wrap my-8 p-4 w-[80%] mx-auto">
          I build custom websites that not only look great but also perform beautifully. With a strong focus on clean code, intuitive UI/UX, and fast load times, I help businesses bring their ideas to life and grow their online presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-[5%]">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFC107]">Transform Your Online Presence</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Custom websites designed to help small businesses and startups thrive</li>
              <li>Fast, scalable web apps built with Next.js and modern tools</li>
              <li>Quick turnaround times without cutting corners</li>
              <li>Professional results at affordable rates</li>
              <li>Solutions tailored to the needs of local businesses and entrepreneurs</li>
            </ul>
            <p className="mb-4">
              My goal is to create digital experiences that feel just right—for you and your audience. Whether you're launching a new product or refreshing your brand, I’ll make sure your website works hard for your business.
            </p>
            <p className="mb-4">
              Ready to get started? Reach out to chat about your goals and see how I can help. Whether you're looking for a bold redesign, better performance, or guidance on growing your presence online, I’m here to support you every step of the way.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4CAF50]">Common Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD7BE] to-[#FFE2CC]">What types of websites do you develop?</h3>
                <p>I specialize in custom sites for small businesses, startups, and creatives—anything from landing pages to fully-featured web apps.</p>
              </div>
              <div>
                <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#B2FFFC] to-[#C9E4CA]">How long does a typical project take?</h3>
                <p>Most projects take 1–2 weeks, depending on complexity and content. I work fast without sacrificing quality.</p>
              </div>
              <div>
                <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F5F5DC] to-[#C9C4B5]">Do you offer ongoing maintenance and support?</h3>
                <p>Yes! I offer flexible maintenance plans and support to keep your site running smoothly long after launch.</p>
              </div>
              <div>
                <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#C7B8EA] to-[#E1D8F7]">Can I see some examples of your work?</h3>
                <p>Absolutely! Visit my <Link href="https:github.com/scorchinghot" className="cursor-pointer bg-blue-300 bg-clip-text text-transparent">GitHut</Link> to explore recent projects.</p>
              </div>
              <div>
                <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#BCE3C5] to-[#C9E4CA]">What if I need help with content creation or digital marketing?</h3>
                <p>While I focus on development and design, I collaborate with talented marketers and content creators—and can connect you with the right people.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-16 max-w-xl mx-auto">
          The contact form can work just fine—but I got bored and pulled a key piece of logic. Honestly, I prefer keeping things simple now. Forms feel a bit outdated anyway.  I'm keeping it here because, well... it looks great. If you actually want to get in touch, just shoot me an email!
        </p>
        <div className="justify-evenly flex flex-wrap mt-16 mb-8 mr-16 ml-8">
          <div className="flex flex-row justify-start items-center bg-blue-600 p-4 rounded-full mb-4">
            <a href="mailto:forwork2k24@gmail.com" className="">forwork2k24@gmail.com</a>
          </div>
        </div>
        <div className='bg-white text-base border shadow-md text-black w-[60%] h-3/5 flex justify-center items-center rounded-2xl mx-auto mt-16 md:p-4 text-center' id="contact">
          {!isFormSubmitted ? (
            <div className="container flex flex-col justify-center items-center mt-auto">
              <h1 className='font-bold lg:text-5xl mt-6'>Get in touch</h1>
              <div className="md:justify-evenly md:flex lg:flex-wrap lg:space-x-20 mb-10 mt-10 text-black">
                <div className="flex flex-row justify-start items-center">
                  <input className="justify-center mb-4 mr-auto h-16 bg-gray-100 rounded-lg shadow-lg text-center" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                </div>
                <div className="flex flex-row justify-start items-center">
                  <input className="justify-center mb-4 mr-auto h-16 bg-gray-100 rounded-lg shadow-lg text-center" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
              </div>
              <div className="flex container w-[80%] h-40 mb-10 text-black">
                <textarea
                  className="flex-grow bg-gray-100 rounded-lg shadow-lg text-center"
                  placeholder="Your Message"
                  value={message || ''}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="text-2xl text-white bg-black rounded-lg p-4 mb-4 hover:bg-blue-950 focus:outline-none focus:ring focus:ring-purple-300 font-semibold shadow-md active:bg-gradient-to-r from-purple-500 to-blue-500 transition duration-1000 ease-in-out transform"
               onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
          ) : (
            <div>
              <h3 className="flex flex-col justify-center items-center">
                Thank you for getting in touch!
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;