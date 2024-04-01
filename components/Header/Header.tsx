import React from 'react';
import { Group, Burger, Container, useMantineColorScheme, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSunFilled } from '@tabler/icons-react';
import classes from './Header.module.css';

interface Link {
  link: string;
  label: string | React.ReactElement; // Define label as either string or React element
}
const links: Link[] = [
  { link: '/Projects', label: 'Projects' },
  { link: '/Experience', label: 'Resume' },
  { link: '/Contact', label: 'Contact' },
  { link: '', label: <IconSunFilled />},
];

export function Header(): React.ReactElement {
  const [opened, { toggle }] = useDisclosure(false);
  
  
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {typeof link.label === 'string' ? link.label : link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <h1 aria-setsize={28}>JO.</h1>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
