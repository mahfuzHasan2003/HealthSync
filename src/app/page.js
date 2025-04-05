import OurBlog from '@/components/custom-components/our-blog/OurBlog';
import CTA from '@/components/custom-components/cta/CTA';
import { Button } from '@/components/ui/button';
import Footer from '@/components/custom-components/footer/Footer';
import Available from '@/components/custom-components/available/Available';
import OurPortfolio from '@/components/custom-components/oufr-portfolio/OurPortfolio';

export default function Home() {
  return (
    <div>
      <OurPortfolio />
      <Available />
      <CTA />
      <OurBlog /> <Footer />
    </div>
  );
}
