// ---------------------------------- All the Functioning of index.html File -----------------------------------

// Live date and day function
function dateWithDay() {
  const dateLive = elementById("date-live");
  
  const now = new Date();
  const options = {month: 'short', day: 'numeric', year: 'numeric'};
  const monthDateYear = now.toLocaleString("en-GB", options);
  const weekDay = now.toLocaleString("en-GB", { weekday: "short" });
  dateLive.innerHTML = `${weekDay}, <br> <b>${monthDateYear}<b>`;
}

setInterval(dateWithDay, 1000);

// -------------------------------------------------------------------------------------------------------------------

// Function on activity buttons over clicked. addEventListener approach on buttons.
// Totals steps - 4

const buttons = document.querySelectorAll(".btn-activity");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    // Step: 1
    // Checking the current button is the last enabled button or not.
    const totalButton = document.querySelectorAll(".btn-activity");
    let disabledButtonCounter = 0;
    for (let i = 0; i < totalButton.length; i++) {
      if (totalButton[i].disabled) {
        disabledButtonCounter++;
      }
    }

    totalButton.length - disabledButtonCounter !== 1
      ? alert("Task board is updated successfully")
      : (alert("Task board is updated successfully"),
        alert("Congrates!!! You have completed all the tasks"));
        

    // Step: 2
    // Selecting the remaining task element, remaining task amount, completed task element, completed task amount.
    // remaining task amount will be deducted and completed amount will be incremented over click.

    const taskRemainedField = elementById("task-remained-amount");
    const taskCompletedField = elementById("task-completed-amount");
    const taskRemainedAmount = valueById("task-remained-amount");
    const taskCompletedAmount = valueById("task-completed-amount");

    taskRemainedField.innerText = taskRemainedAmount - 1;
    taskCompletedField.innerText = taskCompletedAmount + 1;

    
    // Step: 3
    // Addition of activity log.
    // Process: i. getting title from clicked button's grandparent --> h2 --> innerText
    //         ii. getting day and date from from date Object.
    //        iii. targetting activity log container --> setting innerHTML by static text + innerText + day and time  
    
    
    // 3(i)
    const parent = event.target.parentElement.parentElement;
    const child = parent.getElementsByTagName("h2");
    const childTitle = child[0].innerText;

  
    // 3(ii)
    const currentDateTime = new Date();
    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
    const timeNow = currentDateTime.toLocaleString('en-GB', options);


    // 3(iii) targetting the activity log container --> static text + i + ii
    // In this step, a class named 'added' is included, which will be used to target the activity log history for clearing.
    const activityLog = elementById('activity-log');
    const newElement = document.createElement('div');

    newElement.innerHTML = `<div class="added mt-4 p-2 rounded-lg
                         bg-slate-100 ">You have completed the 
                         task ${childTitle} at ${timeNow}</div>`;

    activityLog.appendChild(newElement) ;
   

    // Step 4:
    // removing the button's styles --> adding new styles looks like disabled --> making the button disabled 

    event.target.classList.remove("bg-blue-600");
    event.target.classList.add("bg-gray-300");
    event.target.disabled = true;
  });
}

// -------------------------------------------------------------------------------------------------------------
// Function on button named 'Clear History'
const btnHistory = elementById("btn-history");

btnHistory.addEventListener("click", function () {
  const histories = document.querySelectorAll(".added");
  for (let i = 0; i < histories.length; i++) {
    histories[i].remove();
  }
});


// -------------------------------------------------------------------------------------------------------------
// Function on button named 'Discover Something New Today'
const btnSomethingNew = elementById('btn-something-new');

btnSomethingNew.addEventListener('click', function(){
  window.location.href="./blog.html";
})

// --------------------------------------------------------------------------------------------------------------
// Function on Color Wheel Button
const btnColorWheel = elementById('theme-color-wheel');

btnColorWheel.addEventListener('click', function(){
  
  const colorList = ['bg-slate-300', 'bg-slate-600', 'bg-gray-500', 'bg-cyan-500', 'bg-lime-300', 
                     'bg-blue-300', 'bg-blue-500', 'bg-yellow-300', 'bg-red-200', 'bg-sky-600',
                     'bg-red-100', 'bg-indigo-700', 'bg-purple-100', 'bg-pink-100', 'bg-teal-100',
                     'bg-stone-300', 'bg-rose-300', 'bg-sky-300', 'bg-green-200', 'bg-amber-100',
                     'bg-indigo-700', 'bg-fuchsia-800', 'bg-violet-500', 'bg-gray-800'];


  const colorIndex = Math.floor(Math.random() * colorList.length)

  const targetElement = document.body;
  targetElement.classList.remove(...colorList); 

  targetElement.classList.add(colorList[colorIndex]);
  
})


btnColorWheel.addEventListener('mousedown', function(){
  btnColorWheel.style.transform = 'rotate(45deg)';
})


btnColorWheel.addEventListener('mouseup', function(){
  btnColorWheel.style.transform = 'rotate(0deg)';
})


