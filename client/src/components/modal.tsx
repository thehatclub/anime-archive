import { FileOpen, Edit, Delete } from "./modals";

export default function Modal({ type, toggleModal, xmlData, setXmlData }: any) {
  enum ModalType {
    FileOpen = "fileOpen",
    Edit = "edit",
    Delete = "delete",
  }
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-dark-900">
        {type == ModalType.FileOpen ? (
          <FileOpen
            toggleModal={toggleModal}
            xmlData={xmlData}
            setXmlData={setXmlData}
          />
        ) : type === ModalType.Edit ? (
          <Edit toggleModal={toggleModal} />
        ) : type === ModalType.Delete ? (
          <Delete toggleModal={toggleModal} />
        ) : null}
      </div>
    </>
  );
}
