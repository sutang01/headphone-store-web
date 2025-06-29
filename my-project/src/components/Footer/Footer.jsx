import React from "react";
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaGoogle,
} from "react-icons/fa";
import Cards from "../../assets/credit-cards.webp";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* ______ Company Details section ______ */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm amx-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                reiciendis a modi alias dolorum soluta.
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +86 123 4567 8901
                </p>
                <p className="flex items-center gap-2">
                  <FaMapLocation />
                  SZ, GD, China
                </p>
              </div>
            </motion.div>
            {/* ______ Footer Links section ______ */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className=" space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className=" space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* ______ Social Links section ______ */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex gap-3 items-center">
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={Cards} alt="" className="w-[80%]" />
              </div>
            </motion.div>
          </div>
          {/* ______ Copyright section ______ */}
          <p className="text-white text-center mt-8 border-t-2 pt-8">
            Copyright © 2025. All Rights Reserved || Su Tang 
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
