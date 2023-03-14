import React, { FC } from "react";

interface IField {
  type: string;
  id: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
  value: string;
  error?: string;
}

const Field: FC<IField> = ({
  type,
  id,
  placeholder,
  onChange,
  value,
  error,
}) => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  const onFocusField = () => {
    setIsFocus(true);
  };

  const onBlurField = () => {
    if (value.length === 0) {
      setIsFocus(false);
    }
  };

  return (
    <div className="relative w-full py-1.5 pt-3 h-full">
      <label
        className={`opacity-[0.65] absolute font-light ${
          isFocus ? "top-0" : "top-[25px]"
        } left-0 ease-linear duration-150 cursor-text`}
        htmlFor={id}
      >
        {placeholder}
      </label>
      <input
        onChange={onChange}
        value={value}
        onFocus={onFocusField}
        onBlur={onBlurField}
        className="border-b border-white bg-transparent w-full py-2"
        type={type}
        id={id}
      />
      {error && (
        <p className="text-[#EB414B] text-[12px] absolute -bottom-[15px] left-0">
          {error}
        </p>
      )}
    </div>
  );
};

export default Field;
