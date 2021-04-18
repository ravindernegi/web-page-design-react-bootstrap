import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Hero from './components/Hero';
import Grid from './components/Grid';

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Hero />
        <Container>
          <Row>
            <Grid title="Card Title 1" image="https://dummyimage.com/286x180/7cc280/fff.png&text=image" desc="Some quick example text to build" link="http://google.com"/>
            <Grid title="Card Title 2" image="https://dummyimage.com/286x180/7cc280/000.png&text=image" desc=" title and make up the bulk of the card's content" link="http://google1.com"/>
            <Grid title="Card Title 3" image="https://dummyimage.com/286x180/ddd/1de.png&text=image" desc="the bulk of the card's content" link="http://google2.com"/>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
