import { Row, Col, Card, Typography, Button, Flex, Divider, Carousel} from 'antd';
import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import './Experience.css';
import { relative } from 'path';
import LoremIpsum from '../LoremIpsum';
import { clear } from 'console';

const { Title, Paragraph } = Typography;

const languages = ['Python', 'Ruby', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'Transact-SQL', 'MySQL', 'PostreSQL', 'C', 'C++',
  'Bash', 'Haskell', 'Prolog'];
const technologies = ['Ruby on Rails', 'Django', 'React', 'Docker', 'Docker Compose', 'Git', 'Linux'];
const skills = ['REST', 'Algorithms'];

const cardSkills = [
  ['SQL', 'Transact-SQL', 'JavaScript', 'HTML'],
  ['Ruby', 'Ruby on Rails', 'JavaScript', 'HTML', 'MySQL', 'Git', 'Docker', 'Docker Compose', 'REST', 'Linux'],
  ['C++', 'Algorithms', 'Git'],
  ['Python', 'HTML', 'CSS', 'TypeScript', 'PostreSQL', 'C', 'C++', 'Git', 'Linux', 'Bash', 'Haskell', 'Prolog', 'Algorithms'],
]

const contentStyle: React.CSSProperties = {
  margin: 'auto',
  width: '95%',
};

function Experience() {
  const [linkedSkills, setLinkedSkills] = useState(['']);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
    setLinkedSkills(cardSkills[currentSlide])
  };

  return (
    <div id='experience' style={{ minHeight: '100vh', paddingTop: '20vh', maxWidth: '90vw', margin:'auto' }}>
      <Title> Experience </Title>
      <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} style={{ width: '90%', margin:'auto', minHeight: '20vh', }} dots={false} afterChange={onChange}>
        <div>
          <Card title='Database and Web Application Developer' style={contentStyle} extra={<p>02/2024 - ongoing</p>}
              onMouseEnter={() => onChange(0)}>
            <Paragraph> 
              In my current role at NetWorks, I contribute to the development of web-based systems and tools that support the construction and expansion of cellular base stations. As part of a dynamic team, I focus on both corporate and investment sectors, as well as environmental research.
              <ul>
                <li>
                  I develop and maintain the proprietary SPIN web system with a strong emphasis on database management and full-stack development.
                </li>
                <li>
                  I collaborate with Product Owners, Business Experts, and IT team members to understand business requirements and translate them into technical solutions.
                </li>
                <li>
                  I contribute to the enhancement of tools and processes critical to both internal operations and external client services, including international markets.
                </li>
              </ul>
              This role has provided me with unique opportunities for technical development and immersion in the telecommunications industry, enhancing my skills in SQL Server T-SQL, JavaScript, HTML, and CSS.
            </Paragraph>
          </Card>
        </div>
        <div>
          <Card title='Ruby on Rails Developer' style={contentStyle} extra={<p>04/2021 - 03/2023</p>}
              onMouseEnter={() => onChange(1)}>
            <Paragraph>
              At Radgost, I served as a Ruby on Rails Developer, contributing to a variety of projects such as Intum, Siteor, and Fakturownia. These projects involved extensive use of Ruby, JavaScript, HTML, and MySQL, allowing me to deepen my expertise in these technologies.
              <ul>
                <li>
                  Intum: This project aimed at rewriting old code from several products into a new, cohesive system. My responsibilities included handling basic tasks during onboarding, learning Ruby on the fly, and gradually taking on more complex assignments. Despite the project not being fully published yet, it provided a valuable learning experience and enhanced my problem-solving skills.
                </li>
                <li>
                  Siteor: As part of the team managing and developing Siteor, a platform for creating websites and online stores, I worked on numerous features based on client requests. This included integrating the Instagram API, adding new form fields, fixing bugs, and ensuring the product's security. I played a comprehensive role in the project, from code writing and reviewing to testing and server management, ensuring that we delivered a reliable and user-friendly product.
                </li>
                <li>
                  Fakturownia: Known internationally as InvoiceOcean, VosFactures, BitFactura, and eFakturierung, this SaaS product focused on invoice management for various markets. My tasks included developing new features like adding QR codes for Czech invoices and integrating with foreign banks. I was involved in writing code, conducting code reviews, and testing, ensuring the product met high standards of functionality and security.
                </li>
              </ul>
              Through these projects, I developed strong collaborative skills, working closely with my team to deliver high-quality software solutions. I also gained significant experience in using Docker, Git, and Linux, enhancing my technical skill set and preparing me for future challenges.
            </Paragraph>
          </Card>
        </div>
        <div>
          <Card title='Algorithmics tutor' style={contentStyle} extra={<p>08/2018 - 06/2012</p>}
              onMouseEnter={() => onChange(2)}>
            <Paragraph>
              As an Algorithmics Tutor at Algorytmika na Start, I conducted additional classes on algorithms and their implementation in C++ for high school students. My role was pivotal in preparing students for the Informatics Olympiad, where several of my students achieved finalist and winner titles.
              <ul>
                <li>
                  I led a team that offered weekly classes during the school year and intensive courses during 10-day holiday camps. These sessions focused on teaching advanced algorithmic concepts and problem-solving techniques, equipping students with the skills needed to excel in competitive programming.
                </li>
                <li>
                  I was responsible for developing the curriculum, creating teaching materials, and assessing student progress. My efforts not only helped students perform well in competitions but also fostered a deeper understanding and appreciation for computer science.
                </li>
                <li>
                  Additionally, I coordinated team activities, ensuring smooth collaboration and effective communication among team members. This experience honed my leadership and organizational skills, as I managed both the educational and logistical aspects of the program.
                </li>
              </ul>
              These roles have equipped me with a robust foundation in software development and education, blending technical proficiency with a passion for mentoring and teamwork. My experience in diverse environments has prepared me to tackle complex challenges and continuously seek opportunities for growth and improvement.
            </Paragraph>
          </Card>
        </div>
        <div>
          <Card title='Graduate' style={contentStyle}
              onMouseEnter={() => onChange(3)}>
            <Paragraph>
              During my time at the University of Warsaw, I completed both my Bachelor's and Master's degrees in Computer Science. Throughout my studies, I engaged in numerous projects that allowed me to apply and expand my technical skills across a variety of programming languages and technologies.
              <ul>
                <li>
                  Python: Developed scripts and applications for data analysis, machine learning, and software development, including my master's thesis on naming conventions in software development.
                </li>
                <li>
                  HTML, CSS, TypeScript: Created responsive web applications and user interfaces, enhancing my front-end development skills.
                </li>
                <li>
                  PostgreSQL: Designed and managed databases for several projects, gaining proficiency in SQL and database management.
                </li>
                <li>
                  C, C++: Implemented algorithms and data structures for competitive programming and coursework, contributing to a solid understanding of low-level programming.
                </li>
                <li>
                  Git, Linux, Bash: Utilized these tools extensively for version control, operating system management, and scripting, ensuring efficient project workflows.
                </li>
                <li>
                  Haskell, Prolog: Explored functional and logic programming paradigms through coursework and research projects.
                </li>
                <li>
                  Algorithms: Specialized in algorithmic problem-solving, evidenced by my participation in the Informatics Olympiad and related tutoring activities.
                </li>
              </ul>
              These projects and experiences not only deepened my technical expertise but also honed my problem-solving abilities and teamwork skills, preparing me for the challenges of a professional software development environment.
            </Paragraph>
          </Card>
        </div>
      </Carousel><br/>


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
