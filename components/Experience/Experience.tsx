import React, { useState } from 'react';
import { Button, Group } from '@mantine/core';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Fullstack Software Engineer',
    company: 'Citi',
    duration: 'March 2022 - Present',
    description: `
      · Developed and maintained a token management system in .NET 6 microservices with C#, including a polling
      service for timely token expiration alerts, REST APIs for token management, and Microsoft SQL Server
      database for storage.
      · Supported frontend development with Angular, executing UI enhancements, security upgrades, test automation,
      and the migration of the team’s application to a new internal testing environment.
      · Contributed to cross-departmental projects, communicating with other development teams to facilitate the seamless
      integration of new features and services.
      · Guided and mentored interns on development processes, promoting internal growth.
    `,
  },
  {
    title: 'Software Engineer Intern',
    company: 'Citi',
    duration: 'June 2021 - August 2021',
    description: `
      · Successfully integrated the open-source data discovery and metadata engine Amundsen into the Citi environment,
      allowing for data searchability and metadata management.
      · Utilized Elasticsearch for advanced search capabilities within Amundsen and employed Neo4j to store and
      manage database metadata for the metadata retrieval process.
      · Developed Python scripts with SQLAlchemy for efficient metadata extraction from various databases and utilized
      Flask for the frontend of the application.
    `,
  },
  {
    title: 'Cloud Developer Intern',
    company: 'Florida Power & Light',
    duration: 'June 2020 - August 2020',
    description: `
      · Amplified customer service call capacity from 5,000/hr to over 1,000,000/hr by implementing a scalable serverless
      solution in Amazon Web Services (AWS) using Python and Java, enhancing disaster response capabilities
      during critical events.
      · Developed a cloud-based system, transitioning from on-premise infrastructure to a scalable AWS solution, which
      resulted in vastly improved load management and system resilience during high-demand periods.
    `,
  },
  {
    title: 'iOS Developer Intern',
    company: 'NextEra Energy Resources',
    duration: 'May 2019 - August August 2019',
    description: `
    · Developed an iPad-based iOS inventory management application using Swift, enabling field workers to efficiently
    scan barcodes for part checkouts, directly resulting in $200k annual savings.
    · Overhauled a legacy application by designing a new user interface and refactoring deprecated code, leveraging
    Swift and Objective-C, which significantly improved system reliability and user engagement.
    `,
  },
  {
    title: 'Data Analyst Intern',
    company: 'USF College of The Arts',
    duration: 'Agust 2018 - December 2018',
    description: `
    · Developed a Python-based data collection application utilizing BeautifulSoup for HTML parsing, resulting in an
    annual cost saving of $12k by automating manual data entry processes.
    · Automated data aggregation from multiple social media platforms using RESTful API calls, significantly reducing
    manual data collection efforts and improving data accuracy for analysis
    `,
  },
];

export function Experience() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState<number | null>(null);

  const handleExperienceClick = (index: number) => {
    setActiveExperienceIndex(index === activeExperienceIndex ? null : index);
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <Group>
        {experiences.map((experience, index) => (
          <Button
            key={experience.title}
            variant="subtle"
            color="rgba(0, 0, 0, 1)" 
            size="md"
            onClick={() => handleExperienceClick(index)}
            className={activeExperienceIndex === index ? 'active' : ''}
          >
            {experience.title}
          </Button>
        ))}
      </Group>
      {activeExperienceIndex !== null && (
        <div className={`experience-details`}>
          <h3>{experiences[activeExperienceIndex].company}</h3>
          <h4>{experiences[activeExperienceIndex].duration}</h4>
          <p>{experiences[activeExperienceIndex].description}</p>
        </div>
      )}
    </div>
  );
}
