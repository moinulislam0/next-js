async function page({ params }) {
  const { topic } = await params;

  return (
    <div>
      <p>This is segment the topic address</p>
      <p>{topic}</p>
    </div>
  );
}

export default page;

export async function generateMetadata({ params }) {
  const { topic } = await params;

  return {
    title: `Topic - ${topic || "moinul"}`,
    description: "this is hablu programmer websites",
  };
}
