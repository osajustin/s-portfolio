import { Title, Text, Button, Card, Image, Group, Badge, ActionIcon, Grid, Container, SimpleGrid } from '@mantine/core';
import { IconBrandGithub  } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Projects.module.css';

const mockdata = {
  image:
    'https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-06-1536x1025.jpg',
  title: 'USF Job Automation',
  github: 'https://github.com/osajustin/USF-Job-Automation/blob/master/imdbWebScrapper.py',
  description:'Python Webscrapper showcasing how I automated my work as a student intern',
  tools: ['Python','HTML','BeautifulSoup 4'],
};

export function Projects() {
  const { image, title, description, github, tools } = mockdata;
  const features = tools.map((tool, index) => (
    <Text className={classes.projectTools}>
       {index !== 0 ? ' - ' : ''}{tool.charAt(0).toUpperCase() + tool.slice(1)}
    </Text>
  ));

  return (
    <Container className={classes.container}>
      <Container>
        {/* Title */}
      <Title className={classes.title} ta="left" mt={100}>
        FEATURED PROJECTS
      </Title>

      {/* Projects */}
        <SimpleGrid cols={2}>
          <div>
            <Card radius="md" p="md" className={classes.card}>
              <Card.Section>
                <Image className={classes.image} src={image} alt={title}/>
              </Card.Section>

              {/*Title, Description, Links  */}
              <Card.Section className={classes.section} mt="md">
                <Group justify="space-between">
                  {/* Title */}
                  <Text className={classes.projectTitle}>
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
                <Text className={classes.projectDescription}>
                  {description}
                </Text>
              </Card.Section>

              <Card.Section className={classes.section}>
                <Group gap={7} mt={5}>
                  {features}
                </Group>
              </Card.Section>
            </Card>
          </div>

          <div>
            <Card radius="md" p="md" className={classes.card}>
              <Card.Section>
                <Image className={classes.image} src={image} alt={title} height={180} />
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
          </div>

        </SimpleGrid>
      </Container>
    </Container>
  );
}
