import { Modal } from '@mantine/core'

type ModalProps = {
  active: boolean
  close: Function
  children: JSX.Element[] | JSX.Element
}

export function ModalBox({ active, close, children }: ModalProps) {
  return (
    <>
      <Modal
        opened={active}
        size='lg'
        centered={true}
        overlayColor={'gray'}
        overlayOpacity={0.55}
        overlayBlur={3}
        onClose={() => close()}
        title='Your pizza is not complete'
        styles={{
          body: {
            fontSize: '1.8em',
            textAlign: 'center'
          }
        }}
      >
        {children}
      </Modal>
    </>
  )
}
