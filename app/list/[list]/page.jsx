async function page({ params }) {
  const { list } = await params;

  return (
    <div>
      <li>User List number {list}</li>
    </div>
  );
}

export default page;
