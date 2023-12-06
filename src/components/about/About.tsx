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
          <LoremIpsum />
        </Paragraph>
        <Divider orientation='left'>My story</Divider>
        <Paragraph>
          <LoremIpsum />
        </Paragraph>
        <Divider orientation='right'>Hobbies</Divider>
        <Paragraph>
          <LoremIpsum />
        </Paragraph>
      </div>
    </div>
  )
}

export default About;
