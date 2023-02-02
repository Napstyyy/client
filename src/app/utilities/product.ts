export default class product{
    id:number = 0;
    name:string = "";
    minimun:number = 0;
    amount:number = 0;
    maximun:number = 0;
    image:string = "";
    constructor(id:number, name:string, minimun:number, amount:number, maximun:number, image:string){
        this.id = id;
        this.name =name;
        this.minimun = minimun;
        this.amount = amount;
        this.maximun = maximun;
        this.image = image;
    }
}