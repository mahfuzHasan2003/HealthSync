import Articles from '@/components/custom_component/article/Articles';
import Team from '@/components/custom_component/team/Team';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className=''>
      <p>Home Page</p>
      {/* <Team /> */}
      <Articles />
    <div>
      <p className="font-serif text-5xl">Home Page</p>
      <p className="text-5xl">Click me</p>
      <Button className=""> Click me </Button>

      {/* <div className="shape">
        <svg viewBox="0 0 1921 1037" fill="none">
          <path d="M327.5 772L0.5 719.5V1037H1921V0L1915.5 181L1905 550.5L1900 717L1897 810.5C1897 821.7 1895.67 831.167 1895 834.5C1892.2 870.1 1871.5 905 1861.5 918C1841.9 944 1817 960.833 1807 966C1780.6 982 1750 988 1738 989C1713.2 991.8 1691.33 988.833 1683.5 987L1635.5 979.5L1269 921L799 847L327.5 772Z" fill="white"></path>
        </svg>
      </div> */}
    </div>
  );
}
