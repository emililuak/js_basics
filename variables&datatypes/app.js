let poial_poisid = Number(prompt("Mitu pöialpoissi tahab õuna?: "))

lumivalgekeounad = 14
let poialpoiss = 1
while(poialpoiss <= poial_poisid){
    let ounad = Math.ceil(Math.random() * 2)
    console.log(ounad)
    lumivalgekeounad -= ounad
    poialpoiss++
}
console.log(`lumivalgekesele jäi ${lumivalgekeounad}`)




