'use client';

import { useRouter } from 'next/navigation';

function page() {
  const router = useRouter();

  return (
    <div>
      singUp
      <button type="button" onClick={() => router.push('/class')}>
        click me
      </button>
    </div>
  );
}

export default page;
