"use client";
import {useRouter} from 'next/navigation'
function page() {
    const router = useRouter()
  const click = () => {
    alert("confirm it");
    router.push("/about");
  };
  return (
    <div>
      <h1>This is product pages</h1>
      <p>confirm the order</p>
      <button onClick={click}>Click the button </button>
    </div>
  );
}

export default page;
