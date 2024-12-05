
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box')
const searchInputBox = document.querySelector(".input-box")
const searchBackBtn = document.querySelector(".searchBack-btn");
const newFileModal = document.querySelector(".newFileModal")
const backDrop = document.querySelector('.back-drop')
const newFileInput = document.querySelector(".newFileInput");
const ul = document.querySelector("ul");
const sheetContainer = document.querySelector(".attendenceSheetSection");

const threeDots = document.querySelector('.threeDot');


let nav = 0;
let clicked = null;

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];



// for handle clicks  of different buttons
function HandleClicks(){


searchBackBtn.addEventListener("click",()=>{
    searchInputBox.style.display = 'none';
    searchBox.classList.remove("open-search-box")
});


searchIcon.addEventListener("click", openSearchBox);
document.querySelector(".new-file-btn").addEventListener("click", openFileMOdal)

document.querySelector(".cancel-btn").addEventListener('click', closeFileModal);

document.querySelector(".Add-btn").addEventListener('click', createNewFile)


}




const searchInput = document.querySelector('.searchInput')



function openSearchBox(){
    searchInput.classList.add("searchInput") 
    searchBox.classList.add("open-search-box")
searchInputBox.style.display = "flex";
}

 function openFileMOdal(){
    newFileModal.style.display = "flex";
    backDrop.style.display = "block";
 }


function closeFileModal(){
    newFileModal.style.display = "none";
    backDrop.style.display = "none";
    newFileInput.classList.remove("wrong");
  newFileInput.style.animation = "none";
    newFileInput.vaue = "";
}



function createNewFile(){
     if(newFileInput.value!==""){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button")
    li.classList.add('list')
    
    const newSheet = document.createElement('div')
    const backBtn = document.createElement('ion-icon');
    const sheetHeader = document.createElement('div')
    const sheetHeading = document.createElement('p');

    sheetHeader.classList.add('sheetHeader')
    backBtn.setAttribute('name',"arrow-back")
    backBtn.classList.add('backHomeBtn')

    const para = document.createElement('p')
    para.classList.add('para')
    para.innerText = 'Attendece of this month'

    const clndrContainer = document.createElement('div');
    const clndrHeader = document.createElement('div');


    const monthBtns = document.createElement("div")
monthBtns.classList.add('monthBtns')
   
    const prevMonthBtn =  document.createElement("button");
    prevMonthBtn.classList.add('prevMontBtn')
   
    const nextMonthBtn = document.createElement('Button'); 
    nextMonthBtn.classList.add('nextMontBtn')

    const prevMonthIcon = document.createElement('ion-icon');
    const nextMonthIcon = document.createElement('ion-icon');
    prevMonthIcon.setAttribute('name',"chevron-back-outline");
    nextMonthIcon.setAttribute('name',"chevron-forward-outline")


    prevMonthBtn.appendChild(prevMonthIcon);
    nextMonthBtn.appendChild(nextMonthIcon);

    monthBtns.prepend(prevMonthBtn);
    monthBtns.appendChild(nextMonthBtn);

    const weeekContainer =
  `<div class="weekContainer">
    <li>Sun</li>
    <li>Mon</li>
    <li>Tue</li>
    <li>Wed</li>
    <li>Th</li>
    <li>Fri</li>
    <li>Sat</li>
  </div>`;
  


  const calendar = document.createElement('div');

  const countBox = document.createElement('div')
  countBox.classList.add('countBox')
  

  const attendenceCountBoxes = 
  `<div class="presentBox">Presents : 
  <span class="p-count"></span>
  </div>
  <div class="absentBox">Absents :
  <span class="a-count"></span>
  </div>
  <div class="halfDayBox">Half Days :
  <span class="h-count"></span>
  </div>
  <div class="overTimeBox">OT :
  <span class="ot-count"></span>
  </div>`;

  const attendenceContainer = document.createElement('div');
  attendenceContainer.classList.add('attendenceContainer')

  

    calendar.classList.add('calendar');
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerText = "Delete";
    
    const liText = newFileInput.value.trim("")
    li.innerText = liText;
    
    li.appendChild(deleteBtn);
    threeDots.classList.add('dots')
    li.innerHTML += threeDots.innerHTML;
    ul.appendChild(li);
    sheetContainer.appendChild(newSheet);
   
    newSheet.id = liText; 
    newSheet.classList.add('sheet');
    newSheet.appendChild(attendenceContainer);
    attendenceContainer.appendChild(para)
    attendenceContainer.appendChild(clndrContainer)
    sheetHeader.appendChild(sheetHeading);
    sheetHeader.prepend(backBtn);
    
    newSheet.prepend(sheetHeader);
    countBox.innerHTML = attendenceCountBoxes
    attendenceContainer.prepend(countBox)
    clndrContainer.classList.add('calendar-container');
    
    clndrHeader.classList.add('clndrHeader');
    sheetHeading.innerText = newFileInput.value;
    
    clndrContainer.insertAdjacentHTML('afterbegin', weeekContainer);
    clndrContainer.prepend(clndrHeader);
    clndrContainer.appendChild(calendar)
   
  clndrHeader.appendChild(monthBtns)
  closeFileModal()
  newFileInput.classList.remove("wrong");
}else{
  
  newFileInput.classList.add("wrong");
  newFileInput.classList.add('shake')
  setTimeout(()=>{
  newFileInput.classList.remove('shake')
},1000)
}

newFileInput.value = ''

    saveData();
    showData();
    
}







