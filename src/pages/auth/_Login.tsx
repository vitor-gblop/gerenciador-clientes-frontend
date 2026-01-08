import { useState } from "react";
import { usuariosExample } from "../user/components/shared/user.example";

function _login(email: string, password: string) {
    let user: any = usuariosExample.find(
        (user) => user.email == email && user.password == password
    );

    if (user) {
        sessionStorage.setItem("user", JSON.stringify(user))
        window.location.href = "/home";
    } else {
        alert("Email ou senha incorretos.");
    }
}

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>
            <div className="">
                <h2 className="text-align-center margin-top-2">
                    Login do Usuário
                </h2>
                <br />
                <form className="display-flex gap-1 flex-direction-column width-80p margin-auto margin-top-3">
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button
                        className="width-80p margin-auto"
                        type="submit"
                        onClick={e => {
                            e.preventDefault();
                            _login(email, senha);
                        }}
                    >
                        Entrar
                    </button>
                    <a href="/signin">fazer cadastro</a>
                </form>
            </div>
        </>
    );
}
