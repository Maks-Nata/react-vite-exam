export  interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    image: string;
    password?: string;
}

export interface IBaseModelUsers {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}