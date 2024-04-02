import React, { useState } from 'react';
import { Button, Grid, Group, Title } from '@mantine/core';
import { IconMailFilled, IconBrandLinkedin ,IconBrandGithub, IconBrandYoutubeFilled } from '@tabler/icons-react';
import classes from './Contact.module.css';


interface ContactButton {
  text: string;
  icon: React.ReactNode;
}

const experiences: ContactButton[] = [
  {
    text: 'Send an Email',
    icon: <IconMailFilled  size={14} />,
  },
  {
    text: 'LinkedIn',
    icon: <IconBrandLinkedin size={14} />,
  },
  {
    text: 'Github',
    icon: <IconBrandGithub size={14} />,
  },
  {
    text: 'YouTube',
    icon: <IconBrandYoutubeFilled size={14} />,
  },
  
];

export function Contact() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState<number | null>(null);

  const handleExperienceClick = (index: number) => {
    setActiveExperienceIndex(index === activeExperienceIndex ? null : index);
  };

  return (
    <>
      <Grid grow>
        <Grid.Col span="auto">
          <Title className={classes.title}>Contact</Title>
        </Grid.Col>
        

        <Grid.Col span={6}>
          <Group>
            {experiences.map((experience, index) => (
              <Button
                key={experience.text}
                variant="outline"
                color="#C6C6C6" 
                size="md"
                onClick={() => handleExperienceClick(index)}
                className={`${classes.button} ${activeExperienceIndex === index ? 'active' : ''}`}
                leftSection={experience.icon}
              >
                {experience.text}
              </Button>
            ))}
          </Group>
        </Grid.Col>
        
      </Grid>
    </>
  );
}
