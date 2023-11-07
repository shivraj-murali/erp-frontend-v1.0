import React from "react";

const Footer = () => {
  return (
    <div className="Footer mx-auto my-0 bg-mainBg text-white">
      <h2 className="text-4xl font-playfair text-center pt-7 pb-5">
        More Info
      </h2>
      <div className="flex justify-normal justify-evenly">
        <div className="footerLogo ">
          <div>Employee Hub</div>
          <p className="py-4">
            Employee Hub is the simplest and most efficient ERP software{" "}
            <br /> that can be used and operated easily by anyone.
          </p>
        </div>

        <div className="h-auto bg-white w-0.5 mx-5 text-center"></div>

        <div className="aboutCompany ml-40">
          <h2 className="pb-2 text-lg font-semibold font-serif">
            Extra Details
          </h2>
          <ul>
            <li className="py-2 pr-8">
              <a
                href="https://github.com/shivraj-murali/erp-frontend-v1.0"
                className="pr-3"
              >
                Github Repo
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </span>
            </li>
            {/* <li className="py-2 pr-8">
              <a href="#" className="pr-3">
                Research Paper
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </span>
            </li>
            <li className="py-2 pr-8">
              <a href="#" className="pr-3">
                Figma Design
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </span>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="line w-auto h-0.5 bg-white my-2"></div>

      <p className="text-center font-sans pb-3 bg-mainBg">
        Made with 💖 by team i5
      </p>
    </div>
  );
};

export default Footer;
