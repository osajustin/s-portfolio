import React from 'react';
import { Group, Container, useMantineColorScheme, Title, ActionIcon } from '@mantine/core';
import { IconSunFilled } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useRouter } from 'next/router';

interface Link {
  link: string;
  label: any //string | React.ReactElement; //Throws error on key but works
}
const links: Link[] = [
  { link: '/Projects', label: 'Projects' },
  { link: '/Experience', label: 'Resume' },
  { link: '/Contact', label: 'Contact' },
];

export function Header(): React.ReactElement {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter(); // Get the router object from Next.js

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = links.map((link) => (
    <a 
        className={`${classes.link} ${colorScheme === 'light' ? classes.light : classes.dark}`} 
        onClick={() => {
            scrollToSection(link.link);
            router.push(`#${link.link}`); 
        }}
        >

      {typeof link.label === 'string' ? link.label : link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <Container className={classes.inner}>
          <Title className={`${classes.title} ${colorScheme === 'light' ? classes.light : classes.dark}`}>
            JO.
        </Title>
          
          <Group gap={5} visibleFrom="sm">
            {items}
            <ActionIcon
                variant="transparent"
                onClick={toggleColorScheme}
                style={{ padding: 0 }}
                >
                    {/* Set Light/Dark Mode Icon Color */}
                    {colorScheme === 'light' ? (
                        <IconSunFilled style={{ marginRight: 5 }}  color='#1A1A1A'/>
                    ) : (
                        <IconSunFilled style={{ marginRight: 5 }} color='#FFFFFF'/>
                    )}
            </ActionIcon>
          </Group>
        </Container>
      </Container>
    </header>
  );
}
