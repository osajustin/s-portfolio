import { Title, Text, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Home.module.css';

export function Home() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Hey, I'm{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Justin Osagie
        </Text>
      </Title>
      <Text color="dimmed" ta="left" size="lg" maw={580} mx="auto" mt="xl">
        I'm a software engineer based in Toronto, Canada and also a communication and journalism student.
        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
        I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount
        of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
      </Text>
      <Button variant="transparent" color="rgba(0, 0, 0, 1)">
        Say hi 
        <IconArrowRight stroke={1} />
      </Button>
    </>
  );
}
