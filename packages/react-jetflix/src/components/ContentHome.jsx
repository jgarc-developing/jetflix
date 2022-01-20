import React from "react";

export const ContentHome = () => {
  const data = [
    {
      title: "FAQ’s",
      text: "A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.",
    },
    {
      title: "Información \nadicional",
      text: "A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-16">
      {data.map(({ title, text }) => (
        <ContentBox title={title} text={text} />
      ))}
    </div>
  );
};

const ContentBox = ({ title, text }) => {
  return (
    <div className="flex my-20 text-white">
      <div className="w-2/4 text-center font-mono">
        <p className="text-xl font-bold">{title}</p>
      </div>
      <div className="w-3/4 text-left">
        <p>{text}</p>
        <br />
        <p>{text}</p>
      </div>
    </div>
  );
};
