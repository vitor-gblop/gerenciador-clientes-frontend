import NavigationBar from "./components/shared/Navigation";
import { initialClients } from "./components/shared/clientes.example";

export default function Clients() {
    return (
        <>
            <NavigationBar activeBar="clientes" />

            <div className="container list-container">
                <h3 className="text-align-center">Client List</h3>
                {initialClients.map((client) => (
                    <>
                        <a
                            href={"/user/clients/" + client.id}
                            className="item-link display-block width-100p padding-1"
                        >
                            {client.name}
                        </a>
                    </>
                ))}
            </div>
        </>
    );
}
