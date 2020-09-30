memory_track = 0;
track=1;
option_tracker = 0;

function displayCake() 
{
    var disp_cake = document.getElementById("cake1");
    disp_cake.className = disp_cake.className.replace(/\bdisplay-none\b/g, "cake");

    var start_btn = document.getElementById("start-btn");
    start_btn.classList.add("display-none");

    var start_btn2 = document.getElementById("start-btn2");
    start_btn2.classList.remove("display-none");

    var body = document.getElementById("body-init");
    body.classList.add("body-start");

    var bulbs_off = document.getElementById("bulbs-off");
    bulbs_off.classList.remove("display-none");
    bulbs_off.classList.add("bulb-container");

    var bulbs_on = document.getElementById("bulbs-on");
    bulbs_on.classList.remove("display-none");
    bulbs_on.classList.add("bulb-container");
}

function blowCandle() 
{
    var audio = document.getElementById("background-audio");
    audio.play();

    var body = document.getElementById("body-init");
    body.classList.remove("body-start");
    body.classList.add("body-active");

    var disp_cake = document.getElementById("cake1");
    disp_cake.classList.add("display-none");

    var start_btn = document.getElementById("start-btn2");
    start_btn.classList.add("display-none");

    var disp_balloons = document.getElementById("balloons");
    balloons.className = balloons.className.replace(/\bdisplay-none\b/g, "balloon-panel");

    var disp_sidemenu = document.getElementById("side-menu");
    disp_sidemenu.className = disp_sidemenu.className.replace(/\bdisplay-none\b/g, "sidebar");

    var title = document.getElementById("title-container");
    title.className = title.className.replace(/\bdisplay-none\b/g, "title-container");

    var slideshow = document.getElementById("photo-slideshow");
    slideshow.className = slideshow.className.replace(/\bdisplay-none\b/g, "");

    var envelope = document.getElementById("envelope");
    envelope.classList.remove("display-none");

    var message_container = document.getElementById("message_container");
    message_container.classList.add("messages");
    message_container.classList.remove("display-none");

    var messages = document.getElementById("messages");
    messages.classList.add("change-content");
    messages.classList.remove("display-none");

    option_tracker = 1;
}

function toggleSideBar() 
{
    document.getElementById("side-menu").classList.toggle("active");
}

function showHome() 
{
    option_tracker = 1;

    var audio = document.getElementById("background-audio");
    audio.play();

    var slideshow = document.getElementById("photo-slideshow");
    slideshow.classList.remove("display-none");

    var envelope = document.getElementById("envelope");
    envelope.classList.remove("display-none");

    var bulbs_off = document.getElementById("bulbs-off");
    bulbs_off.classList.remove("display-none");
    bulbs_off.classList.add("bulb-container");

    var bulbs_on = document.getElementById("bulbs-on");
    bulbs_on.classList.remove("display-none");
    bulbs_on.classList.add("bulb-container");

    var title_position = document.getElementById("title-container");
    title_position.classList.remove("title-container-hide-bulbs");
    title_position.classList.add("title-container");

    var message_container = document.getElementById("message_container");
    message_container.classList.add("messages");
    message_container.classList.remove("display-none");

    var messages = document.getElementById("message");
    messages.classList.add("change-content");
    messages.classList.remove("display-none");

    var memories = document.getElementById("memories");
    memories.classList.remove("display-none");

    toggleSideBar();
}

function showMemories()
{
    option_tracker = 2;

    var background_audio = document.getElementById("memory-background-audio");

    if(track === 1)
    {
        var slideshow = document.getElementById("photo-slideshow");
        slideshow.classList.add("display-none");
    
        var envelope = document.getElementById("envelope");
        envelope.classList.add("display-none");

        var bulbs_off = document.getElementById("bulbs-off");
        bulbs_off.classList.add("display-none");
        bulbs_off.classList.remove("bulb-container");
    
        var bulbs_on = document.getElementById("bulbs-on");
        bulbs_on.classList.add("display-none");
        bulbs_on.classList.remove("bulb-container");
    
        var title_position = document.getElementById("title-container");
        title_position.classList.add("title-container-hide-bulbs");
        title_position.classList.remove("title-container");
    
        var message_container = document.getElementById("message_container");
        message_container.classList.remove("messages");
        message_container.classList.add("display-none");
    
        var messages = document.getElementById("message");
        messages.classList.remove("change-content");
        messages.classList.add("display-none");
    
        var audio = document.getElementById("background-audio");
        audio.pause();
    
        var memories = document.getElementById("memories");
        memories.classList.remove("display-none");
    
        toggleSideBar();
    
        memory_track = 1;
    
        startMemory(1);
    }
    else
    {
        alert("Please attempt quiz first")
    }
}
function startMemory(memory)
{
    if(memory == 1)
    {
        var video = document.getElementById("video1");
        var audio = document.getElementById("background-audio")
        audio.pause();
        video.classList.remove("display-none");
        video.removeAttribute("hidden")
        video.setAttribute("autoplay", "");
        openFullScreen(video);
        video.currentTime = 0;
        video.play();
        video.addEventListener("ended", closeFullScreen);
        video.addEventListener("ended", removeVideoAttribute, false); 
        //video.addEventListener("ended", startMemory(2), false);
        video.addEventListener("ended", showHome, false);
        toggleSideBar();
    }
}

function removeVideoAttribute() 
{
    //video.setAttribute("hidden");
    var video = document.getElementById("video1");
    video.removeAttribute("autoplay");
    video.classList.add("display-none");
}

function openFullScreen(video) 
{
    if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
}

function closeFullScreen()
{
    if (document.exitFullscreen) 
    {
        document.exitFullscreen();
    } 
    else if (document.mozCancelFullScreen) 
    {
        document.mozCancelFullScreen();  
    } 
    else if (document.webkitExitFullscreen) 
    { 
        document.webkitExitFullscreen();
    } 
    else if (document.msExitFullscreen) 
    {
        document.msExitFullscreen();
    }
}