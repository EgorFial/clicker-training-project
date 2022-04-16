
let iron = {
    value: 0,
    persecond: 0,
    percklick: 1,
    updateInfo (){
        valueIron.innerText= iron.value;
        ValueIronOneClick.innerText = iron.percklick;
        ValueIronPerSecond.innerText = iron.persecond;
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


function ActiveSkills(priceStart=10, powersStart=1, showPrice, showLvl){
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
        iron.persecond +=  +this.powwer;
        this.level++;
        this.powwer++;
        this.price*=2;
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

let minerSkill = new ActiveSkills(100,1,document.getElementById('Miner-Price'),document.getElementById('Miner-lvl'));
let autodrillSkill = new ActiveSkills(750,1,document.getElementById('Autodrill-Price'),document.getElementById('Autodrill-lvl'));
let demomanSkill = new ActiveSkills(2000,1,document.getElementById('Demoman-Price'),document.getElementById('Demoman-lvl'));





const buttonBuyPassiveSkillsClicker = document.getElementById('CklickSkill');
const buttonBuyPassiveSkillsMuscles = document.getElementById('MusclesSkill');
const buttonBuyPassiveSkillsPickaxe = document.getElementById('PickaxeSkill');


const buttonBuyActiveSkillsMiner = document.getElementById('MinerSkill');
const buttonBuyActiveSkillsAutodrill = document.getElementById('AutodrillSkill');
const buttonBuyActiveSkillsDemoman = document.getElementById('DemomanSkill');





buttonBuyPassiveSkillsClicker.addEventListener('click', clickSkillsCliker);
buttonBuyPassiveSkillsMuscles.addEventListener('click', clickSkillsMuscles);
buttonBuyPassiveSkillsPickaxe.addEventListener('click', clickSkillsPickaxe);

buttonBuyActiveSkillsMiner.addEventListener('click', clickSkillsMiner);
buttonBuyActiveSkillsAutodrill.addEventListener('click', clickSkillsAutodrill);
buttonBuyActiveSkillsDemoman.addEventListener('click', clickSkillsDemoman);


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

function clickSkillsMiner(){
    minerSkill.buy();
};
function clickSkillsAutodrill(){
    autodrillSkill.buy();
};
function clickSkillsDemoman(){
    demomanSkill.buy();
};
 

setInterval(function() {
    iron.value=+iron.value + iron.persecond;
    iron.updateInfo();
  }, 1000);
  








