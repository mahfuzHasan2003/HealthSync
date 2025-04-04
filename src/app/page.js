import OurBlog from '@/components/custom-components/our-blog/OurBlog';
import CTA from '@/components/custom-components/cta/CTA';
import Footer from '@/components/custom-components/footer/Footer';
import Available from '@/components/custom-components/available/Available';
import OurPortfolio from '@/components/custom-components/oufr-portfolio/OurPortfolio';
import OurTeam from '@/components/custom-components/our-team/our-team';
import OurBlog from '@/components/custom-components/our-blog/our-blog';
import HeroSlider from '@/components/custom-components/hero-section/hero-slider';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className=''>
      <OurPortfolio />
      <Available />
      <CTA />
      <HeroSlider />
      <OurBlog />
      <OurTeam />
      <Footer />
    </div>
  );
}