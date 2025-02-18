export class MenuItem {
    name: string = '';
    price: number = 0;
    icon: string = '';
    count: number = 0;
    color: string = '';
    constructor(
      name?: string,
      price?: number,
      icon?: string,
      count?: number,
      color?: string
    ) {}
    addCount(n: number) {
      this.count += n;
    }
  }
  
  export class Table {
    id: string = '';
    name: string = '';
    area: string = '';
    icon: string = '';
    bill: Bill = new Bill();
    color: string = '';
    constructor() {}
  }
  
  export class Bill {
    id: string = '';
    listArray: ItemServing[] = [];
    subTotal: number = 0;
    total: number = 0;
    VAT: number = 0;
    status: number = 0;
    method: number = 0;
    constructor(id?: string, list?: ItemServing[]) {}
  }
  
  export class ItemServing {
    name: string = '';
    price: number = 0;
    id: string = '';
    image: string = '';
    constructor(id?: string, name?: string, price?: number, image?: string) {}
  }