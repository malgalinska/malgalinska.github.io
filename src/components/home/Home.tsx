import { Typography, Button, Flex} from 'antd';
import React from 'react';
import './Home.css';
import { relative } from 'path';

const { Title, Paragraph, Text, Link } = Typography;

function Home() {
  return (
    <div id="home" style={{ minHeight: '80vh', paddingTop: '20vh' }}>
      <Title style={{textAlign: 'center'}}> Małgorzata Galińska </Title>
      <Title level={3} style={{textAlign: 'center'}}> Software Developer </Title>
      <Flex wrap="wrap" gap="small" justify="center">
        <Button>LinkedIn</Button>
        <Button type="primary">
          Download CV
        </Button>
        <Button>Github</Button>
      </Flex>
    </div>
  )
}

export default Home;
