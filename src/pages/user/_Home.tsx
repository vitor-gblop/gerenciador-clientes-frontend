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

// import { useState } from "react";

// type Client = {
//     id: number;
//     name: string;
//     email: string;
//     phone?: string;
//     balance: number;
// };

// const initialClients: Client[] = [
//     {
//         id: 1,
//         name: "Empresa Alpha",
//         email: "contato@alpha.com",
//         phone: "(11) 99999-0001",
//         balance: 1200.5,
//     },
//     {
//         id: 2,
//         name: "Cliente Beta",
//         email: "beta@gmail.com",
//         phone: "(21) 98888-0002",
//         balance: 0,
//     },
//     {
//         id: 3,
//         name: "Loja Gama",
//         email: "financeiro@gama.com",
//         phone: "(31) 97777-0003",
//         balance: 300.75,
//     },
// ];

// export default function Dashboard() {
//     const [clients, setClients] = useState<Client[]>(initialClients);
//     const totalClients = clients.length;
//     const totalBalance = clients.reduce((s, c) => s + c.balance, 0);
//     const overdueCount = clients.filter((c) => c.balance > 0).length;

//     function handleAddClient() {
//         // implementação mínima: abrir prompt (substituir por modal em seguida)
//         const name = prompt("Nome do cliente");
//         if (!name) return;
//         const email = prompt("Email do cliente") || "";
//         const id = Math.max(0, ...clients.map((c) => c.id)) + 1;
//         setClients((prev) => [...prev, { id, name, email, balance: 0 }]);
//     }

//     function handleCharge(id: number) {
//         const value = prompt("Valor da cobrança (ex: 150.50)");
//         if (!value) return;
//         const v = Number(value.replace(",", ".")) || 0;
//         setClients((prev) =>
//             prev.map((c) =>
//                 c.id === id ? { ...c, balance: +(c.balance + v).toFixed(2) } : c
//             )
//         );
//     }

//     function handleEdit(id: number) {
//         const client = clients.find((c) => c.id === id);
//         if (!client) return;
//         const name = prompt("Nome", client.name) || client.name;
//         const email = prompt("Email", client.email) || client.email;
//         setClients((prev) =>
//             prev.map((c) => (c.id === id ? { ...c, name, email } : c))
//         );
//     }

//     return (
//         <div className="dashboard-root">
//             <header className="dashboard-header">
//                 <h2>Dashboard</h2>
//                 <div className="header-actions">
//                     <button className="btn primary" onClick={handleAddClient}>
//                         Novo Cliente
//                     </button>
//                     <button
//                         className="btn"
//                         onClick={() => alert("Navegar para cobranças")}
//                     >
//                         Cobranças
//                     </button>
//                 </div>
//             </header>

//             <section className="stats">
//                 <div className="stat-card">
//                     <div className="stat-value">{totalClients}</div>
//                     <div className="stat-label">Clientes</div>
//                 </div>
//                 <div className="stat-card">
//                     <div className="stat-value">
//                         R$ {totalBalance.toFixed(2)}
//                     </div>
//                     <div className="stat-label">Saldo total</div>
//                 </div>
//                 <div className="stat-card">
//                     <div className="stat-value">{overdueCount}</div>
//                     <div className="stat-label">Com pendência</div>
//                 </div>
//             </section>

//             <section className="clients">
//                 <div className="clients-header">
//                     <h3>Lista de Clientes</h3>
//                     <input
//                         placeholder="Buscar por nome ou email"
//                         className="search"
//                     />
//                 </div>

//                 <table className="clients-table">
//                     <thead>
//                         <tr>
//                             <th>Nome</th>
//                             <th>Email</th>
//                             <th>Telefone</th>
//                             <th>Saldo</th>
//                             <th>Ações</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {clients.map((c) => (
//                             <tr
//                                 key={c.id}
//                                 className={c.balance > 0 ? "overdue" : ""}
//                             >
//                                 <td>{c.name}</td>
//                                 <td>{c.email}</td>
//                                 <td>{c.phone || "-"}</td>
//                                 <td>R$ {c.balance.toFixed(2)}</td>
//                                 <td>
//                                     <button
//                                         className="btn small"
//                                         onClick={() => handleCharge(c.id)}
//                                     >
//                                         Cobrar
//                                     </button>
//                                     <button
//                                         className="btn small"
//                                         onClick={() => handleEdit(c.id)}
//                                     >
//                                         Editar
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </section>
//         </div>
//     );
// }
