export type Client = {
    id: number;
    name: string;
    email: string;
    phone?: string;
};

export const initialClients: Client[] = [
    {
        id: 1,
        name: "Alan",
        email: "vitor.gblop@gmail.com",
        phone: "(68) 99958-1056"
    },
    {
        id: 2,
        name: "João",
        email: "vitor.gblop@gmail.com",
        phone: "(68) 99958-1056"
    },
    {
        id: 3,
        name: "Andrey",
        email: "vitor.gblop@gmail.com",
        phone: "(68) 99958-1056"
    },
];
