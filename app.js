const p1btn = document.querySelector("#p1Button");
const p2btn = document.querySelector("#p2Button");
const p1display = document.querySelector("#p1Display");
const p2display = document.querySelector("#p2Display");
const limitscoreselect = document.querySelector("#selections");
const reset1 = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let limitScore = 3;
let isGameOver = false;

p1btn.addEventListener('click',function(){
    if(!isGameOver)
    {
        p1Score = p1Score+1;
        if(p1Score === limitScore)
        {
            isGameOver = true;
            p1display.classList.add('winner');
            p2display.classList.add('looser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1display.textContent = p1Score;
    }
})

p2btn.addEventListener('click',function(){
    if(!isGameOver)
    {
        p2Score = p2Score+1;
        if(p2Score === limitScore)
        {
            isGameOver = true;
            p1display.classList.add('looser');
            p2display.classList.add('winner');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2display.textContent = p2Score;
    }
})

limitscoreselect.addEventListener('change',function()
{
    limitScore = parseInt(this.value);
    reset();
})

reset1.addEventListener("click",reset)
function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = p1Score;
    p2display.textContent = p2Score;
    p1display.classList.remove('winner','looser');
    p2display.classList.remove('winner','looser');
    p1Button.disabled = false;
    p2Button.disabled = false;
}