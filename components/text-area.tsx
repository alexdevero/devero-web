import { ChangeEvent, memo } from 'react'

interface TextAreaProps {
  fieldName: string
  id: string
  label: string
  required?: boolean
  value: string
  onChange: (fieldName: string, value: string) => void
}

export const TextArea = memo((props: TextAreaProps) => (
  <>
    <label htmlFor="formEmail">{props.label}</label>

    <textarea
      className="form-control"
      id={props.id}
      name={props.id}
      required={props.required}
      value={props.value}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
        props.onChange(props.fieldName, event.target.value)
      }
    />
  </>
))
