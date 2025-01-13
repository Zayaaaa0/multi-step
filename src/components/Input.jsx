export const Input = ({ label, placeholder }) => {
  return (
    <div>
      <p>{label}</p>
      <input placeholder={placeholder} />
    </div>
  );
};
