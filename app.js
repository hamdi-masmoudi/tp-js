//ex1

document.getElementById("res1").innerHTML="bonjour les etudiants";
console.log("Bonjour les étudiants");

//ex2

let prenom = prompt("donner votre prenom");
if ( prenom != "") {
    document.getElementById("res2").innerHTML="bonjour "+prenom;
}
else {
    document.getElementById("res2").innerHTML="prenom non valide";
}

//ex3

let ch="";
for (let i = 1; i <= 5; i++) {
    ch=ch+"Log "+i+"<br>";
}
document.getElementById("res3").innerHTML=ch;

//ex4
function somme(a,b) {
    let s=0;
    for (let i=a+1;i<b;i++) {
        s=s+i;
    }
    return s;
}
function sommeP(a,b) {
    let s=0;
    for (let i=a+1;i<b;i++) {
        if (i % 2 == 0) {
            s=s+i;
        }
    }
    return s;
}
let a=Number(prompt("Donner a"));
let b=Number(prompt("Donner b"));
if (!isNaN(a) && !isNaN(b)){
    if (a>b) {
        let temp=a;
        a=b;
        b=temp;
    }
    let s1=somme(a,b);
    let s2=sommeP(a,b);
    document.getElementById("res4").innerHTML="Somme entre = "+s1+"<br>Somme des pairs = " + s2;
}
else {
    document.getElementById("res4").innerHTML="valeurs invalides";
}
//ex5
let dc1=Number(prompt("donner DC1"));
let dc2=Number(prompt("donner DC2"));
let ds=Number(prompt("donner DS"));
let moyenne=dc1*0.3+dc2*0.3+ds*0.4;
let resultat="";
if (moyenne>=10) {
    resultat="Admis";
}
else {
    resultat="Ajourné";
}
document.getElementById("res5").innerHTML="moyenne = "+moyenne +" mention = " + resultat;

//ex6
let n=0;
let t=[];
let s=0;
let x
do{
    x=Number(prompt("donner un note est L’entrée d’une valeur négative arrête la saisie"));
    if(x>=0){
        t[n]=x;
        n++;
    }
}while(x>=0);
for(let i=0; i<n; i++){
    s=s+t[i];
}
let moy=s/n
document.getElementById("res6").innerHTML=
    `le nombre de notes : ${n}<br> 
    la moyenne: ${moy} <br>
    la note minimale: ${min(t,n)}<br>
    la note maximale: ${max(t,n)}<br>`;
function min(t,n){
    let min=t[0];
    for (let i = 1; i < n; i++) {
        if (min>t[i])
            min=t[i];
    }
    return min;
}
function max(t,n){
   let m=t[0];
    for (let i = 1; i < n; i++) {
        if (m<t[i])
            m=t[i];
    }
    return m;
}