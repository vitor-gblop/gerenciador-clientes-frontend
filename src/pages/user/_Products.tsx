import NavigationBar from "./components/shared/Navigation";
import { produtosExample } from "./components/shared/produtos.example";

export default function Products() {
    return (
        <>
            <NavigationBar activeBar="produtos" />

            <div className="container costumers-container">
                <h3 className="text-align-center">Client List</h3>
                {produtosExample.map((item) => (
                    <>
                        <a
                            href={"/user/products/" + item.id}
                            className="costumer-link display-block width-100p padding-1"
                        >
                            {item.name}
                        </a>
                    </>
                ))}
            </div>
        </>
    );
}
