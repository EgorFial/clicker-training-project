let iron = {
    value: 0,
    persecond: 0,
    percklick: 1
}
const valueIron = document.getElementById('namegame');
const buttonIronClick = document.getElementById('Clicker-Button');
buttonIronClick.addEventListener('click', ClickOnIron);



function ClickOnIron(){
    iron.value = +iron.value + +iron.percklick;
    console.log(iron.value);
    valueIron.innerText= iron.value;
    console.log(valueIron);
};







function ByActiveSkills(){



    
}