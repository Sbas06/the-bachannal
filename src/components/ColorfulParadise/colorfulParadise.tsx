import { ColorfulVector } from './colorfulVector';
import { paradiseMedia } from '@/lib/utils';
import './colorfulParadise.css';

export function Paradise() {
  return (
    <section className='relative pt-20 pb-16'>
      <ColorfulVector />

      <div className='flex flex-col items-center gap-y-28 text-6xl'>
        <h6 className='font-koulen'>A colorful paradise</h6>
        <div className='grid w-[85%] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-[9px]'>
          {paradiseMedia.map((item) => (
            <img src={item.url} alt={item.alt} width={300} height={456} />
          ))}
        </div>
      </div>
    </section>
  );
}
