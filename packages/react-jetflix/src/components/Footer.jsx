import React from "react";
import "../index.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-contain">
          <div className="footer-region">
            <p> &copy; Country/Region: Perú</p>
          </div>
          <div className="footer-box">
            <div className="mr">
              <p>
                <a className="footer-link" href="#">
                  Support
                </a>
                <br />
              </p>
              <p>
                <a className="footer-link" href="">
                  Privacity and Cookies
                </a>
                <br />
              </p>
              <p>
                <a className="footer-link" href="#">
                  Sitemap
                </a>
                <br />
              </p>
              <p>
                <a className="footer-link" href="#">
                  Legal
                </a>
              </p>
            </div>
            <div className="mr">
              <p>
                <a className="footer-link" href="#">
                  Cancellation policity
                </a>{" "}
                <br />
              </p>
              <p>
                <a className="footer-link" href="#">
                  Health Warnings
                </a>{" "}
                <br />
              </p>
              <p>
                <a className="footer-link" href="#">
                  About Ratings
                </a>
                <br />
              </p>
            </div>
            <div className="mr">
              <p>
                <a className="footer-link" href="#">
                  Facebook
                </a>
                <br />
              </p>
              <p>
                <a className="footer-link" href="#">
                  Youtube
                </a>
                <br />
              </p>
              <p>
                <a className="footer-link" href="#">
                  Instagram
                </a>
                <br />
              </p>
              <p>
                <a className="footer-link" href="#">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
