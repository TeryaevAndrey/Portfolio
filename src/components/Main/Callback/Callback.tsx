import React, { FC } from "react";
import CallbackForm from "./CallbackForm";
import Field from "./Field";

const Callback: FC = () => {
  console.log(process.env.NEXT_PUBLIC_TOKEN);

  return (
    <section className="bg-callback-gradient py-6 more-md:py-20" id="callback">
      <div className="container-app">
        <CallbackForm />
      </div>
    </section>
  );
};

export default Callback;
