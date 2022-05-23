import { memo, ChangeEvent } from 'react'

interface FormInputProps {
  id: string;
  fieldName: string;
  label: string;
  hasError: boolean;
  type: 'text';
  errorMessage: string;
  required?: boolean;
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
      onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(props.fieldName, event.target.value)}
    />

    <div className="invalid-feedback">
      {props.errorMessage}
    </div>
  </>
))
