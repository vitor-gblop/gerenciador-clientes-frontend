//
type NavigationProps = {
    activeBar: string;
};
export default function NavigationBar({ activeBar }: NavigationProps) {
    return (
        <div className="navigation-container width-100p margin-auto absolute">
            <nav className="display-flex container navbar-container">
                <a
                    href="/home"
                    className={
                        activeBar == "inicio"
                            ? "active nav-btn padding-1"
                            : "nav-btn padding-1"
                    }
                >
                    Inicio
                </a>

                <a
                    href="/user/clients"
                    className={
                        activeBar == "clientes"
                            ? "active nav-btn padding-1"
                            : "nav-btn padding-1"
                    }
                >
                    Clientes
                </a>

                <a
                    href="/user/products"
                    className={
                        activeBar == "produtos"
                            ? "active nav-btn padding-1"
                            : "nav-btn padding-1"
                    }
                >
                    Produtos
                </a>
            </nav>
        </div>
    );
}

("nav-btn padding-1");
("nav-btn padding-1");
("nav-btn padding-1");
