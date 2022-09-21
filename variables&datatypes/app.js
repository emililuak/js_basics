let nimi =prompt("Sisestage oma nimi: ")
let lubatudKiirus = Number(prompt("Sisestage lubatud kiirus: "))
let tegelikKiirus = Number(prompt("Sisetage tegelik kiirus: "))

let trahv = (tegelikKiirus - lubatudKiirus) * 3
let tegeliktrahv = Math.min(trahv, 200)


console.log(nimi + ", kiiruse ületamise eest on teie trahv " + tegeliktrahv + " eurot")