//function to save the data

function saveData(){
   localStorage.setItem('list', ul.innerHTML)
   localStorage.setItem('sheets', sheetContainer.innerHTML);
}
console.log(ul.innerHTML)


//get attendence modal btns from index.HTML

const attendeceModal = document.querySelector('.attendenceModal');
const presentBtn = document.querySelector('.p-btn')
const absentBtn = document.querySelector('.a-btn')
const halfDayBtn = document.querySelector('.HD-btn');
const overTime = document.querySelector('.OT-btn');

const clearBtn = document.querySelector('.c-btn')


// getting overTime modal elements from HTML

const otModal = document.querySelector('.overTimeModal');
const otInput = document.querySelector('.otInput');
const otCancelBtn = document.querySelector('.otCancelBtn');

const otAddBtn = document.querySelector('.otAddBtn');

let eventTitle = localStorage.getItem('eventTitle')//? JSON.parse(localStorage.getItem('eventTitle')): null;




//function to show and Handle the data
function showData(){

    ul.innerHTML = localStorage.getItem('list');
    sheetContainer.innerHTML = localStorage.getItem('sheets');

    const clndrHeader = document.querySelectorAll('.clndrHeader')
    const monthBtns = document.querySelectorAll('.monthBtns')
  
    const prevMonthBtn = document.querySelectorAll('.prevMontBtn');
    const nextMontBtn = document.querySelectorAll('.nextMontBtn')


    //create variables of count boxes
    const presentCount = document.querySelectorAll('.p-count');

    const absentCount = document.querySelectorAll('.a-count');
    const halfDayCount = document.querySelectorAll('.h-count');
    const overTimeCount = document.querySelectorAll('.ot-count');
    
    //create variables to get different counts
    let pCount = 0;
    let aCount = 0;
    let hCount = 0;
    let otCount = 0;


    prevMonthBtn.forEach((prev)=>{
      prev.addEventListener('click',()=>{
      nav--;
      showData()
      
    })
  });

  nextMontBtn.forEach((next)=>{
    next.addEventListener('click',()=>{
    nav++;
    showData()
  })
});

    

    
    


     const li = document.querySelectorAll('.list')
   
     const sheets = document.querySelectorAll('.sheet')
     const deleteBtn = document.querySelectorAll('.deleteBtn');
     const backBtn = document.querySelectorAll('.backHomeBtn');
     

 for(let i = 0; i < li.length; i++ ){

    li[i].addEventListener('click', (e)=>{
      nav = 0;
      eventTitle = e.target.innerText;
      console.log(e.target.innerText.trim())

      localStorage.setItem('eventTitle', eventTitle)

       presentCount.forEach((e)=>{
        e.innerText = '';
      })

      absentCount.forEach((e)=>{
        e.innerText = '';
      })

      halfDayCount.forEach((e)=>{
        e.innerText = '';
      })
      overTimeCount.forEach((e)=>{
        e.innerText = '';
      })
 
        if (e.target.tagName === 'ION-ICON'){
          
          deleteBtn[i].classList.toggle("pop-up-dbtn")
         saveData()
        }else if(e.target.innerText === sheets[i].id){
            sheets[i].style.top = `${-100}%` ;
            
            
            deleteBtn[i].classList.remove("pop-up-dbtn")
            saveData()
        }else {
           
            if(e.target.tagName === "BUTTON"){
              eventTitle = e.target.parentNode.innerText.slice(e.target.parentNode.innerText.lenght, -7)

              localStorage.setItem('eventTitle', eventTitle)
               localStorage.removeItem(`${eventTitle}`)
              console.log(eventTitle)

               let a = e.target.parentNode.textContent;
                if(  a.slice(a.lenght, -17) === sheets[i].id){
                    e.target.parentNode.remove()
                  sheets[i].remove()
                }
                saveData();
              
            }else{
              deleteBtn[i].classList.remove("pop-up-dbtn")
           saveData()
            }
        }
        
        showData()
       
    })

    backBtn[i].addEventListener('click',()=>{
      sheets[i].style.top = 0;
      attendeceModal.style.display = "none";
      backDrop.style.display = "none";
      saveData()
    })


 }

 



 // making calendar 

  


 
const date  = new Date();
date.setMonth(new Date().getMonth() + nav)
const day   =   date.getDate();
const month = date.getMonth();
const year  =  date.getFullYear();

 



const firstDayOfMonth = new Date(year, month, 1);
const daysInMonth = new Date(year, month+1, 0).getDate();

const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
  weekday: "long",
  year : 'numeric',
  month: 'numeric',
  day: "numeric",
});



