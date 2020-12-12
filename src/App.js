// Import components
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
// Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
// Animation
import {AnimatePresence} from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/capture-project/' exact>
            <AboutUs />
          </Route>
          <Route path='/capture-project//work' exact>
            <OurWork />
          </Route>
          <Route path='/capture-project/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/capture-project/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
