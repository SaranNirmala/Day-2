//addeventListener()
let buttonWindowOpen= document.getElementById('btn-open');
buttonWindowOpen.addEventListener('onclick', function(){
    document.getElementById('demo').innerHTML="Welcome to Guvi!"
});


// Window Object - Property
let mywindow;
function openWin()
{
mywindow=window.open(" ", "mywindow", "width=600 , height=900");
}
 
window.openWin();

function closeWin()
{
    if(mywindow)
    {
        window.close();
    }
} 

function checkwin()
{
    let text =" ";

    if(!mywindow)
    {
        text ='it has never been opened';
    }
    else{
        if(mywindow.closed){
            text=" it is closed";
        } else{
            text ="it is open";
        }
  }  
  document.getElementById('demo').innerHTML=text;
}

// Encoded and decoded the function
let text = " Guvi Platform";
let encoded=window.btoa(text);
let decoded=window.atob(encoded);

document.getElementById('screening').innerHTML = "Encoded the String :    " +  encoded +'</br>' 
+ 'Decoded the string :' + decoded; 


// navigator
let browserName= window.navigator.appName;
let language= window.navigator.language;
document.getElementById('browser').innerHTML= 'Browser Name :   ' +browserName;
document.getElementById('lang').innerHTML= 'Browser Name :   ' +language;

