export class Login{
    username:string;
    password:string;

    public toArray():string{
        return this.username + ',' + this.password;
    }
}