import NavigationBar from "./components/shared/Navigation";

const user = JSON.parse(sessionStorage.getItem("user") || "{}");
export default function Home() {
    return (
        <>
            <div className="">
                <header>
                    <h2 className="text-align-center ">Dashboard</h2>
                    <h2>1000</h2>
                </header>
                <p>Bem vindo! {user.name}</p>
                <NavigationBar activeBar="inicio" />
            </div>
        </>
    );
}
