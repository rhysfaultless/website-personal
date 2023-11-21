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
            <p>
              Robotics engineering requires a breadth of knowledge and processes for hardware and software design, manufacturing, and use.
              Though this is related to my experience with robotics design, much of the material will be relevent to other engineering industries.
            </p>
            <p>This site includes content related to:</p>
            <ol>
              <li>Configuration and Data Management</li>
              <li>Systems design (concept of operations, requirements, testing, interface definition, component selection)</li>
              <li>Mechanical design (metalic brackets, rotating machinery, materials)</li>
              <li>Electrical design (control cabinets, wiring diagrams, power budgets, data budgets, cable design, circuit design)</li>
              <li>Building robots (ordering custom parts, updating documentation, reassessing plans, tools)</li>
              <li>Networking and data busses (Ethernet IP and router configurations, USB-Serial adapters, USB-CAN adapters)</li>
              <li>Software tools for controlling hardware(ROS Robot Operating System, C and C++, Python, YAML)</li>
              <li>Web Development (javascript and React, javascript libraries, APIs, databases)</li>
              <li>Tools for these disciplines</li>
            </ol>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
