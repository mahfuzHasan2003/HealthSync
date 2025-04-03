import OurTeam from '@/components/custom-components/our-team/our-team';
import OurBlog from '@/components/custom-components/our-blog/our-blog';

export default function Home() {
  return (
    <div className=''>
      <OurBlog />
      <OurTeam />
    </div>
  );
}
