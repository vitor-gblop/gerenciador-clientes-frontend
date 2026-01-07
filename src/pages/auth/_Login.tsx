
export default function Login() {
    return (
        <>
            <div className="">
                <h2 className="text-align-center margin-top-2">Login do Usuário</h2>
                <br />
                <form className="display-flex gap-1 flex-direction-column width-80p margin-auto margin-top-3">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button className="width-80p margin-auto" type="submit">Entrar</button>
                    <a href="/signin">fazer cadastro</a>
                </form>
            </div>
        </>
    )
}