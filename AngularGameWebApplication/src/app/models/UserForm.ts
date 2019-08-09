export class UserForm{
    username:string;
    name:string;
    password:string;
    reTypePassword:string;

    public toArray():string{
        return this.username + "," + this.name + "," + this.password + "," + this.reTypePassword;
    }
}