import Articles from '@/components/custom_component/article/Articles';
import CTA from '@/components/custom_component/cta/CTA';
import Team from '@/components/custom_component/team/Team';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <CTA />
      <Articles />
    </div>
  );
}
