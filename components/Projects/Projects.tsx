import { Title, Text, Button, Card, Image, Group, Badge, ActionIcon, Grid } from '@mantine/core';
import { IconBrandGithub  } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Projects.module.css';

const mockdata = {
  image:
    'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  title: 'USF Job Automation',
  country: 'Croatia',
  github: 'https://github.com/osajustin/USF-Job-Automation/blob/master/imdbWebScrapper.py',
  description:'Python Webscrapper showcasing how I automated my work as a student intern',
  tools: ['Python','HTML','BeautifulSoup 4'],

};

export function Projects() {
  const { image, title, description, country, github, tools } = mockdata;
  const features = tools.map((tool, index) => (
    <Text c="dimmed" key={index}>
       {index !== 0 ? ' - ' : ''}{tool.charAt(0).toUpperCase() + tool.slice(1)}
    </Text>
  ));

  return (
    <>
      <Title className={classes.title} ta="left" mt={100}>
        FEATURED PROJECTS
      </Title>
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <Card radius="md" p="md" className={classes.card}>
          <Card.Section>
            <Image src={image} alt={title} height={180} />
          </Card.Section>

          {/*Title, Description, Links  */}
          <Card.Section className={classes.section} mt="md">
            <Group justify="space-between">
              {/* Title */}
              <Text fz="lg" fw={500}>
                {title}
              </Text>
              <Button 
                variant="transparent" 
                component={Link} 
                href={github}
                color="rgba(0, 0, 0, 1)"
              >
                <IconBrandGithub stroke={1} />
              </Button>
            </Group>
            <Text fz="sm" mt="xs">
              {description}
            </Text>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Group gap={7} mt={5}>
              {features}
            </Group>
          </Card.Section>
        </Card>
      </Grid.Col>
    </Grid>
    </>
  );
}
