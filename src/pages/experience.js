import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExperienceCard from "@site/docs_components/experienceCard";

const Experience = () => {
  const {siteConfig, siteMetadata} = useDocusaurusContext();
  return (
    <Layout
      title={`Rhys Faultless`}
      description="Portfolio website for Rhys Faultless"
    >
      <main>
        <div className="container experience-cards">
          <div className="column simple-page">
            <h1>Experience</h1>
            <ExperienceCard
              experienceYear="2023 - Present"
              experienceTitle="Staff System Engineer"
              experienceCompany="Clearpath Robotics"
              experienceHyperlink="https://clearpathrobotics.com/"
              experienceDescription={[
                "None of my current projects are in the public domain, so I cannot mention them here.",
                <br/>,
                <br/>,
                "My progression from Engineer ⟶ Senior Engineer ⟶ Staff Engineer has been aligned with Will Larson's description in ",
                <a href="https://staffeng.com/book" target="_blank">Staff Engineer</a>,
                ". I continue to perform many of the same tasks as before, but I spend more of my time writing documentation, and developing architecture for robots and tooling.",
                <br/>,
                <br/>,
                
                "Here are some small tasks I performed in this time: ",
                <br/>,
                
                "· Using Grafana and SQL for a ",
                <a href="https://github.com/rhysfaultless-cpr/air_velocity_testing" target="_blank">test setup</a>,
                ".",
                <br/>,
                
                "· Updating a ",
                <a href="https://github.com/clearpathrobotics/numato_relay" target="_blank">USB-relay's driver</a>,
                " from ROS 1 to ROS 2."
              ]}
            />
            <ExperienceCard 
              experienceYear="2021 - 2023"
              experienceTitle="Senior System Engineer"
              experienceCompany="Clearpath Robotics"
              experienceHyperlink="https://clearpathrobotics.com/"
              experienceDescription={[
                "Some of the robotics projects I worked on in this time were; the ",
                  <a href="https://clearpathrobotics.com/husky-observer/" target="_blank">Husky Observer</a>,
                  ", and a ",
                  <a href="https://youtu.be/QJdJ7nAmhzY?si=ApmOR5jSOnodK0ED" target="_blank">retrofitted Polaris GEM</a>,
                  " to be controlled with ROS. ",

                "My tasks on these projects included: requirements definition, power budgets, ",
                  "wiring diagrams, cable drawings, mechanical drawings, building robots, testing hte systems, and commissioning them with end customers. ",
                <br/>,
                <br/>,
                "I also developed and documented ",
                <a href="https://docs.clearpathrobotics.com/docs/robots/accessories/pacs" target="_blank">PACS—Platform Attachment Configuration System</a>,
                "—which is used for integrating robots. ",
                "The outcome seems simplistic, but the development process required input from multiple stakeholders, ",
                "and support for legacy products. ",
                <br/>,
                <br/>,
                "I also researched website documentation tools, and set up ",
                <a href="https://docs.clearpathrobotics.com/" target="_blank">docs.clearpathrobotics.com</a>, 
                  " to simplify the process of maintaining Clearpath's public documentation.",
                " Note that much of the website's documentation was written by my colleagues, as seen in the ",
                <a href="https://github.com/clearpathrobotics/cpr-documentation" target="_blank">GitHub repository's</a>,
                " collaborators area."
              ]}
            />
            <ExperienceCard 
              experienceYear="2020 - 2021"
              experienceTitle="Senior Mechanical Engineer"
              experienceCompany="Clearpath Robotics"
              experienceHyperlink="https://clearpathrobotics.com/"
              experienceDescription={[
                "This was the height of COVID-19 lockdowns, so lots of work became remote, with engineers performing modular / discrete tasks. ",
                "During this time, I integrated several robots, such as this ",
                  <a href="https://clearpathrobotics.com/blog/2021/10/behind-the-robot-rfid-inventory-scanning-robot/" target="_blank">Boxer UGV with RFID sensors</a>,
                  ". ",
                "Some robot integrations were simple like the Boxer, but others were more complex, with many sensors and manipulators. ",
                <br/>,
                <br/>,
                "I also defined the system requirements, and drafted concepts for the ",
                  <a href="https://clearpathrobotics.com/turtlebot-4/" target="_blank">TurtleBot 4</a>,
                  ". ",
                "This was a collaboration between Clearpath Robotics and ",
                  <a href="https://www.openrobotics.org/" target="_blank">Open Robotics</a>,
                  ".",
              ]}
            />
            <ExperienceCard 
              experienceYear="2019"
              experienceTitle="Professional Engineer Designation (P.Eng.)"
              experienceCompany="Professional Engineers Ontario"
              experienceHyperlink="https://www.peo.on.ca/"
              experienceDescription={[
                "License Number ",
                <a href="https://www.peo.on.ca/directory" target="_blank">100218635</a>,
              ]}
            />
            <ExperienceCard 
              experienceYear="2018 - 2020"
              experienceTitle="Mechanical Designer"
              experienceCompany="Clearpath Robotics"
              experienceHyperlink="https://clearpathrobotics.com/"
              experienceDescription={[
                "My initial work at Clearpath Robotics was the mechanical design of the ",
                  <a href="https://youtu.be/cSoAOSEXeCY?si=_huGRxQM2YbesZz3" target="_blank">Moose UGV</a>,
                  ". ",
                "I used Solidworks to review robot assemblies, model brackets, and design rotating components. ",
                <br/>,
                <br/>,
                "Other projects during this time included mechanical tasks related to: drivetrain design and analyis, ",
                  "waterproofing electronics, and cooling electronics with heatsinks or forced convection. ",
                <br/>,
                <br/>,
                "Though the role was defined as Mechanical Designer, I wired robots, designed and built cables, ", 
                  "and configured sensors and computers. ",
                  "I also designed a PCBA with an Atmel microcontroller for the ",
                  <a href="https://youtu.be/VjUAtPK3MVA?si=9W9cUYgaZsbFL-XO" target="_blank">Heron USV's Water Sampler</a>,
                  ". The new PCBA was to simplify the manufacturing of the legacy Water Sampler product from 2016. ",
                  "I also updated the ROS driver for the Water Sampler to be compatable with ROS Melodic. "
              ]}
            />
            <ExperienceCard 
              experienceYear="2015 - 2018"
              experienceTitle="Physical Architect"
              experienceCompany="GDLS-C"
              experienceHyperlink="https://app.gdls.com/"
              experienceDescription={[
                "I was the main CAD maintainer for several vehicle variants being developed for the ",
                  <a href="https://app.gdls.com/products/lav-700.html" target="_blank">LAV 700</a>,
                  " .",
                <br/>,
                <br/>,
                "This included: ",
                  "holding design reviews, ",
                  "creating concepts, ",
                  "defining space claims, ",
                  "reviewing subsystem designer's assmemblies with reference to the entire vehicle, ",
                  "and assessing build issues on the production line."
              ]}
            />
            <ExperienceCard 
              experienceYear="2015"
              experienceTitle="Designer"
              experienceCompany="GDLS-C"
              experienceHyperlink="https://app.gdls.com/"
              experienceDescription={[
                "I updating drawings, CAD models, and assemblies with Siemens NX and Teamcenter. ",
                <br/>,
                <br/>,
                "I also designed the ",
                <a href="https://app.gdls.com/products/lav-6.0.html" target="_blank">LAV 6's</a>,
                " stowage subsystem, which stored troops's kit and supplies. ",
                "This included brackets, hinged covers, and fabric tie down straps."
              ]}
            />
            <ExperienceCard 
              experienceYear="2010 - 2014"
              experienceTitle="Bachelor of Engineering"
              experienceCompany="McMaster University"
              experienceHyperlink="https://www.mcmaster.ca/"
              experienceDescription={[
                "I studied mechanical engineering, with a focus on fluid dynamics."
              ]}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Experience;
