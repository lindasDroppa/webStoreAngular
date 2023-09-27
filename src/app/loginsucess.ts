export class LoginSuccess{
    
    constructor( public name:string,public token:string,public email:string,public id:string){
    }

    gettoken(){
        return this.token;
    }
    getname(){return this.name}
    getId(){return this.id}
    getemail(){return this.email}
}
