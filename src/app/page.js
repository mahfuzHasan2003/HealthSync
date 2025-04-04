import OurBlog from '@/components/custom-components/our-blog/OurBlog';
import CTA from '@/components/custom_component/cta/CTA';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <CTA />
      <OurBlog />{' '}
    </div>
  );
}
