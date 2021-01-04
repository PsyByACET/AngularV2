export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
}
export enum MyWorkerType {
    programmer,
    designer,
    copywritter,
    manager,
}
 export let MyWorkersDatabase: MyWorker[] = [
     {id: 1, name: 'Иван', surname: 'Иванов', type: 0},
     {id: 2, name: 'Пётр', surname: 'Петров', type: 1},
     {id: 3, name: 'Леонид', surname: 'Голубков', type: 2},
     {id: 4, name: 'Иван', surname: 'Васильев', type: 3},
 ];