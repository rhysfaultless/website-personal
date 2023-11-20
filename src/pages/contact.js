import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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
                <img
                  alt="Map Pin, Waterloo, Canada"
                  width={60}
                  height={60}
                  src="/img/feather/map-pin.svg"
                  loading="lazy"
                />
                <p>Waterloo, Canada</p>
                <br/>
              </a>
              <a href="mailto:hello@rhysfaultless.com" className="col">
                <img
                  alt="Email: hello@rhysfaultless.com"
                  width={60}
                  height={60}
                  src="/img/feather/mail.svg"
                  loading="lazy"
                />
                <p>hello@rhysfaultless.com</p>
                <br/>
              </a>
              <a href="https://www.linkedin.com/in/rhysfaultless" target="_blank" className="col">
                <img
                  alt="Linkedin: @rhysfaultless"
                  width={60}
                  height={60}
                  src="/img/feather/linkedin.svg"
                  loading="lazy"
                />
                <p>@rhysfaultless</p>
                <br/>
              </a>
              <a href="https://github.com/rhysfaultless" target="_blank" className="col">
                <img
                  alt="GitHub: @rhysfaultless-cpr"
                  width={60}
                  height={60}
                  src="/img/feather/github.svg"
                  loading="lazy"
                />
                <p>Personal, @rhysfaultless</p>
                <br/>
              </a>
              <a href="https://github.com/rhysfaultless-cpr" target="_blank" className="col">
                <img
                  alt="GitHub: @rhysfaultless-cpr"
                  width={60}
                  height={60}
                  src="/img/feather/github.svg"
                  loading="lazy"
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
