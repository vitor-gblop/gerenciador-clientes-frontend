import ItemsButtons from "./components/Buttons";
import NavigationBar from "./components/shared/Navigation";
import { initialClients } from "./components/shared/clientes.example";

export default function Clients() {
  return (
    <>
      <NavigationBar activeBar="clientes" />

      <div className="container list-container padding-top-2">
        <h3 className="text-align-center">Client List</h3>

        <ItemsButtons />

        <div>
          {
            //
            initialClients.map((client) => (
              <div className="list-item-container">
                <a
                  href={"/user/clients/" + client.id}
                  className="item display-block padding-1"
                >
                  {client.name}
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
