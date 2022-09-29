let täring_arv = Number(prompt("sisesta vajalik täringute arv: "))

for (let kord = 1; kord <= täring_arv; kord++){
    let täring = Math.ceil(Math.random() * 6)
    console.log(täring)
}