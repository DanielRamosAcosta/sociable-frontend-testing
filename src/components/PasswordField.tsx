import "./PasswordField.css";

export type PasswordFieldProps = {
  id: string;
  labelText: string;
  value: string;
  onChange: (value: string) => void;
};

export const PasswordField = ({
  id,
  labelText,
  value,
  onChange,
}: PasswordFieldProps) => {
  return (
    <div className="password-field-container">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type="password"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </div>
  );
};
