/*

let login = prompt("Логин:",[""]);

 if (login == null || login =="")
 {alert("Cancel");}
 else if(login =="Admin" )
 {
    let pass = prompt("Пароль:",[""]);
    if (pass == null)
    {c}
    else if(pass =="123456" )
    {
        alert("Добро пожаловать!");
    }
    else
    alert("Пароль не правильный!");





 }
 else
 alert("Я не знаю кто ты");

    let val = prompt("Введите число :",[""]);
    (+val<=90 && +val>=10) ?alert("Число попало в промежуток!"):alert("Число находится вне промежутка!");


 for(let val=0;val<100; val = prompt("Введите число :",[""]));


 function ProstoeChislo()
{
    let n = prompt("Введите число :",[""]);
    gogogo:
    for(let j=2;j<n;j++)
    {
        for(let i=2;i<j;i++)
        {
            if(j%i==0)
            {
             continue gogogo;
            }
    }
  alert(j);
    }   
}


switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Ми підтримуємо і ці браузери' );
    break;

  default:
    alert( 'Маємо надію, що ця сторінка виглядає добре!' );
}

let ask=(question, yes, no)=>confirm(question)? yes():no();
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );




function showObject(obj){
  for (let key in obj) {
    alert(obj[key]);
   }
};

function multiplyNumeric(obj) 
{
  for (let key in obj) 
  {
    if (typeof (obj[key]) == "number")
    {
    obj[key] *= 2;
    }
  }
};

let calculator = {
            
         read(){
             this.a=prompt("Введите число 1:",[""]);
             this.b=prompt("Введите число 2:",[""]);
         },

         sum() {
            return +this.a+ +this.b;
        },
        mul() {
            return this.a* this.b;
        }



      };


function combination(ls){
    for (let i=0; i<ls.length;i++){
        for(let j=i+1;j<ls.length;j++)
             for(let n=j+1;n<ls.length;n++)
                 console.log(ls[i]+"+"+ls[j]+"+"+ls[n]+"="+(ls[i]+ls[j]+ls[n]));

    };

  }





    function chooseOptimalDistance(t, k, ls){
      let sum=0;

    for (let i=0; i<ls.length;i++){
        for(let j=i+1;j<ls.length;j++){
             for(let n=j+1;n<ls.length;n++)
             {
                 
                if((ls[i]+ls[j]+ls[n])>sum&&(ls[i]+ls[j]+ls[n])<t){
                    sum = (ls[i]+ls[j]+ls[n]);

                }
             }

        }

    };
    
return sum;

}

function StartButton()
{

        let calculator = new Calculation();
        calculator.read();

        alert( "Sum=" + calculator.sum() );
        alert( "Mul=" + calculator.mul() );
}

function Calculation(){

    this.read = function(){
    this.a=prompt("Введите число :",[""]);
    this.b=prompt("Введите число :",[""]);
    }

    this.sum = function(){
        return +this.a + +this.b;
    }

    this.mul = function(){
        return this.a*this.b;
    }

  }
  

 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*

  function StartButton()
{

    let accumulator = new Accumulator(1); 

    accumulator.read(); 
    accumulator.read(); 
    
    alert(accumulator.value);
}

function Accumulator(startingValue){
        this.value = startingValue;

    this.read = function(){
        this.value += +prompt("Введите число :",0);
    }

    

  
  }
  */

  
/*
  
  <button class="button_2">Fuck you!</button>
<input type="button" value="Start"></input>


function StartButton()
{

    let accumulator = new Accumulator(1); 

    accumulator.read(); 
    accumulator.read(); 
    
    alert(accumulator.value);
}


function StartButton2()
{
   
    alert( "☺\u{1}" );
    alert( 'a' > 'Z' );
    alert( 'z' > 'Z' );
    alert( 'Z' > 'z' );


}

function Accumulator(startingValue){
        this.value = startingValue;

    this.read = function(){
        this.value += +prompt("Введите число :",0);
    }

    

  
  }
  
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////