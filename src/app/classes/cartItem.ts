export class CartItem{
    productId:string | undefined;
    numberOfProduct:number | undefined;
    constructor(id?:string,numberOfProduct?:number){
            this.productId=id;
            this.numberOfProduct=numberOfProduct;
    }
}





