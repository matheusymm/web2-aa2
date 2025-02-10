const Input = ({ type, id, placeholder }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className="bg-slate-400 rounded p-2 w-full text-slate-800 placeholder:text-slate-800 lg:p-4 border-2 border-slate-800"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
