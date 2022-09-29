let ringide_arv = Number(prompt("Sisesta ringide arv: "))
let porgandid_kokku = 0
let ring = 1
while (ring <= ringide_arv){
    //console.log(`${ring}. ring`)
    if(ring % 2 == 0){
        //console.log(`Saab ${ring} porgandit`)
        porgandid_kokku = porgandid_kokku + ring // porgangid_kokku += ring
        //console.log(porgandid_kokku)
    }
    ring++
}
console.log(`Porgandite koguarv on ${porgandid_kokku}.`)
