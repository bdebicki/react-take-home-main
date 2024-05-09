import React, { ReactElement, ReactNode } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ButtonIcon, Cross2Icon } from '@radix-ui/react-icons'
import { Button } from './Button'
import { IconButton } from './IconButton'
import { Headline } from './Headline'

type Props = {
  children: ReactNode
  title: string
  trigger: ReactElement
  primaryBtnLabel?: string
  primaryAction: () => void
  cancelBtnLabel?: string
  cancelAction?: () => void
}

export const Dialog = ({
  children,
  title,
  trigger,
  primaryBtnLabel = 'Ok',
  primaryAction,
  cancelBtnLabel = 'Cancel',
  cancelAction
}: Props) => (
  <DialogPrimitive.Root modal>
    <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="pointer-events-none fixed inset-0 z-10 bg-gray-900/50" />
      <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-20 max-h-[80vh] w-[50vw] max-w-96 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6">
        <DialogPrimitive.Title asChild>
          <Headline level={3} className="mb-4 pr-7">
            {title}
          </Headline>
        </DialogPrimitive.Title>
        <section>{children}</section>
        <footer className="mt-4 flex justify-end gap-4">
          <DialogPrimitive.Close asChild>
            <Button variant="secondary" onClick={cancelAction}>
              {cancelBtnLabel}
            </Button>
          </DialogPrimitive.Close>
          <DialogPrimitive.Close asChild>
            <Button onClick={primaryAction}>{primaryBtnLabel}</Button>
          </DialogPrimitive.Close>
        </footer>
        <DialogPrimitive.Close asChild>
          <IconButton
            label="close"
            icon={<Cross2Icon />}
            className="absolute right-6 top-6"
          />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
)
