export class MyCard {
    id: number;
    name: string;
    status: boolean;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
      this.status = Math.round(Math.random()) ? true : false;
    }
  }