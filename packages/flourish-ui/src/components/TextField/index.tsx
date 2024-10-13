import React from 'react'
import { TextField as RATextField, Label, Input } from 'react-aria-components'
import { Customizable, Testable } from '../../common-props'

interface TextFieldProps extends Testable, Customizable {
  /* Accessible label for the component. */
  label: string
}

export const TextField = ({ label }: TextFieldProps) => {
  return (
    <RATextField>
      <Label>{label}</Label>
      <Input />
    </RATextField>
  )
}
