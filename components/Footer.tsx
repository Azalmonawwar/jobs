import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-800">

          {/* Column 1 - Logo & Description */}
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-black">PLACEMENT</span>
              <span className="text-orange-500">PORTAL</span>
            </h1>
            <p className="mt-4 text-blue-600">Simplifying placements for colleges and students.</p>
          </div>

          {/* Column 2 - Helpful Links */}
          <div>
            <h2 className="font-bold text-gray-700 mb-3">HELPFUL LINKS</h2>
            <ul className="space-y-2 text-blue-600">
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h2 className="font-bold text-gray-700 mb-3">GET IN TOUCH</h2>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-center gap-2"><Image height={24} width={24} src={"./logo-facebook.svg"} alt="logo=facebook" /> support@placementportal.com</li>
              {/* <li className="flex items-center gap-2"><FaEnvelope /> info@placementportal.com</li> */}
              {/* <li className="flex items-center gap-2"><FaUsersCog /> Support Team: 9am-6pm</li>  */}
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h2 className="font-bold text-gray-700 mb-3">CONNECT WITH US</h2>
            <ul className="space-y-2 text-blue-600">
              {/* <li className="flex items-center gap-2"><FaFacebookF /> <a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li className="flex items-center gap-2"><FaTwitter /> <a href="https://twitter.com" className="hover:underline">Twitter</a></li>
              <li className="flex items-center gap-2"><FaYoutube /> <a href="https://youtube.com" className="hover:underline">YouTube</a></li>
              <li className="flex items-center gap-2"><FaInstagram /> <a href="https://instagram.com" className="hover:underline">Instagram</a></li>
              <li className="flex items-center gap-2"><FaLinkedin /> <a href="https://linkedin.com" className="hover:underline">LinkedIn</a></li> */}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-600 mt-10">
          Copyright © 2025 Placement Portal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;