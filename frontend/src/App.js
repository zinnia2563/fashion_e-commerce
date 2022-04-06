import { Container, Navbar } from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import {LinkContainer} from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
      <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>Fashion</Navbar.Brand>
        </LinkContainer>
      </Container>
</Navbar>
      </header>
      <main>
        
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>    
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
