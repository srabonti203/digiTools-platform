import React from "react";
import insta from "../../assets/Instagram.png";
import fb from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";

const Footer = () => {
  return (
    <div className="w-10/12 mx-auto p-4 space-y-4 bg-[#101727]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">DigiTools</h2>
          <p className="text-white">
            Premium digital tools for creators,
            <br /> professionals, and businesses. Work smarter <br /> with our
            suite of powerful tools.
          </p>
        </div>
        <div>
          <h3 className="text-lg text-white">Product</h3>
          <ul className="list-none text-white">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-white">Company</h3>
          <ul className="list-none text-white">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-white">Resources</h3>
          <ul className="list-none text-white">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-white">Social Links</h3>
          <div className="flex items-center justify-between gap-3">
            <div>
              <img src={insta} alt="" />
            </div>
            <div>
              <img src={fb} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-gray-600" />

      <div className="flex items-center justify-between ">
        <p className="text-white">© 2026 Digitools. All rights reserved.</p>
        <div className="flex items-center justify-between gap-6 text-white">
          <p>Privacy</p>
          <p>terms of service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
