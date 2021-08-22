
/*


Objective :- This Library is Developed for the Ease of web development and Evolving the Use of HTML..... :)

Use : include this script file using script tag in Your HTML file and then you can use the following Tags :
<sin> ✔
<cos> ✔
<tan>✔
<cosec>✔
<sec>✔
<cot>✔
<add>✔
<mult>✔
<subs>✔
<divide>✔
<ceil>✔
<floor>✔
<largest>✔
<smallest>✔
<power>✔
*/



/** In this Portion of code the trigonometric functions(tags) are defined  **/
function sine(){
    var ss = document.getElementsByTagName("sin");
    for(var i =0;i<ss.length;i++){
        var da = ss[i].innerHTML;
        var ba = parseInt(da);
        var aa = Math.sin(ba);
        ss[i].innerHTML = aa;
    }
}
sine();
function cosine(){
    var ss = document.getElementsByTagName("cos");
    for(var i =0;i<ss.length;i++){
        var da = ss[i].innerHTML;
        var ba = parseInt(da);
        var aa = Math.cos(ba);
        ss[i].innerHTML = aa;
    }
}
cosine();
function tangent(){
    var ss = document.getElementsByTagName("tan");
    for(var i =0;i<ss.length;i++){
        var da = ss[i].innerHTML;
        var ba = parseInt(da);
        var aa = Math.tan(ba);
        ss[i].innerHTML = aa;
    }
}
tangent();
function cosecc(){
    var ss = document.getElementsByTagName("cosec");
    for(var i =0;i<ss.length;i++){
        var da = ss[i].innerHTML;
        var ba = parseInt(da);
        var aa = 1/Math.sin(ba);
        ss[i].innerHTML = aa;
    }
}
cosecc();

function secc(){
    var ss = document.getElementsByTagName("sec");
    for(var i =0;i<ss.length;i++){
        var da = ss[i].innerHTML;
        var ba = parseInt(da);
        var aa = 1/Math.cos(ba);
        ss[i].innerHTML = aa;
    }
}
secc();
function cott(){
    var ss = document.getElementsByTagName("cot");
    for(var i =0;i<ss.length;i++){
        var da = ss[i].innerHTML;
        var ba = parseInt(da);
        var aa = 1/Math.tan(ba);
        ss[i].innerHTML = aa;
    }
}
cott();

/** From this section we will create the functions<tags> of math Ceil & Floor Functions**/

function ceill(){
    var ss = document.getElementsByTagName("ceil");
    for(var i =0;i<ss.length;i++){
        var da = ss[i].innerHTML;
        var ba = parseFloat(da);
        var aa = Math.ceil(ba);
        ss[i].innerHTML = aa;
    }
}

function floorr(){
    var ss = document.getElementsByTagName("floor");
    for(var i =0;i<ss.length;i++){
        var da = ss[i].innerHTML;
        var ba = parseFloat(da);
        var aa = Math.floor(ba);
        ss[i].innerHTML = aa;
    }
}


/** In this section of this script we will deal with functions<tags> of Comparison <largest>&<smallest>**/
function largestt(){
    var ta = document.getElementsByTagName("largest");
    for(var i =0;i<ta.length;i++){
       var data = ta[i].innerHTML;
       var Arr = data.split(",");
       var k = parseInt(Arr[0]);
        for(j=1;j<Arr.length;j++){
            if(k <= parseInt(Arr[j])){
                k = parseInt(Arr[j]);
            }
        }
        ta[i].innerHTML = k;
    }
}

function smallestt(){
    var ta = document.getElementsByTagName("smallest");
    for(var i =0;i<ta.length;i++){
       var data = ta[i].innerHTML;
       var Arr = data.split(",");
       var k = parseInt(Arr[0]);
        for(j=1;j<Arr.length;j++){
            if(k >= parseInt(Arr[j])){
                k = parseInt(Arr[j]);
            }
        }
        ta[i].innerHTML = k;
    }
}




/** In this section of script we will deal with the Arithematic functions<tags> like Power&&root **/
 function powerr(){
     var tags = document.getElementsByTagName("power");
     for(var i = 0;i<tags.length;i++){
         var arr = tags[i].innerHTML.split(",");
         if(arr.length==2){
             var f = parseInt(arr[0]);
             var s = parseInt(arr[1]);
             var po = Math.pow(f,s);
         }
         else{
             document.write("Syntax of power tag is wrong");
         }
         tags[i].innerHTML=po;
     }
 }
 powerr();
 
function addd(){
    var tags = document.getElementsByTagName("add");
    for(var i = 0;i<tags.length;i++){
        var arr = tags[i].innerHTML.split("+");
        var k = parseFloat(arr[0]);
        for(var j = 1;j<arr.length;j++){
            k = k + parseFloat(arr[j]);
        }
        tags[i].innerHTML = k;
    }
}
addd();
function subb(){
    var tags = document.getElementsByTagName("subs");
    for(var i = 0;i<tags.length;i++){
        var arr = tags[i].innerHTML.split("-");
        var k = parseFloat(arr[0]);
        for(var j = 1;j<arr.length;j++){
            k = k - parseFloat(arr[j]);
        }
        tags[i].innerHTML = k;
    }
}
subb();
function mul(){
    var tags = document.getElementsByTagName("mult");
    for(var i = 0;i<tags.length;i++){
        var arr = tags[i].innerHTML.split("*");
        var k = parseFloat(arr[0]);
        for(var j = 1;j<arr.length;j++){
            k = k * parseFloat(arr[j]);
        }
        tags[i].innerHTML = k;
    }
}
mul();
function divide(){
    var tags = document.getElementsByTagName("divide");
    for(var i = 0;i<tags.length;i++){
        var arr = tags[i].innerHTML.split("/");
        var k = parseFloat(arr[0]);
        for(var j = 1;j<arr.length;j++){
            k = k / parseFloat(arr[j]);
        }
        tags[i].innerHTML = k;
    }
}
divide();





smallestt();
largestt();
ceill();
floorr();
