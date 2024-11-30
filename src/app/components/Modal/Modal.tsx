import { Dialog, DialogPanel } from "@headlessui/react";

type ModalProps = {
  isOpen: boolean;
  handleClose: (value: boolean) => void;
  children: React.ReactNode;
};
const Modal = ({ isOpen, handleClose, children }: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50 focus:outline-none "
      onClose={handleClose}
    >
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto bg-black/45">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-gold-hover/45 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
