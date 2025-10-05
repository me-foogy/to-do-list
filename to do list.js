   // fetch from local storage

    let toDoArray=JSON.parse(localStorage.getItem("toDoArrayStorage"));
    if(toDoArray==null) {toDoArray=[];}


        function enterData(){
            addToArray(); 
            displayTask();
            document.querySelector('.js-toDoInput').value='';
        }
        
        function addToArray(){
            let taskToPush=document.querySelector('.js-toDoInput').value;
            if(taskToPush==='') return;
            toDoArray.push(taskToPush);
            console.log(toDoArray)
        }

        function displayTask(){
            let displayTemp='';
            localStorage.setItem("toDoArrayStorage", JSON.stringify(toDoArray))
            for(i=0; i<toDoArray.length; i++){ displayTemp+=`<div class="glassBackGround">
            ${toDoArray[i]}
            <button class="deleteButton" onclick="toDoArray.splice(${i}, 1); displayTask();">Delete Task</button>
            </div>`;
            }
             document.querySelector('.js-taskDisplay').innerHTML = displayTemp;
        }
    displayTask();