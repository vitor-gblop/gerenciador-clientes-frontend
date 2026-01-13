type GenericModalProps = {
  id: string;
  title?: string;
  displayTitle?: string;
  className?: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
};

export default function ConfirmationModal({
  id,
  title,
  displayTitle,
  className,
  children,
  onConfirm,
  onCancel,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}: GenericModalProps) {
  function openModal() {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    if (modal) modal.showModal();
  }

  function handleConfirm(e: React.MouseEvent) {
    e.preventDefault();
    onConfirm?.();
    closeModal();
  }

  function handleCancel(e: React.MouseEvent) {
    e.preventDefault();
    onCancel?.();
    closeModal();
  }

  function closeModal() {
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
          <h2>{title || "Confirmação"}</h2>
          {children}
          <div className="display-flex flex-center-items margin-top-1">
            <button className="btn" onClick={handleConfirm}>
              {confirmText}
            </button>
            <button className="btn" onClick={handleCancel}>
              {cancelText}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
