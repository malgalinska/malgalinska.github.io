import { Divider, Typography } from 'antd';
import React from 'react';
import './About.css';

const { Title, Paragraph, Text, Link } = Typography;

function LoremIpsum() {
  return (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper tortor id laoreet convallis. Maecenas ut sapien tempus, commodo arcu in, bibendum lectus. Etiam vitae nisl volutpat, finibus augue nec, accumsan arcu. Maecenas cursus sapien id purus facilisis, eu tempor tellus egestas. Sed nec mi blandit, venenatis sem vitae, feugiat neque. Sed finibus condimentum porta. Suspendisse lobortis felis eget ultrices porta. Donec quis magna a justo egestas ultrices.
    </>
  )
}

function About() {
  return (
    <div id='about' style={{ minHeight: '100vh', paddingTop: '20vh' }}>
      <div style={{maxWidth: '20cm', margin: 'auto', textAlign: 'justify'}} >
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
