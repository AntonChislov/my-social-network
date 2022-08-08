import React from "react"
import classes from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

  const hasError = meta.error && meta.touched
  return (
    <div className={hasError && classes.formControl + ' ' + classes.error}>
      <textarea {...input} {...props} />
      <div>
        {hasError && <span className={classes.span}>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {

  const hasError = meta.error && meta.touched
  return (
    <div className={hasError && classes.formControl + ' ' + classes.error}>
      <input {...input} {...props} />
      <div>
        {hasError && <span className={classes.span}>{meta.error}</span>}
      </div>
    </div>
  )
}