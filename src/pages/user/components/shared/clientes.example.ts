export type Client = {
    id: number;
    name: string;
    description?: string;
    email: string;
    phone?: string;
    product_id: string[];
};

export const initialClients: Client[] = [
    {
        id: 1,
        name: "Alan",
        description: "colaborador eficiente",
        email: "vitor.gblop@gmail.com",
        phone: "(68) 99958-1056",
        product_id: ["1"],
    },
    {
        id: 2,
        name: "João",
        email: "vitor.gblop@gmail.com",
        phone: "(68) 99958-1056",
        product_id: ["1", "2"],
    },
    {
        id: 3,
        name: "Andrey",
        email: "vitor.gblop@gmail.com",
        phone: "(68) 99958-1056",
        product_id: ["1","3"],
    },
];
