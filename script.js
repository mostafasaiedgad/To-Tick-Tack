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
    
    `
});

document.getElementById("planned-aside").addEventListener('click', function(){
    document.getElementById("main-body").innerHTML = `

                    <div class="header-main">
                        <h3>Planned</h3>
                        <span id="current-date">${currentDate}</span>
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

    `
});
