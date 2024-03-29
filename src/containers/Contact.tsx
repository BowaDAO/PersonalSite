import { SendAMessageButton } from "../components";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="text-4xl text-gray font-NeutonBold ">
        Say Hello, Anytime!{" "}
      </h2>

      <div className="flex_center gap-8  max-w-5xl font-NeutonRegular ">
        <p className="md:text-xl text-lg">
          Thank you for visiting my page. Do you want to discuss hiring me for
          your software development team or just want to connect? I am happy to
          connect with you. Send me a quick message via email or my socials.
          I'll get to it in a few...
        </p>

        <SendAMessageButton label="Send a message now" />
      </div>
    </section>
  );
};

export default Contact;
