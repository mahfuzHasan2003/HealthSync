import Articles from '@/components/custom_component/article/Articles';
import Team from '@/components/custom_component/team/Team';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className=''>
      <p>Home Page</p>
      {/* <Team /> */}
      <Articles />
    </div>
  );
}
