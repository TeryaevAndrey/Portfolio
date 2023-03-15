import { AxiosResponse } from "axios";
import React, { FC } from "react";
import Field from "./Field";
import axios from "axios";
import { setSuccess } from "@/store/success";
import { setError } from "@/store/error";

interface IFormField {
  value: string;
  isError: boolean;
}

const CallbackForm: FC = () => {
  const [name, setName] = React.useState<IFormField>({
    value: "",
    isError: false,
  });
  const [email, setEmail] = React.useState<IFormField>({
    value: "",
    isError: false,
  });
  const [telegram, setTelegram] = React.useState<IFormField>({
    value: "",
    isError: false,
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ value: e.target.value, isError: false });
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ value: e.target.value, isError: false });
  };

  const onChangeTelegram = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram({ value: e.target.value, isError: false });
  };

  const formHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (!name.isError && !email.isError && !telegram.isError) {
      await axios
        .post("/api/callback", {
          name: name.value,
          email: email.value,
          telegram: telegram.value,
        })
        .then((res: AxiosResponse) => {
          setSuccess({
            text: res.data.message,
            isSuccess: true,
          });

          setTimeout(() => {
            setSuccess({
              text: "",
              isSuccess: false,
            });
          }, 2500);
        })
        .catch((err) => {
          setError({
            text: err.response.data.message,
            isError: true,
          });

          setTimeout(() => {
            setError({
              text: "",
              isError: false,
            });
          }, 2500);
        });
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={formHandler}
      className="bg-[#ADB8F1] shadow-[0px_0px_15px_1px_rgba(255,255,255,0.25)] rounded-[30px] mt-6 md:mt-12 py-6 px-7 more-md:py-12 more-md:px-20"
    >
      <h5 className="text-xl text-center max-w-[200px] more-md:max-w-full mx-auto more-md:text-2xl">
        Заполните форму, и я свяжусь с вами
      </h5>
      <div className="flex flex-col more-md:grid more-md:grid-cols-2 gap-6 more-md:gap-11 more-md:gap-y-15 mt-7 more-md:mt-14">
        <Field
          type="text"
          id="nameField"
          placeholder="Имя"
          onChange={onChangeName}
          value={name.value}
          error={
            name.isError
              ? "Введите настоящее имя без чисел и символов"
              : undefined
          }
        />
        <Field
          type="text"
          id="emailField"
          placeholder="Эл.почта"
          onChange={onChangeEmail}
          value={email.value}
          error={email.isError ? "Пример: test@test.ru" : undefined}
        />
        <Field
          type="text"
          id="telegramField"
          placeholder="Telegram (необязательно)"
          onChange={onChangeTelegram}
          value={telegram.value}
        />
      </div>
      <button
        onClick={() => {
          if (
            !/^[A-Za-z\s, А-Яа-яё]+$/.test(name.value) &&
            name.value.length !== 0
          ) {
            setName({ value: "", isError: true });
          }

          if (!/^\S+@\S+\.\S+$/.test(email.value) && email.value.length !== 0) {
            setEmail({ value: "", isError: true });
          }
        }}
        className="mx-auto mt-10 bg-btn-flipped-gradient min-h-[40px] px-11 py-2.5 rounded-main flex justify-center items-center gap-2 ease-linear duration-150 hover:shadow-[10px_10px_0_#6888b1] more-md:ml-0 more-md:mr-auto"
      >
        Отправить
        {loading && (
          <div className="flex items-center justify-center">
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        )}
      </button>
    </form>
  );
};

export default CallbackForm;
