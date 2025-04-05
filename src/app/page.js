import OurBlog from '@/components/custom-components/our-blog/OurBlog';
import CTA from '@/components/custom-components/cta/CTA';
import Footer from '@/components/custom-components/footer/Footer';
import Available from '@/components/custom-components/available/Available';
import OurPortfolio from '@/components/custom-components/our-portfolio/OurPortfolio';
import OurTeam from '@/components/custom-components/our-team/our-team';
import HeroSlider from '@/components/custom-components/hero-section/hero-slider';
import DepartmentalService from '@/components/custom-components/departmental-service/DepartmentalService';
import Testimonial from '@/components/custom-components/testimonial/Testimonial';

export default function Home() {
  return (
    <div className=''>
      <HeroSlider />
      <DepartmentalService />
      <OurPortfolio />
      <Testimonial />
      <Available />
      <OurTeam />
      <CTA />
      <OurBlog />
      <Footer />
    </div>
  );
}
