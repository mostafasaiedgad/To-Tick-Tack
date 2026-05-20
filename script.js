const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-US' ,options);  
document.getElementById("current-date").innerHTML = currentDate;

document.getElementById("close-web-btn").addEventListener('click', function() {
    window.close();
});

document.getElementById("myday-aside").addEventListener('click', function(){
    document.getElementById("main-body").innerHTML = `

                    <div class="header-main">
                        <h3>My Day</h3>
                        <span id="current-date">${currentDate}</span>
                    </div>

                    <div class="main-inner">
                        <div class="main-icon">
                            <img src="imgs/calendar.png" alt="imgage loading" class="main-image">
                            <div class="main-text">
                                <h4>Focus on Your Day</h4>
                                <p>Get Things done with My Day, a list</p> 
                                <p> that refreshes every day.</p>

                            </div>
                        </div>
                    </div>
                
                `;

});

document.getElementById("important-aside").addEventListener('click', function(){
    document.getElementById("main-body").innerHTML = `

                    <div class="header-main">
                        <h3>Important</h3>
                        <span id="current-date">${currentDate}</span>
                    </div>

                    <div class="main-inner">
                        <div class="main-icon">
                            <img src="imgs/booking-list.png" alt="imgage loading" class="main-image">
                            <div class="main-text">
                                <p>Try staring some tasks to see </p>
                                <p>them here.</p> 
                            </div>
                        </div>
                    </div>
    
    `;
});

document.getElementById("planned-aside").addEventListener('click', function(){
    document.getElementById("main-body").innerHTML = `

                    <div class="header-main">
                        <h3>Planned</h3>
                    </div>

                    <div class="main-inner">
                        <div class="main-icon">
                            <img src="imgs/schedule.png" alt="imgage loading" class="main-image">
                            <div class="main-text">
                                <p>Tasks due date or reminders</p>
                                <p>show up here.</p> 
                            </div>
                        </div>
                    </div>

    `;
});

document.getElementById("tasks-aside").addEventListener('click', function() {
    document.getElementById("main-body").innerHTML = `
    
                    <div class="header-main">
                        <h3>Tasks</h3>
                    </div>

                    <div class="main-inner">
                        <div class="main-icon">

                        </div>
                    </div>
    
    `;
});

const navList = document.getElementById("nav-ul");

let lists = JSON.parse(localStorage.getItem("lists")) || [];

function createList(listName) {

    if (!listName) return;

    const li = document.createElement("li");
    li.classList.add("custom-list");

    li.innerHTML = `
        <div class="list-name-aside">
            <i class="fa-solid fa-bars"></i>
            <p>${listName}</p>
        </div>
        <div class="delete-icon">
            <i class="bi bi-trash3"></i>
        </div>
    `;

    li.id = listName;

    li.addEventListener('click', function () {
        document.getElementById("main-body").innerHTML = `
        
                    <div class="header-main">
                        <h3>${listName}</h3>
                    </div>

                    <div class="main-inner">
                        <div class="main-icon">

                        </div>
                    </div>

        `;


    });

    const deleteBtn = li.querySelector(".delete-icon");

    deleteBtn.addEventListener('click', function(e) {

        e.stopPropagation();

        const confirmDlete = confirm(`Delete "${listName}" ?`);

        if (!confirmDlete) return;
        
        li.remove();

        lists = lists.filter(list => list !== listName);

        localStorage.setItem("lists", JSON.stringify(lists));

    });

    navList.appendChild(li);
}

lists.forEach(list => {
    createList(list);
});

document.getElementById("new-list-btn").addEventListener('click', function() {

    const listName = prompt("Enter The List Name: ");

    createList(listName);

    lists.push(listName);

    localStorage.setItem("lists", JSON.stringify(lists));
});
