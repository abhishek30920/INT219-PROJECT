let songindex=0;
let audioelement=new Audio('songs/1.mp3')
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif')
let mastersongname=document.getElementById('mastersongname')
let songitems=Array.from(document.getElementsByClassName('songitem'));
let due=document.getElementById('due')

let songs=[
    {songname:"arcade",filePath:"songs/1.mp3",coverpath:"covers/arcade.png"},
    {songname:"Flames",filePath:"songs/2.mp3",coverpath:"covers/flames.png"},
    {songname:"MyHouse",filePath:"songs/3.mp3",coverpath:"covers/myhouse.jpg"},
    {songname:"GDFR",filePath:"songs/4.mp3",coverpath:"covers/gdfr.png"},
    {songname:"Nolie",filePath:"songs/5.mp3",coverpath:"covers/nolie.jpg"},
    {songname:"Nosleep",filePath:"songs/6.mp3",coverpath:"covers/nosleep.png"},
    {songname:"EDM",filePath:"songs/7.mp3",coverpath:"covers/edm.jpeg"},
    {songname:"Sakhiyaan",filePath:"songs/8.mp3",coverpath:"covers/sakhiyaan.jpg"},
    {songname:"Stealmygirl",filePath:"songs/9.mp3",coverpath:"covers/1d.png"},
    {songname:"EDM",filePath:"songs/10.mp3",coverpath:"covers/edm.jpeg"}
    

]

songitems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath
    element.getElementsByClassName("songname")[0].innertext=songs[i].songname;
});




//audioelement.play()
//handle play/pause


audioelement.addEventListener('timeupdate',()=>
{
    
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
 
    progressbar.value=progress
})


progressbar.addEventListener('change',()=>
{
    audioelement.currentTime=progressbar.value * audioelement.duration/100;
})


const makeallplays=()=>
{

    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>
    {
        
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}





Array.from(document.getElementsByClassName('songplay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeallplays();
        songindex=parseInt(e.target.id)

        
                                             
       
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle')
        if(audioelement.paused || audioelement.currentTime<=0)
        {
            audioelement.src=`songs/${songindex+1}.mp3`;
            mastersongname.innerText=songs[songindex].songname;
            audioelement.currentTime=0
       
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle')
            masterplay.classList.remove('fa-play-circle')
            masterplay.classList.add('fa-pause-circle')

            gif.style.opacity=1
            audioelement.play();
        }

        else{
           
            audioelement.src=`songs/${songindex+1}.mp3`;
            mastersongname.innerText=songs[songindex].songname;
            audioelement.currentTime=0
           
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle')
            masterplay.classList.add('fa-play-circle')
            masterplay.classList.remove('fa-pause-circle')
        
            gif.style.opacity=0
            audioelement.pause();
    
        }
    })
})
masterplay.addEventListener('click',()=>
{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioelement.pause();
        masterplay.classList.add('fa-play-circle')
        masterplay.classList.remove('fa-pause-circle')
        gif.style.opacity=0

    }
})

document.getElementById('next').addEventListener('click',()=>
{
    if(songindex>=9)
    {
        songindex=0
    }
    else
    {
        songindex+=1
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioelement.currentTime=0

    gif.style.opacity=1
    audioelement.play();


 
})

document.getElementById('previous').addEventListener('click',()=>
{
    if(songindex<=0)
    {
        songindex=0
    }
    else
    {
        songindex-=1
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioelement.currentTime=0
    audioelement.play();

    gif.style.opacity=1
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle')
    
 
})



