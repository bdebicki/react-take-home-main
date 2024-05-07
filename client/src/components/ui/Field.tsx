import React, { ReactElement } from 'react'
import * as Form from '@radix-ui/react-form'

type FieldProps = {
  label: string
  children: ReactElement
}

export const Field = ({ label, children }: FieldProps) => (
  <Form.Field name={label.replace(' ', '-').toLowerCase()}>
    <Form.Label>{label}</Form.Label>
    <Form.Control asChild>{children}</Form.Control>
  </Form.Field>
)
