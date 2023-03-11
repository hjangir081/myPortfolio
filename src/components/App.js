import React,{memo} from 'react';
import Header from './header/header';
import Nav from './Nav/Nav';  
import About from './About/about';
import Experiance from './Experiance/experiance';
//import Services from './Services/services';
import RecentWork from './RecentWork/RecentWork';
//import Testimonials from './Testimonial/Testimonial';
import Contact from './Contact/contact';
import Footer from './footer/footer';
const App = memo(() => {
  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Experiance />
        {/*<Services/>*/}
        <RecentWork/>
        {/*<Testimonials/>*/}
        <Contact/>
        <Footer />
      </>
    </div>
  );
})

export default App;