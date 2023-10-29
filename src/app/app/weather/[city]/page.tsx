import React from "react";

interface PageProps {
  params: {
    city: string;
  };
}

const page: React.FC<PageProps> = ({ params }) => {
  return <div>{params.city}</div>;
};

export default page;
