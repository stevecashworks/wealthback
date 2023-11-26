const getSuffix=()=>{
 const Chars="1234567890"
 let suffix= ""
 for(let i=0;i<4;i++){
    suffix+= Chars[Math.floor(Math.random()*Chars.length)];

 }
 return suffix
}
module.exports=getSuffix;