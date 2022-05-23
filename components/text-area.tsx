import { ChangeEvent, memo } from 'react'

interface TextAreaProps {
  id: string;
  fieldName: string;
  label: string;
  required?: boolean;
  onChange: (fieldName: string, value: string) => void;
}

export const TextArea = memo((props: TextAreaProps) => (
  <>
    <label htmlFor="formEmail">{props.label}</label>

    <textarea
      className="form-control"
      id={props.id}
      name={props.id}
      required={props.required}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => props.onChange(props.fieldName, event.target.value)}
    />
  </>
))
