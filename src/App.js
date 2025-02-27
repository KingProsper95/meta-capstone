import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import { Box, Flex } from '@chakra-ui/react';
import Reservation from "./components/reservations/Reservation";
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <Flex direction='column'  minH={'100vh'}>
      <Box as='header' minW='max-content'>
        <Header />
      </Box>
      <Box as='main'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/reservations" element={<Reservation />} />
        </Routes>
      </Box>
      <Box as='footer' bg='secondary_grey'>
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
