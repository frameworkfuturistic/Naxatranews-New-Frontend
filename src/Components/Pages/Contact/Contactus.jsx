import React from "react";
import NewsCategoriesIndex from "../NaxatraComponents/NewsCategories/NewsCategoriesIndex";
import Footerlayout from "../NaxatraComponents/Footer/Footerlayout";
const ContactPage = () => {
  return (
    <div className="m-10 ml-auto ">
      <NewsCategoriesIndex />
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-red-500">Contact Us</h1>

        {/* First Section: Image and Content */}
        <div className="flex flex-col mb-8 md:flex-row">
          <div className="mb-4 md:w-1/2 md:mb-0">
            <img
              src="images/5132485.jpg"
              alt="Image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="mb-4 text-xl font-bold">Contact Information</h2>
               {/*
            <p className="leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              diam nec lorem ultricies pharetra. Integer at elit eu felis
              rhoncus semper. Nulla facilisi.
            </p>
            */}
            <p className="leading-relaxed text-gray-700">
            2nd floor, Maa Lakshmi Plaza, Harmu Rd, near Sahjanand Chowk, Tongritoli, Ranchi, Jharkhand 834002
            </p>
            <p className="leading-relaxed text-gray-700">
              Email:info@naxatranewshindi.com
            </p>
            <p className="leading-relaxed text-gray-700">Phone: +91-8271776646</p>
          </div>
        </div>

        {/* Second Section: Contact Form */}
      

        {/* Third Section: Map */}
        <div>
          <h2 className="mb-4 text-xl font-bold">Our Location</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3662.8156038731127!2d85.30435727532397!3d23.35869417893961!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.3587207!2d85.30591679999999!4m5!1s0x39f4e16ac16bd2fd%3A0x69941b57a49eca4!2s2nd%20floor%2C%20NAXATRA%20NEWS%2C%20Maa%20Lakshmi%20Plaza%2C%20Harmu%20Rd%2C%20near%20Sahjanand%20Chowk%2C%20Ranchi%2C%20Jharkhand%20834002!3m2!1d23.358453299999997!2d85.30794379999999!5e0!3m2!1sen!2sin!4v1715858257832!5m2!1sen!2sin" width="100%" height="450" style={{border: '0'}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


        </div>
      </div>
      <Footerlayout />
    </div>
  );
};

export default ContactPage;
