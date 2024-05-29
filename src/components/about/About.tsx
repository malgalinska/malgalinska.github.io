import { Divider, Typography } from 'antd';
import React from 'react';

import './About.css';
import LoremIpsum from '../LoremIpsum'

const { Title, Paragraph } = Typography;


function About() {
  return (
    <div id='about' style={{ minHeight: '100vh', paddingTop: '20vh' }}>
      <div style={{width: '20cm', maxWidth: '90vw', margin: 'auto', textAlign: 'justify'}} >
        <Title style={{textAlign: 'center'}}> About </Title>
        <Paragraph>
          Highly motivated and fast-learning Software Developer with a Master's degree in Computer Science from the University of Warsaw and 2 years of professional experience. Passionate about algorithms and problem-solving, as evidenced by being a two-time finalist in the  Olimpiada Algorytmiczna. Proficient in a variety of programming languages and technologies, including Ruby on Rails, C++, JavaScript,  SQL, and Python. Demonstrates strong organizational, public speaking, and leadership skills through extensive involvement in scouting. Adept at working on team projects and keen on continuous learning and tackling new challenges. Seeking opportunities to leverage technical skills and creativity in a collaborative and dynamic environment.
        </Paragraph>
        <Divider orientation='left'>My story</Divider>
        <Paragraph>
From a young age, I was captivated by the world of mathematics and puzzles. My journey with programming began in 2013 when I started learning Logomocja (polish version of Logo) and shortly after Python. During high school, I fell in love with algorithmic and problem-solving. Throughout my academic journey, I acquired extensive knowledge in various fields of computer science, from the construction of operating systems to the secrets of game theory. I balanced my studies with practical experience, working as a Software Developer and honing my skills in various programming languages and technologies. My master's thesis, which explored naming strategies in software development, is a testament to my dedication to understanding and improving coding practices. Today, with a solid foundation of academic knowledge and professional experience, I am eager to take on new challenges and continue growing in the ever-evolving tech industry.
        </Paragraph>
        <Divider orientation='right'>Hobbies</Divider>
        <Paragraph>
Beyond my professional pursuits, I have a rich array of hobbies that keep me balanced and engaged. I am deeply involved in scouting, where I  not only volunteer but also develop essential life skills such as organization, public speaking, and leadership. Organizing camps and events has taught me the value of teamwork and responsibility.
 Additionally, I find joy in baking and sewing, activities that challenge my creativity and attention to detail. Visiting museums is my other passion, as it satisfies my curiosity and love for learning about history and culture. These diverse interests, along with my enthusiasm for continuously learning new things, enrich my life and provide a well-rounded perspective that I  bring into my professional endeavours.
        </Paragraph>
      </div>
    </div>
  )
}

export default About;
