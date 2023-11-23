import { Anchor, Row, Col, Layout, theme } from 'antd';

import './App.css';
import Home from '../home/Home';
import About from '../about/About';
import Experience from '../experience/Experience';

const { Content, Footer, Sider } = Layout;

function Menu() {
  return (
    <div style={{ maxHeight: '90vh', marginTop: '100px'}}>
      <Anchor
        items={[
          {
            key: 'home',
            href: '#home',
            title: 'Home',
          },
          {
            key: 'about',
            href: '#about',
            title: 'About',
          },
          {
            key: 'experience',
            href: '#experience',
            title: 'Experience',
          },
        ]}
      />
    </div>
  );
}

function App() {
  const {
    token: { colorBgBase },
  } = theme.useToken();

  return (
    <div className='App'>
      <Layout>
        <Layout hasSider>
          <Sider style={{ background: colorBgBase }}/>
          <Content style={{ background: colorBgBase, maxWidth: 'calc(100vw - 400px)'}}>
            <Home />
            <About />
            <Experience />
          </Content>
          <Sider
            style={{
              background: colorBgBase,
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: '0'
            }}        
          >
            <Menu />
          </Sider>
        </Layout>
        <Footer style={{ textAlign: 'center', zIndex: '3' }}>
          ©2023 Created by Małgorzata Galińska
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
