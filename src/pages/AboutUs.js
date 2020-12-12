import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';
// Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const AboutUs = () => {
    return(
    <motion.div
     variants={pageAnimation}
     initial='hidden'
     animate='show'
     exit='exit'>
        <AboutSection exit='exit' />
        <ServicesSection exit='exit' />
        <FaqSection exit='exit' />
        <ScrollTop />
    </motion.div>
    );
};

export default AboutUs;