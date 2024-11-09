type ButtonProps = {
  buttonText: string;
  onClickCb: () => void;
  classNames: string;
};

const Button = (props: ButtonProps) => {
  const { buttonText, onClickCb, classNames } = props;

  return (
    <button
      onClick={onClickCb}
      className={`border border-solid border-white p-4 rounded-lg text-white bg-fuchsia-600 hover:text-fuchsia-600 hover:bg-white ${classNames}`}
    >
      {" "}
      {buttonText}
    </button>
  );
};

export default Button;
