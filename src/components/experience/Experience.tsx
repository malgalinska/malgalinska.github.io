import { Row, Col, Card, Typography, Button, Flex, Divider} from 'antd';
import React, { useState } from 'react';

import './Experience.css';
import { relative } from 'path';
import LoremIpsum from '../LoremIpsum';
import { clear } from 'console';

const { Title, Paragraph } = Typography;

const languages = ['Python', 'Ruby', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'MySQL', 'PostreSQL', 'C', 'C++',
  'Bash', 'Haskell', 'Prolog'];
const technologies = ['Ruby on Rails', 'Django', 'React', 'Docker', 'Docker Compose', 'Git', 'Linux'];
const skills = ['REST', 'Algorithms'];

function Experience() {
  const [linkedSkills, setLinkedSkills] = useState(['']);

  return (
    <div id='experience' style={{ minHeight: '100vh', paddingTop: '20vh', maxWidth: '90%', margin:'auto' }}>
      <Title> Experience </Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Ruby on Rails Developer' hoverable
            onMouseEnter={() => setLinkedSkills(['Ruby', 'Ruby on Rails', 'JavaScript', 'HTML', 'MySQL', 'Git', 'Docker', 'Docker Compose', 'REST', 'Linux'])}>
          <Paragraph><LoremIpsum /></Paragraph>
            {/* Part-time work on projects: Intum, Siteor, Fakturownia. Programming in Ruby using JavaScript, HTML, and MySQL. Using Git, Docker, and Docker Compose. */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Algorithmics tutor' hoverable
            onMouseEnter={() => setLinkedSkills(['C++', 'Algorithms', 'Git'])}>
            <Paragraph><LoremIpsum /></Paragraph>
          {/* Conducting additional classes at the XIV LO in Warsaw during the school year and at holiday camps. Teaching algorithms and their implementation in C++ and preparing students to participate in the Olympiad in Informatics. Coordinating teamwork. */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Graduate' hoverable
            onMouseEnter={() => setLinkedSkills(['Python', 'HTML', 'CSS', 'TypeScript', 'PostreSQL', 'C', 'C++',
              'Git', 'Linux', 'Bash', 'Haskell', 'Prolog', 'Algorithms'])}>
            <Paragraph><LoremIpsum /></Paragraph>
            {/* I have graduate my master's degree in September 2023 with GPA 3.65. */}
          </Card>
        </Col>
      </Row><br/>

      <Title> Skills </Title>
      <Flex wrap='wrap' gap='large'>
        {languages.map((item:string)=>(
          <Button key={item} type={(linkedSkills.includes(item)) ? 'primary' : 'default'} size='large'>
            {item}
          </Button>
        ))}
      </Flex>
      <Divider />
      <Flex wrap='wrap' gap='large'>
        {technologies.map((item:string)=>(
          <Button key={item} type={(linkedSkills.includes(item)) ? 'primary' : 'default'} size='large'>
            {item}
          </Button>
        ))}
      </Flex>
      <Divider />
      <Flex wrap='wrap' gap='large'>
        {skills.map((item:string)=>(
          <Button key={item} type={(linkedSkills.includes(item)) ? 'primary' : 'default'} size='large'>
            {item}
          </Button>
        ))}
      </Flex> <br/>
      <Flex justify='flex-end'>
        <Button danger key='clear' size='large' onClick={() => setLinkedSkills([''])}>Clear</Button>
      </Flex>
    </div>
  );
}

export default Experience;
