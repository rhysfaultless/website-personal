import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Index = () => {
  const {siteConfig, siteMetadata} = useDocusaurusContext();
  return (
    <Layout
      title={`Rhys Faultless`}
      description="Portfolio website for Rhys Faultless"
    >
      <main>
        <div className="container simple-page">
            <h1>About</h1>
            <p>
              I'm a Staff System Engineer at Clearpath Robotics.
              Most of my time is spent on system design, though I am also a generalist that performs tasks in disciplines like:
                mechanical, electrical, robot software, web development, and configuration management. 
              I use many repositories for storing data, like GitHub, Trello, Jira, Confluence, and Google Docs.
              I hope that this site will allow me to create an index of all this data, and make it sharable where possible.
              I will attempt to provide links and references for further reading,
                but overall this site should not be considered a complete knowledge base for the related subjects.
            </p>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
