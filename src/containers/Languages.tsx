const Languages = () => {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-20 text-gray w-full py-12 md:py-20">
      <h2 className=" text-4xl font-NeutonBold">Technologies </h2>
      <div className="flex items-center justify-center flex-wrap md:gap-8 gap-6 px-2 py-[50px] md:py-[64px]  border-y-[1px] border-y-gray bg-grey w-full font-NeutonRegular md:text-xl text-lg">
        <p>JavaScript</p>
        <p> TypeScript</p>
        <p> React.JS</p>
        <p> Next.JS</p>
        <p>React Native</p>
        <p>Redux</p>
        <p>Tailwind CSS </p>
        <p>NodeJS</p>
        <p>Express.JS</p>
        <p> MongoDB</p>
        <p> Firebase</p>
      </div>
    </section>
  );
};

export default Languages;
