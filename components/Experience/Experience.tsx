import React, { useState } from 'react';
import { Button, Container, Divider, Group, List, Title, useMantineColorScheme } from '@mantine/core';
import classes from './Experience.module.css';

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: 'Fullstack Software Engineer',
    company: 'Citi',
    location: 'Tampa, Florida / USA',
    duration: 'March 2022 - Present',
    description: [
      `Developed and maintained a token management system in .NET 6 microservices with C#, including a polling
      service for timely token expiration alerts, REST APIs for token management, and Microsoft SQL Server
      database for storage.`,
      `Supported frontend development with Angular, executing UI enhancements, security upgrades, test automation,
      and the migration of the team’s application to a new internal testing environment.`,
      `Contributed to cross-departmental projects, communicating with other development teams to facilitate the seamless
      integration of new features and services.`
    ]
      
  },
  {
    title: 'Software Engineer Intern',
    company: 'Citi (Intern)',
    location: 'Tampa, Florida / USA',
    duration: 'June 2021 - August 2021',
    description: [
      `Successfully integrated the open-source data discovery and metadata engine Amundsen into the Citi environment,
      allowing for data searchability and metadata management.`,
      `Utilized Elasticsearch for advanced search capabilities within Amundsen and employed Neo4j to store and
      manage database metadata for the metadata retrieval process.`,
      `Developed Python scripts with SQLAlchemy for efficient metadata extraction from various databases and utilized
      Flask for the frontend of the application.`
    ]
  },
  {
    title: 'Cloud Developer Intern',
    company: 'Florida Power & Light',
    location: 'Juno Beach, Florida / USA',
    duration: 'June 2020 - August 2020',
    description: [
      `Amplified customer service call capacity from 5,000/hr to over 1,000,000/hr by implementing a scalable serverless
      solution in Amazon Web Services (AWS) using Python and Java, enhancing disaster response capabilities
      during critical events.`,
      `Developed a cloud-based system, transitioning from on-premise infrastructure to a scalable AWS solution, which
      resulted in vastly improved load management and system resilience during high-demand periods.`
    ]
  },
  {
    title: 'iOS Developer Intern',
    company: 'NextEra Energy Resources',
    location: 'Juno Beach, Florida / USA',
    duration: 'May 2019 - August August 2019',
    description: [
      `Developed an iPad-based iOS inventory management application using Swift, enabling field workers to efficiently
      scan barcodes for part checkouts, directly resulting in $200k annual savings.`,
      `Overhauled a legacy application by designing a new user interface and refactoring deprecated code, leveraging
      Swift and Objective-C, which significantly improved system reliability and user engagement.`
    ]
    
  },
  {
    title: 'Data Analyst Intern',
    company: 'USF College of The Arts',
    location: 'Tampa, Florida / USA',
    duration: 'Agust 2018 - December 2018',
    description: [
      `Developed a Python-based data collection application utilizing BeautifulSoup for HTML parsing, resulting in an
      annual cost saving of $12k by automating manual data entry processes`,
      `Automated data aggregation from multiple social media platforms using RESTful API calls, significantly reducing
      manual data collection efforts and improving data accuracy for analysis`
    ]
    
  },
];

export function Experience() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState<number>(0); // Set initial state to 0
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container className={classes.container}>
      <Container>
        {/* Title */}
        <Title className={classes.title}>Experience</Title>

        {/* Button Group for Jobs */}
        <Group>
          {experiences.map((experience, index) => (
            <Button
              key={experience.title}
              variant="subtle"
              color="rgba(0, 0, 0, 1)" 
              size="md"
              onClick={() => setActiveExperienceIndex(index)}
              className={`${classes.button} ${activeExperienceIndex === index ? 'active' : ''}`}
            >
              {experience.company}
            </Button>
          ))}
        </Group>
        {/* Display details of active experience */}
        <>
          {/* <h3>{experiences[activeExperienceIndex].company}</h3> */}
          <h4 className={`${classes.experienceDuration} ${colorScheme === 'light' ? classes.light : classes.dark}`}>{experiences[activeExperienceIndex].duration}</h4>
          <h4 className={`${classes.experienceLocation}`}>{experiences[activeExperienceIndex].location}</h4>
          <List>
            {experiences[activeExperienceIndex].description.map((desc, descIndex) => (
              <List.Item className={`${classes.experienceList} ${colorScheme === 'light' ? classes.light : classes.dark}`} key={descIndex}>{desc}</List.Item>
            ))}
          </List>
        </>
        <Divider my="sm" />
      </Container>
    </Container>
  );
}
