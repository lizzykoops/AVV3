/*Maakt het tweede li element actief wat zich in de nav bevindt.*/

window.onload = function () {
    
	var actief = document.querySelector('nav li:nth-child(2)');
	actief.classList.add('active');
    

/*Wanneer je op de eerste button drukt wordt het derde element
zichtbaar van je fieldset en wordt het vierde element niet zichtbaar*/    
    var button1 = document.getElementById("type_aanmelding_1");

     button1.addEventListener('click', function() { 
        document.querySelector("form > fieldset:nth-child(3)").style.display = 'block';
        document.querySelector("form > fieldset:nth-child(4)").style.display = 'none';
     });

/*Wanneer je op de tweede button drukt wordt het derde element van de
fieldset niet zichtbaar en wordt het vierde element wel zichtbaar*/
     var button2 = document.getElementById("type_aanmelding_2");

     button2.addEventListener('click', function() { 
        document.querySelector("form > fieldset:nth-child(3)").style.display = 'none';
        document.querySelector("form > fieldset:nth-child(4)").style.display = 'block';
     });
}