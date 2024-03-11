const Input = ({ ...props }) => (
  <div>
    <label>{props.label}</label>
    <input {...props} />
  </div>
);

export default Input;
