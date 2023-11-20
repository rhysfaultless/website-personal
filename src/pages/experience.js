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
          <div className="column margin-top--xl margin-bottom--lg">
            <ExperienceCard
              experienceYear="2023 - Present"
              experienceTitle="Staff System Engineer"
              experienceCompany="Clearpath Robotics"
              experienceHyperlink="https://clearpathrobotics.com/"
              experienceDescription={[
                "None of my current projects are in the public domain, so I cannot mention them here.",
                <br/>,
                <br/>,
                "My progression from Engineer → Senior Engineer → Staff Engineer has been aligned with Will Larson's description in ",
                <a href="https://staffeng.com/book" className="underline hover:text-teal-600" target="_blank">Staff Engineer</a>,
                ". I continue to do many of the same tasks as before, but spend more of my time writing documentation, and developing architecture for robots and tooling."
  
              ]}
            />
            <ExperienceCard 
              experienceYear="2021 - 2023"
              experienceTitle="Senior System Engineer"
              experienceCompany="Clearpath Robotics"
              experienceHyperlink="https://clearpathrobotics.com/"
              experienceDescription={[
                "Some of the robotics projects worked on in this time were the ",
                  <a href="https://clearpathrobotics.com/husky-observer/" className="underline hover:text-teal-600" target="_blank">Husky Observer</a>,
                  " and a ",
                  <a href="https://youtu.be/QJdJ7nAmhzY?si=ApmOR5jSOnodK0ED" className="underline  hover:text-teal-600" target="_blank">retrofitted Polaris GEM</a>,
                  " to be controlled with ROS. ",

                "My tasks on these projects included: requirements definition, power budgets, ",
                  "wiring diagrams, cable drawings, mechanical drawings, and building robots. ",
                <br/>,
                <br/>,
                "I also developed and documented ",
                <a href="https://docs.clearpathrobotics.com/docs/robots/accessories/pacs" className="underline hover:text-teal-600" target="_blank">PACS—Platform Attachment Configuration System</a>,
                "—which is used for integrating robots. ",
                "The outcome seemed simplistic, but development process required input from multiple stakeholders, ",
                "and support for legacy products. ",
                <br/>,
                <br/>,
                "I also researched documentation tools, and developed ",
                <a href="https://docs.clearpathrobotics.com/" className="underline hover:text-teal-600" target="_blank">docs.clearpathrobotics.com</a>, 
                  " to simplify the process for maintaining Clearpath's public documentation."
              ]}
            />
            <ExperienceCard 
              experienceYear="2020 - 2021"
              experienceTitle="Senior Mechanical Engineer"
              experienceCompany="Clearpath Robotics"
              experienceHyperlink="https://clearpathrobotics.com/"
              experienceDescription={[
                "This was the height of COVID-19 lockdowns, so lots of work became remote, and modular tasks. ",
                "I integrated several robots, like this ",
                  <a href="https://clearpathrobotics.com/blog/2021/10/behind-the-robot-rfid-inventory-scanning-robot/" className="underline hover:text-teal-600" target="_blank">Boxer UGV with RFID sensors</a>,
                  ". ",
                "Some were simple like the Boxer, but others were more complex, with many sensors and manipulators. ",
                <br/>,
                <br/>,
                "I also defined the system requirements, and drafted concepts for the ",
                  <a href="https://clearpathrobotics.com/turtlebot-4/" className="underline hover:text-teal-600" target="_blank">TurtleBot 4</a>,
                  ". ",
                "This was a colaboration between Clearpath Robotics and ",
                  <a href="https://www.openrobotics.org/" className="underline hover:text-teal-600" target="_blank">Open Robotics</a>,
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
                <a href="https://www.peo.on.ca/directory" className="underline hover:text-teal-600" target="_blank">100218635</a>,
              ]}
            />
            <ExperienceCard 
              experienceYear="2018 - 2020"
              experienceTitle="Mechanical Designer"
              experienceCompany="Clearpath Robotics"
              experienceHyperlink="https://clearpathrobotics.com/"
              experienceDescription={[
                "My initial work at Clearpath Robotics was the mechanical design of the ",
                  <a href="https://youtu.be/cSoAOSEXeCY?si=_huGRxQM2YbesZz3" className="underline hover:text-teal-600" target="_blank">Moose UGV</a>,
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
                  <a href="https://youtu.be/VjUAtPK3MVA?si=9W9cUYgaZsbFL-XO" className="underline hover:text-teal-600" target="_blank">Heron USV's Water Sampler</a>,
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
                  <a href="https://app.gdls.com/products/lav-700.html" className="underline hover:text-teal-600" target="_blank">LAV 700</a>,
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
                <a href="https://app.gdls.com/products/lav-6.0.html" className="underline hover:text-teal-600" target="_blank">LAV 6's</a>,
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