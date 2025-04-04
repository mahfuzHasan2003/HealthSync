import OurTeam from '@/components/custom-components/our-team/our-team';
import OurBlog from '@/components/custom-components/our-blog/our-blog';
import HeroSlider from '@/components/custom-components/hero-section/hero-slider';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className=''>
      <HeroSlider/>
      <OurBlog />
      <OurTeam />
      <Footer/>
    </div>
  );
}
