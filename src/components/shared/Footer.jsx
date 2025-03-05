import React from "react";
import {footerLinks} from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: <span className="underline text-blue"> Find and Apple Store</span> or
            <span className="underline text-blue"> other retailer</span> near you.
          </p>
          <p className="font-semibold text-gray text-xs">Or call 000800-040-1966 for support.</p>
        </div>
        <div className="bg-neutral-700 my-5 h-px w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copyright @2025 Apple Inc. All rights reserved.</p>
          <div className="font-semibold text-gray text-xs divide-x-2 ">
            {footerLinks.map((item, index) => (
              <span className="px-2 first:pl-0 last:pr-0" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
