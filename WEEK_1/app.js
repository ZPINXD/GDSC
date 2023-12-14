const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});


function randomChoice() {
    const choice = ["Gunting", "Batu", "Kertas"];
    const randomNumber = Math.floor(Math.random() * choice.length);
    return choice[randomNumber];

}

console.clear();

console.log("Permainan Gunting Batu Kertas");

readline.question("Pilihan pemain: ",(result) => {
    const playerChoice = result;
    const computerChoice = randomChoice();

    console.log("Pilihan Kompute: " + computerChoice);
    
    if(playerChoice == "Gunting" && computerChoice == "Kertas"){
        console.log("Pemain menang!");
    }else if(playerChoice == "Batu"&&computerChoice == "Gunting"){
        console.log("Pemain menang!");
    }else if(playerChoice == "Kertas"&&computerChoice == "Batu"){
        console.log("Pemain menang!");
    }else if(playerChoice == computerChoice){
        console.log("Seimbang");
    }else{
        console.log("Komputer Menang!")
    }

    readline.close();
})

 