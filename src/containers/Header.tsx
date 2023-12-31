import { Icons, SendAMessageButton, VisitSubstack } from "../components";
import { images } from "../constant";

const Header = () => {
  return (
    <header className="header">
      <div className="text-gray flex_center gap-8 ">
        <div className=" flex_center gap-8">
          <h1 className="text-2xl md:text-3xl font-NeutonBold">Hi, I'm Sam.</h1>

          <img
            src={images.sam}
            alt="samuel's picture"
            loading="eager"
            className="h-[250px] w-[250px] rounded-full object-cover brightness-50"
          />
        </div>

        <article className="flex_center gap-8">
          <h2 className="text-3xl md:text-5xl font-NeutonRegular max-w-[900px]">
            A Software Developer with a pocket full of do. I build optimized web
            & mobile experiences.
          </h2>

          <p className="md:text-lg text-base font-NeutonRegular">
            Let's discuss how my passion and skills align with your goals,
            proving invaluable to the growth of your company/startup. Contact me
            now!
          </p>

          <Icons />
        </article>

        <div className="mt-5 lg:mt-[30px] flex flex-col gap-6">
          <SendAMessageButton label="Send an email" />

          <VisitSubstack />
        </div>
      </div>
    </header>
  );
};

export default Header;
