import { memo, useCallback } from 'react'

interface FormBotCheckProps {
  hasError: boolean;
  id: string;
  label: string;
  onChange: (fieldName: string, value: string) => void;
}

export const FormBotCheck = memo((props: FormBotCheckProps) => {
  const onClick = useCallback(() => {
    props.onChange('bot', '')
  }, [props.onChange])

  return (
    <div className="d-none" aria-hidden="true">
      <label htmlFor={props.id}>{props.label}</label>

      <input
        type="checkbox"
        className={`form-control${props.hasError ? ' is-invalid' : ''}`}
        name="formBot"
        id="formBot"
        onClick={onClick}
      />
    </div>
  )
})
