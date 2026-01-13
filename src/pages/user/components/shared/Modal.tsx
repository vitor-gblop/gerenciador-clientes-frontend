type GenericModalProps = {
  id: string;
  title?: string;
  displayTitle?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Modal({
  id,
  title,
  displayTitle,
  className,
  children,
}: GenericModalProps) {
  //   const [loading, setLoading] = useState(false);

  function openModal() {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    if (modal) modal.showModal();
  }

  function closeModal(e: React.MouseEvent) {
    e.preventDefault();
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    if (modal) modal.close();
  }

  return (
    <>
      <button className={className || "btn"} onClick={openModal}>
        {displayTitle}
      </button>

      <dialog id={id} className="modal">
        <form method="dialog">
          <h2>{title || "Modal"}</h2>
          {children}
          <div className="display-flex flex-center-items margin-top-1">
            <button className="btn" onClick={closeModal}>
              Mudar status
            </button>

            <button className="btn" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
