import React, { ReactElement, ReactNode } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Button } from './Button'
import { IconButton } from './IconButton'
import { Headline } from './Headline'

type Props = {
  children: ReactNode
  title: string
  trigger: ReactElement
  isPrimaryDisabled?: boolean
  primaryBtnLabel?: string
  primaryAction: () => void
  cancelBtnLabel?: string
  cancelAction?: () => void
  onOpen?: () => void
}

export const Dialog = ({
  children,
  title,
  trigger,
  isPrimaryDisabled,
  primaryBtnLabel = 'Ok',
  primaryAction,
  cancelBtnLabel = 'Cancel',
  cancelAction,
  onOpen
}: Props) => (
  <DialogPrimitive.Root modal onOpenChange={onOpen}>
    <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="pointer-events-none fixed inset-0 z-10 bg-gray-900/50" />
      <DialogPrimitive.Content
        onPointerDownOutside={(e) => {
          e.preventDefault()
        }}
        className="fixed left-1/2 top-1/2 z-20 flex max-h-[85vh] w-[50vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-white p-6"
      >
        <DialogPrimitive.Title asChild>
          <Headline level={3} className="mb-4 pr-7">
            {title}
          </Headline>
        </DialogPrimitive.Title>
        <section className="-mx-6 overflow-auto px-6">{children}</section>
        <footer className="mt-4 flex justify-end gap-4">
          <DialogPrimitive.Close asChild>
            <Button variant="secondary" onClick={cancelAction}>
              {cancelBtnLabel}
            </Button>
          </DialogPrimitive.Close>
          <Button onClick={primaryAction} isDisabled={isPrimaryDisabled}>
            {primaryBtnLabel}
          </Button>
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
