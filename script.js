const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const roll = document.querySelector(".dice");

let score00 = 0;
let score01 = 0;
let score000 = 0;
let score001 = 0;
let player = 0;
let playing = true;

score0.textContent = 0;
score1.textContent = 0;
roll.classList.add("hidden");

document.querySelector(".btn--roll").addEventListener('click', function () {
    if (playing) {
        const num = Math.trunc(Math.random() * 6) + 1;
        console.log(num);

        roll.classList.remove("hidden");
        roll.src = `dice-${num}.png`;


        if (num != 1) {
            if (player == 0) {
                score00 += num;
                console.log(score00);

                if (score00 >= 20) {
                    score0.textContent = score00;
                    playing = false;
                    roll.classList.add("hidden");

                    console.log("Winner is Player 0...");

                    document.querySelector(".player--0").classList.remove("player--active");

                    document.querySelector(".player--0").classList.add("player--winner");
                }

                document.querySelector(`#current--${player}`).textContent = score00;
            }
            else if (player == 1) {
                score000 += num;
                console.log(score000);

                if (score000 >= 20) {
                    playing = false;
                    score1.textContent = score000;
                    roll.classList.add("hidden");

                    console.log("Winner is Player 1...");

                    document.querySelector(".player--1").classList.remove("player--active");

                    document.querySelector(".player--1").classList.add("player--winner");
                }

                document.querySelector(`#current--${player}`).textContent = score000;
            }

        }
        else {
            if (player == 0) {
                score01 += score00;
                score0.textContent = score01;

                document.querySelector(".player--0").classList.remove("player--active");

                document.querySelector(".player--1").classList.add("player--active");
            }
            else if (player == 1) {
                score001 += score000;
                score1.textContent = score001;

                document.querySelector(".player--1").classList.remove("player--active");

                document.querySelector(".player--0").classList.add("player--active");
            }
            document.querySelector(`#current--${player}`).textContent = 0;

            player = player == 0 ? 1 : 0;
            score00 = 0;
            score000 = 0;
        }
    }
});

document.querySelector(".btn--hold").addEventListener('click', function () {
    if (playing) {
        if (player == 0) {
            score01 += score00;
            score0.textContent = score01;

            if (score01 >= 20) {
                playing = false;
                score0.textContent = score01;
                roll.classList.add("hidden");

                console.log("Winner is Player 0...");

                document.querySelector(".player--0").classList.remove("player--active");

                document.querySelector(".player--0").classList.add("player--winner");
            }

            document.querySelector(".player--0").classList.remove("player--active");

            document.querySelector(".player--1").classList.add("player--active");
        }
        else if (player == 1) {
            score001 += score000;
            score1.textContent = score001;

            if (score001 >= 20) {
                playing = false;
                score1.textContent = score001;
                roll.classList.add("hidden");

                console.log("Winner is Player 1...");

                document.querySelector(".player--1").classList.remove("player--active");

                document.querySelector(".player--1").classList.add("player--winner");
            }

            document.querySelector(".player--1").classList.remove("player--active");

            document.querySelector(".player--0").classList.add("player--active");
        }
        document.querySelector(`#current--${player}`).textContent = 0;

        player = player == 0 ? 1 : 0;
        score00 = 0;
        score000 = 0;
    }
});

document.querySelector(".btn--new").addEventListener('click', function(){
    console.log("Reset the game...");
    
    score00=0;
    score01=0;
    score000=0;
    score001=0;
    score0.textContent = score01;
    score1.textContent = score001;

    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");

    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");

    playing=true;
    player=0;

    document.querySelector("#current--0").textContent = 0;
    document.querySelector("#current--1").textContent = 0;

    roll.classList.add("hidden");

});