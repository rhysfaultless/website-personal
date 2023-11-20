import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ThemedImage from '@theme/ThemedImage';

const Contact = () => {
  const {siteConfig, siteMetadata} = useDocusaurusContext();
  return (
    <Layout
      title={`Rhys Faultless`}
      description="Portfolio website for Rhys Faultless"
    >
      <main>
        <div className="container text--center">

            <div className="row row--no-gutters margin-top--xl margin-bottom--lg">
            
              <a href="https://maps.app.goo.gl/CRTYQWMvJres5XGx7" target="_blank" className="col">
                <ThemedImage
                  alt="Google Maps, Waterloo, Canada"
                  width={60}
                  height={60}
                  sources={{
                    light: '/img/streamline/location-pin-3-black.svg',
                    dark: '/img/streamline/location-pin-3-white.svg',
                  }}
                />
                <p>Waterloo, Canada</p>
                <br/>
              </a>
              <a href="mailto:hello@rhysfaultless.com" className="col">
                <ThemedImage
                  alt="Google Maps, Waterloo, Canada"
                  width={60}
                  height={60}
                  sources={{
                    light: '/img/streamline/mail-send-envelope-black.svg',
                    dark: '/img/streamline/mail-send-envelope-white.svg',
                  }}
                />
                <p>hello@rhysfaultless.com</p>
                <br/>
              </a>
              <a href="https://www.linkedin.com/in/rhysfaultless" target="_blank" className="col">
                <ThemedImage
                  alt="LinkedIn, @rhysfaultless"
                  width={60}
                  height={60}
                  sources={{
                    light: '/img/streamline/linkedin-logo-black.svg',
                    dark: '/img/streamline/linkedin-logo-white.svg',
                  }}
                />
                <p>@rhysfaultless</p>
                <br/>
              </a>
              <a href="https://github.com/rhysfaultless" target="_blank" className="col">
                <ThemedImage
                  alt="GitHub: @rhysfaultless"
                  width={60}
                  height={60}
                  sources={{
                    light: '/img/streamline/github-logo-2-black.svg',
                    dark: '/img/streamline/github-logo-2-white.svg',
                  }}
                />
                <p>Personal, @rhysfaultless</p>
                <br/>
              </a>
              <a href="https://github.com/rhysfaultless-cpr" target="_blank" className="col">
                <ThemedImage
                  alt="GitHub: @rhysfaultless-cpr"
                  width={60}
                  height={60}
                  sources={{
                    light: '/img/streamline/github-logo-2-black.svg',
                    dark: '/img/streamline/github-logo-2-white.svg',
                  }}
                />
                <p>Work, @rhysfaultess-cpr</p>
                <br/>
              </a>

          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
