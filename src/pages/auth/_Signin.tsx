
export default function Signin() {
    return (
        <>
            <div className="">
                <h2 className="text-align-center margin-top-2">Cadastro do Usuário</h2>
                <br />
                <form className="display-flex gap-1 flex-direction-column width-80p margin-auto margin-top-3">
                    <input type="text" name="name" id="name" placeholder="Nome" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="Senha" />
                    <button className="width-80p margin-auto" type="submit">Cadastrar</button>
                    <a href="/login">fazer login</a>
                </form>
            </div>
        </>
    )
}