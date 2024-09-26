import Link from 'next/link';

export default function Home() {
  return (
    <div className='p-8'>
      <h1 className='text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Complete redux toolkit in Next Js with typescript
      </h1>
      <ul className='text-xl my-6 ml-6 list-decimal [&>li]:mt-2'>
        <li>Instalation and setup</li>
        <li>
          <Link href='/counter'>Implement counter with redux</Link>
        </li>
        <li>
          <Link href='/shop '>Implement cart functionality with redux</Link>
        </li>
        <li>
          <Link href='/form '>Implement multy step form with redux</Link>
        </li>
      </ul>
    </div>
  );
}
