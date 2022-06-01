import { memo, ChangeEvent } from 'react'

interface FormInputProps {
  errorMessage: string;
  fieldName: string;
  hasError: boolean;
  id: string;
  label: string;
  required?: boolean;
  type: 'text' | 'password';
  value: string;
  onChange: (fieldName: string, value: string) => void;
}

export const FormInput = memo((props: FormInputProps) => (
  <>
    <label htmlFor={props.id}>{props.label}</label>

    <input
      type={props.type}
      className={`form-control${props.hasError ? ' is-invalid' : ''}`}
      name={props.id}
      id={props.id}
      required={props.required}
      value={props.value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(props.fieldName, event.target.value)}
    />

    <div className="invalid-feedback">
      {props.errorMessage}
    </div>
  </>
))
