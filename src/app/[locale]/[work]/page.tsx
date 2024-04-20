import React from 'react';

interface Params {
  params: {
    locale: string;
    work: string;
  };
}

const WorkPage = ({ params: { work } }: Params) => {
  return (
    <div>
      <h1>{work}</h1>
    </div>
  );
};

export default WorkPage;
