let a=+prompt('nhập số a:');
isPrime(a)
function isPrime(a){
let n=0;
for(let i=1;i<=a;i++){
    if(a%i===0){
        n++;
    }
}
if(n==2){
    alert(a+' là số nguyên tố')
}else{
    alert(a+ " không phải là số nguyên tố")
}
}
