import Modal from "./shared/Modal";

export default function ItemsButtons() {
  return (
    <>
      <div className="container display-flex gap-1 list-btn-container">
        <Modal id="1" title="Adicionar" displayTitle="add" />
        {/* <Modal id="2" title="Remover" displayTitle="rem"/> */}
      </div>
    </>
  );
}
