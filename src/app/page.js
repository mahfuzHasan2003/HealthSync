import OurBlog from '@/components/custom-components/our-blog/OurBlog';
import CTA from '@/components/custom-components/cta/CTA';
import { Button } from '@/components/ui/button';
import Footer from '@/components/custom-components/footer/Footer';

export default function Home() {
  return (
    <div>
      <CTA />
      <OurBlog /> <Footer />
    </div>
  );
}
