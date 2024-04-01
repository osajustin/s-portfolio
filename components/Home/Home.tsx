import { Title, Text, Button, Container, useMantineColorScheme } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import classes from './Home.module.css';

export function Home() {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <>
      <Container size="md" className={classes.container}>
        <Container>
          {/* Title */}
          <Text className={`${classes.title} ${colorScheme === 'light' ? classes.light : classes.dark}`}>Hey, I'm</Text>
          <Title className={classes.gradientTitle}>
            <Text inherit variant="gradient" component="span"  gradient={{ from: '#9845E8', to: '#33D2FF', deg: 45 }}>
              Justin Osagie
            </Text>
          </Title>

          {/* Self-Description */}
          <Text className={`${classes.description} ${colorScheme === 'light' ? classes.light : classes.dark}`}>
            I'm a software engineer based in Toronto, Canada and also a communication and journalism student.
            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount
            of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
          </Text>

          {/* Email Button */}
          <Button 
            variant="transparent" 
            color="rgba(0, 0, 0, 1)" 
            rightSection={<IconArrowNarrowRight stroke={1}/>}
            className={`${classes.button} ${colorScheme === 'light' ? classes.light : classes.dark}`}
            >
            Say hi 
          </Button>
        </Container>
      </Container>
    </>
  );
}
