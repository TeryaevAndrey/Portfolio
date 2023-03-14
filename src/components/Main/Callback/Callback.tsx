import React, { FC } from "react";
import Field from "./Field";

const Callback: FC = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [telegram, setTelegram] = React.useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeTelegram = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram(e.target.value);
  };

  return (
    <section className="bg-callback-gradient py-6 more-md:py-20" id="callback">
      <div className="container-app">
        <form className="bg-[#ADB8F1] shadow-[0px_0px_15px_1px_rgba(255,255,255,0.25)] rounded-[30px] mt-6 md:mt-12 py-6 px-7 more-md:py-12 more-md:px-20">
          <h5 className="text-xl text-center max-w-[200px] more-md:max-w-full mx-auto more-md:text-2xl">
            Заполните форму, и я свяжусь с вами
          </h5>
          <div className="flex flex-col more-md:grid more-md:grid-cols-2 gap-4 more-md:gap-11 more-md:gap-y-15 mt-7 more-md:mt-14">
            <Field
              type="text"
              id="nameField"
              placeholder="Имя"
              onChange={onChangeName}
              value={name}
            />
            <Field
              type="text"
              id="emailField"
              placeholder="Эл.почта"
              onChange={onChangeEmail}
              value={email}
            />
            <Field
              type="text"
              id="telegramField"
              placeholder="Telegram (необязательно)"
              onChange={onChangeTelegram}
              value={telegram}
            />
          </div>
          <button className="mx-auto mt-10 bg-btn-flipped-gradient min-h-[40px] px-11 py-2.5 rounded-main flex justify-center items-center ease-linear duration-150 hover:shadow-[10px_10px_0_#6888b1] more-md:ml-0 more-md:mr-auto">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Callback;