const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

const calendar = document.querySelectorAll('.calendar')

let events = localStorage.getItem(`${eventTitle}`)? JSON.parse(localStorage.getItem(`${eventTitle}`)): [];
 
 for(let i  = 0; i < li.length; i++){
  calendar[i].innerHTML = "";
  
  clndrHeader[i].innerHTML = `<span>${
    date.toLocaleDateString('en-us',{
    month: 'long',
    })} ${year} </span>`;

    clndrHeader[i].appendChild(monthBtns[i]);
    
  
  
 

  const daysContainer = document.createElement('div');
  daysContainer.classList.add('days-container');
  calendar[i].innerHTML = "";
 
daysContainer.innerHTML = ''
for(let i = 1; i <= paddingDays + daysInMonth; i++){
  
const daySquare = document.createElement('button');
daySquare.classList.add('daySquare');

if(i > paddingDays){

  const dayString = `${month}/${i - paddingDays}/${year}`;




daySquare.addEventListener('click', ()=>{

openModal()
otInput.value = "";
backDrop.style.display = "block";
  attendeceModal.addEventListener('click',(a)=>{

    openModal()

if(eventForDay){

  openModal()
if(a.target === clearBtn){

  deleteModal()
  closeModal()
  showData()

  }else if(a.target === presentBtn){
    eventForDay.name = "P";


    closeModal()
    saveEvent()
    showData()

  }else if(a.target === absentBtn){
    eventForDay.name = "A"
  
    
    saveEvent()
    showData()
    closeModal()

  }else if(a.target === halfDayBtn){
    eventForDay.name = "H";


   closeModal()
    
    saveEvent()
    showData()

  }else if(a.target === overTime){
   otModal.style.display = "block";
   attendeceModal.style.display = "none";
   
   

    otModal.addEventListener('click',(ot)=>{

      if(ot.target === otCancelBtn){
        otInput.value = "";
      closeModal()
      showData()
  
      }else if(ot.target === otAddBtn){
       
        if(otInput.value !== ""){
  eventForDay.name = 'OT';
  eventForDay.hours = otInput.value;
     
       saveEvent();
        }
       closeModal();
       showData()
      }
    })

  }
  
}else{
  attendeceModal.classList.add('openAttendenceModal');

 
    clicked = dayString;
    
    if(a.target === presentBtn){
    
      

      events.push({
          date : clicked,
          name: 'P',
          hours: otInput.value
        
         })

         saveEvent()
         showData()
         closeModal()

    }else if(a.target === absentBtn ){
      
      events.push({
        date : clicked,
        name: 'A',
        hours: otInput.value
       })
       saveEvent()
       showData()
      closeModal()
    }else if(a.target === halfDayBtn){
      closeModal()
      events.push({
        date : clicked,
        name: 'H',
        hours : otInput.value
      
       })
       saveEvent();
       showData();
       closeModal();

      
    }else if(a.target === overTime){
   attendeceModal.style.display = "none";
    otModal.style.display = "block";
    backDrop.style.display = "block";

    otModal.addEventListener('click',(ot)=>{

      if(ot.target === otCancelBtn){
        otInput.value = "";
      closeModal()
      showData()
  
      }else if(ot.target === otAddBtn){
       
  if(otInput.value !== ""){
      events.push({
        date : clicked,
        name: 'OT',
        hours: otInput.value
       });

      
       saveEvent();
       closeModal();
      }else{
       otInput.classList.add('wrong')
       setTimeout(()=>{
        otInput.classList.remove('wrong')
       },1000)
      };
       showData();
       
      }
    })
      
       

    }else if(a.target === clearBtn){
      
     // clicked = dayString;
      deleteModal()
      closeModal()
      saveEvent()
      showData()
    }
  }
  })


  function saveEvent(){
    localStorage.setItem(`${eventTitle}`, JSON.stringify(events));
     
  }

  
    

  function deleteModal(){
    clicked = dayString;
    events = events.filter(e => e.date 
      !== clicked);
    events.filter(e => e.date !== clicked)
    localStorage.setItem(`${eventTitle}`, JSON.stringify(events))
    attendeceModal.classList.remove('openAttendenceModal')
    }
})

function openModal (){
  attendeceModal.classList.add('openAttendenceModal');
  attendeceModal.style.display = 'block';
  backDrop.style.display = "block";
  
        
}

function closeModal () {
  attendeceModal.classList.remove('openAttendenceModal');
  attendeceModal.style.display = 'none';
  backDrop.style.display = "none";
  otModal.style.display = "none";

}


  daySquare.classList.add('days')
   daySquare.innerText = i - paddingDays;

  
 const eventForDay = events.find(e => e.date === dayString);


        if(eventForDay){
          
          
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            eventDiv.innerText = eventForDay.name;

            eventDiv.classList.add(`${eventForDay.name}`)


        daySquare.appendChild(eventDiv)

        if(eventForDay.name === "P"){
         pCount++;
       
       
        }else if(eventForDay.name === "A"){
          aCount++;
        
         

        }else if(eventForDay.name === "H"){
         hCount++;
         
   
        }else if(eventForDay.name === "OT"){
          pCount++;
          otCount =  `${otCount} + ${eventForDay.hours}`;
          otCount = eval(otCount);
          
        }

        presentCount.forEach((p)=>{
          p.innerText = pCount/li.length;
      });
      absentCount.forEach((a)=>{
        a.innerText = aCount/li.length;
     });
    halfDayCount.forEach((h)=>{
      h.innerText = hCount/li.length;
     });
     overTimeCount.forEach((o)=>{
      o.innerText = otCount/li.length;
  });

     }

 if(i-paddingDays === day && nav === 0){
  daySquare.classList.add('currentDay')
 
 }

 //daySquare.addEventListener('click', openModal(dayString))


}else{
daySquare.classList.add('paddingDays');

}

daysContainer.appendChild(daySquare)
  //saveData()

  }

  calendar[i].appendChild(daysContainer);
    
 };
 
}










showData()

HandleClicks()


