let kordamise_arv = Number(prompt("Sisestage, mitu x äratada: "))

let kord = 1 // tsükli juhtimismuutuja algväärtus
//korduvad tegevused
while(kord <= kordamise_arv){
    console.log(`Tõuse ja sära - ${kord}. kord!`)
    kord++
}
console.log("Programmi lõpp")