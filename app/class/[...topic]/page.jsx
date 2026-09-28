import React from 'react'

async function page({ params }) {
  const { topic } = await params;

  return (
    <div>
      <p>This is segment the topic address</p>
      <p>{topic}</p>
    </div>
  );
}

export default page