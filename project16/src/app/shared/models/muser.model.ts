export interface Muser {
    id: number;
name: string;
    surname: string;
    patronymic: string;
    type: number;
    number: string;
    email: string;
    birthday: Date;
}

export enum MyWorkerType {
    it,
    sales,
    delivery,
    legal
}