import ItemsButtons from "./components/Buttons";
import NavigationBar from "./components/shared/Navigation";
import { produtosExample } from "./components/shared/produtos.example";

export default function Products() {
  return (
    <>
      <NavigationBar activeBar="produtos" />

      <div className="container list-container padding-top-2">
        <h3 className="text-align-center">Client List</h3>

        <ItemsButtons />

        <div>
          {
            //
            produtosExample.map((item) => (
              <div className="list-item-container">
                <a
                  href={"/user/products/" + item.id}
                  className="item display-block padding-1"
                >
                  {item.name}
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
