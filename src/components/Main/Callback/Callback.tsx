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
    <section className="bg-callback-gradient py-6 more-md:py-20">
      <div className="container-app">
        <form className="bg-[#ADB8F1] shadow-[0px_0px_15px_1px_rgba(255,255,255,0.25)] rounded-[30px] mt-6 md:mt-12 py-6 px-7">
          <h5 className="text-xl text-center max-w-[200px] mx-auto">
            Заполните форму, и я свяжусь с вами
          </h5>
          <div className="flex flex-col gap-4 mt-7">
            <Field
              type="text"
              id="nameField"
              placeholder="Имя"
              onChange={onChangeName}
              value={name}
              error="asdsad"
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
          <button className="mx-auto mt-10 bg-btn-flipped-gradient min-h-[40px] px-11 py-2.5 lg:py-5 rounded-main flex justify-center items-center ease-linear duration-150 hover:shadow-[10px_10px_0_#6888b1]">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Callback;
