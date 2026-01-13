import { useParams } from "react-router-dom";
import {
    type Client,
    initialClients,
} from "./components/shared/clientes.example";
import ConfirmationModal from "./components/shared/ConfirmationModal";
import NavigationBar from "./components/shared/Navigation";
import { produtosExample } from "./components/shared/produtos.example";

function find(id: string): Client | undefined {

    return initialClients.find((client) => parseInt(id) == client.id);
}
export default function CustomerData() {
    const { id } = useParams();
    const costumer: Client | undefined = id ? find(id) : undefined;

    // console.log(id);
    // console.log(find(id));

    return (
        <>
            <NavigationBar activeBar="clientes" />
            <article className="info-container">
                <h1>{costumer?.name}</h1>
                <p>{costumer?.description}</p>
                <hr />
            </article>
            <article className="info-container">
                <h2>Informações</h2>
                <p>
                    <strong>Email:</strong> {costumer?.email}
                </p>
                <p>
                    <strong>Telefone:</strong> {costumer?.phone}
                </p>
            </article>
            <hr />
            <article className="info-container">
                <h2>Produtos relacionados</h2>
                {costumer?.product_id.map((prodId) => {
                    const product = produtosExample.find(
                        (prod) => prod.id.toString() === prodId
                    );
                    return product ? (
                        <article
                            key={product.id}
                            className="product-box padding-1 border-radius-15 margin-bottom-1 margin-top-1"
                        >
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </article>
                    ) : null;
                })}
                
                {/* <article
                            key={'1'}
                            className="product-box padding-1 border-radius-15 margin-bottom-1 margin-top-1"
                        >
                            <h3>{"product.name"}</h3>
                            <p>{"product.description"}</p>
                        </article>
                 */}
                        
            </article>
            <div className="width-100p margin-bottom-3">
                <ConfirmationModal id="products-confirm-modal" title="Tem certeza?" displayTitle="Remover Produto" className="width-100p padding-1">Remover Cliente</ConfirmationModal>
            </div>
        </>
    );
}
