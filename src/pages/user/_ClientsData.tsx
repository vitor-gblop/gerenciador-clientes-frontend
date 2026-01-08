import { useParams } from "react-router-dom";
import {
    type Client,
    initialClients,
} from "./components/shared/clientes.example";

function find(id: any): Client | undefined {
    return initialClients.find((client) => id == client.id);
}
export default function CustomerData() {
    const { id } = useParams();
    const costumer: Client | undefined = find(id);

    // console.log(id);
    // console.log(find(id));

    return (
        <>
            <h2>Informações de cliente</h2>
            <h2>{costumer?.name}</h2>
            <p>Email: {costumer?.email}</p>
            <p>Telefone: {costumer?.phone}</p>
            <p>Saldo: R$ {costumer?.balance.toFixed(2)}</p>
        </>
    );
}
