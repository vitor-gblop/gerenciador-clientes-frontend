import { useParams } from "react-router-dom";
import { produtosExample } from "./components/shared/produtos.example";
import NavigationBar from "./components/shared/Navigation";
import ConfirmationModal from "./components/shared/ConfirmationModal";

function find(id: any) {
    return produtosExample.find((item) => id == item.id);
}
export default function ProductsData() {
    const { id } = useParams();
    const prod = find(id);

    // console.log(id);
    // console.log(find(id));

    return (
        <>
            <NavigationBar activeBar="produtos" />
            <article className="info-container">
                <h1 className="text-align-center">{prod?.name}</h1>
                <p className="text-align-center">{prod?.description}</p>
            </article>
            
            <hr />

            <article className="info-container">
                <p>{prod?.description}</p>
                <p>{prod?.price} R$</p>
                <h3>{prod?.type}</h3>
            </article>

            <div className="width-100p margin-bottom-3">
                <ConfirmationModal id="products-confirm-modal" title="Tem certeza?" displayTitle="Remover Produto" className="width-100p padding-1">Remover Produto</ConfirmationModal>
            </div>
        </>
    );
}
