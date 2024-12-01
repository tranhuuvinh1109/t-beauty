import { Dialog, DialogPanel } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";

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
            className="w-full max-w-[700px] rounded-xl relative bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <button
              onClick={() => handleClose(false)}
              className=" absolute top-1.5 right-1.5 p-1 hover:bg-slate-400/40 rounded-full"
            >
              <IoIosClose fontSize={24} />
            </button>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
