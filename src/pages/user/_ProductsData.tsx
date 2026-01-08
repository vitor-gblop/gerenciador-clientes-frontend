import { useParams } from "react-router-dom";
import { produtosExample } from "./components/shared/produtos.example";

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
            <h2>Informações do Produto</h2>
            <h2>{prod?.name}</h2>
            <p>{prod?.description}</p>
            <p>{prod?.price}</p>
            <p>{prod?.type}</p>
        </>
    );
}
