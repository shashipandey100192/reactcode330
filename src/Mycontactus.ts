

const ele:string = "ravi singh";
const name:string = "rohit";
const age:number = 60;
const working:boolean = true;
const employees:string[]=["kumar","rohit","mohan","pooja"];
const employs:[string,number,boolean,string,string]=["kumar",20,true,"working","5ft"];

function Mycontact()
{
   return(
    `${name} ${employees} ${working} ${employs}`
   )
}

export default Mycontact;