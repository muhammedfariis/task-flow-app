function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className=" h-8 w-20 bg-blue-950 text-white rounded-lg hover:bg-green-600">
        {text}
      </button>
    </>
  );
}

export default Button;
