
let iron = {
    value: 0,
    persecond: 0,
    percklick: 1,
    updateInfo (){
        valueIron.innerText= iron.value;
        ValueIronOneClick.innerText = iron.percklick;
    }
}

function PassiveSkills(priceStart=10, powersStart=1, showPrice, showLvl) {
    this.price=priceStart,
    this.level= 1,
    this.powwer= powersStart,
    this.textPrice = showPrice;
    this.textLvl = showLvl;

    this.updateDataSkills = function() {
        this.textPrice.innerText = this.price;
        this.textLvl.innerText = this.level;
    },

    this.buy = function() {
        if(iron.value>=this.price){
        iron.value = +iron.value - +this.price;
        iron.percklick +=  +this.powwer;
        this.level++;
        this.powwer++;
        this.price*=3;
        iron.updateInfo();
        this.updateDataSkills();
        }
        else
        return 0;
    }


}

const buttonIronClick = document.getElementById('Clicker-Button');
const valueIron = document.getElementById('ValueIron');
const ValueIronPerSecond = document.getElementById('ValueIronPerSecond');
const ValueIronOneClick = document.getElementById('ValueIronOneClick');



let clickerSkills = new PassiveSkills(10,1,document.getElementById('Cklick-Price'),document.getElementById('Cklick-lvl'));
let musclesSkills = new PassiveSkills(100,2,document.getElementById('Muscles-Price'),document.getElementById('Muscles-lvl'));
let pickaxeSkills = new PassiveSkills(1000,3,document.getElementById('Pickaxe-Price'),document.getElementById('Pickaxe-lvl'));



const buttonBuyPassiveSkillsClicker = document.getElementById('CklickSkill');
const buttonBuyPassiveSkillsMuscles = document.getElementById('MusclesSkill');
const buttonBuyPassiveSkillsPickaxe = document.getElementById('PickaxeSkill');


buttonBuyPassiveSkillsClicker.addEventListener('click', clickSkillsCliker);
buttonBuyPassiveSkillsMuscles.addEventListener('click', clickSkillsMuscles);
buttonBuyPassiveSkillsPickaxe.addEventListener('click', clickSkillsPickaxe);


buttonIronClick.addEventListener('click', ClickOnIron);
function ClickOnIron(){
    iron.value = +iron.value + +iron.percklick;
    iron.updateInfo();
    
};


function clickSkillsCliker(){
    clickerSkills.buy();
};
function clickSkillsMuscles(){
    musclesSkills.buy();
};
function clickSkillsPickaxe(){
    pickaxeSkills.buy();
};











