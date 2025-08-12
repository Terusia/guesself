// Last update: 2025-08-11

const songs = [
    ['Borateen', 'Sophomore Jinx', 'Stewardess', 'So Low', 'Marathon Shirt', 'Lucid Anne', 'Cannon', 'Missed The Friction', 'Superstar', "Mother Nature's Fault", 'Big Important Nothing', 'Lost My Senses'],
    ['Joy, the Mechanical Boy', 'Dielya Downtown', 'Crimes on Paper', 'KiDdies', 'Cinderblocks for Shoes', 'Song for Nelson', 'Preschool Days', 'Cater to Your Ego', 'Microchip Girl', 'Sassy Britches', "When You're Alone"],
    ['Having Dinner With The Funk', 'Wide Awake at 7', "Let's Pretend We're Married", "Breakdancer's Reunion", 'Pumpkinhead', 'Glued to the Girl', 'Kodak Moment', 'Hey, Deceiver', 'Moronic', 'Titanic', 'Binocular', 'Fat Man and Dancing Girl', 'Dog You Are', 'Love Interest', 'Hey Lou', 'Dizzy', 'Life Could Be Swell'],
    ['The End of it All', 'Kill The Barflies', 'Meg Ryan', 'Suzie Q Sailaway', 'Uno Song', 'Paint By Numbers', 'What Are You Thinking!?', 'Sucker', 'Breakfast With Girls', 'Better Than Aliens', 'It All Comes Out in the Wash', 'Callgirls', 'Placing the Blame'],
    ['I Am a Little Explosion', '5 Alive', 'Chameleon', 'Dead Man', 'Trunk Fulla Amps', 'Pattycake', 'Ordinaire', 'Miracle Worker', "Hi, My Name's Cindy", 'What a Fool Believes', '9 Lives', 'I Love To Love Your Love My Love','Trunk Fulla Amps (Edit)', 'Resurrect'],  
    ['See If You Swim (Selfafornia)', 'Wednesday Again', 'America', 'Shelf Life', 'Waiting', 'Anything is Impossible', 'Baby, Can You Dig Your Man?', 'Puppy Love', 'Suzie Q Sailaway (Toy Version)'],
    ['Breakdown', 'With You Somehow', 'Summersound', 'While The Gangsters Sleep', "Gotta Stop Messin' About", 'Donating To Science', 'Busy Sending Me', 'This is Love', 'See If You Swim (PMG)', 'Call Me Back', 'Now', "(You're So) Deadly", 'Pretty One', 'Punk Bitch Flash', 'Brooklyn', 'I Knew What I Know Now', 'Keepaway', 'Potential', 'Evolution', 'Glue', "She's An Island"],
    ['Runaway', 'Subconscious Life', 'Gonna Rock', 'Hey, Hipster', 'Looks and Money', 'Splitting Atoms'],
    ['Hellbent', 'Emotional', 'Insecure Sober', 'Pathetic Song', 'How Can I Make You Happy?', "Can't Go On", 'Coming Over', 'No One Knows You', 'Grow Up', 'The Pounding Truth', 'Out With A Bang', 'L.A. Radio']
]

const lengths = [
    ['3:09', '5:14', '2:56', '3:07', '3:27', '4:08', '3:26', '2:06', '2:33', '3:46', '2:36', '4:26'],
    ['4:15', '2:21', '3:01', '2:37', '3:00', '2:01', '3:07', '2:02', '3:43', '5:06', '3:07'],
    ['1:08', '4:05', '3:33', '2:49', '1:56', '3:39', '2:17', '3:07', '2:49', '3:05', '1:56', '2:15', '2:57', '2:06', '3:28', '3:35', '3:21'],
    ['4:48', '4:16', '3:59', '2:25', '2:56', '3:07', '4:53', '4:18', '3:12', '1:54', '4:00', '3:29','5:00'],
    ['3:39', '3:12', '2:56', '3:07', '3:27', '4:08', '3:26', '2:06', '2:33', '3:46', '2:36', '4:26', '3:26','3:22'],
    ['3:20', '3:29', '1:08', '3:42', '3:03', '3:57', '4:04', '3:47', '2:49'],
    ['2:18', '3:24', '3:26', '2:48', '2:50', '4:10', '3:15', '2:17', '3:23', '3:01', '4:22', '2:35', '2:54', '3:25', '4:34', '3:59', '2:53', '3:46', '4:01', '2:35', '3:31'],
    ['3:18', '3:13', '3:14', '2:41', '2:14', '3:04'],
    ['3:09', '3:27', '2:23', '2:25', '3:13', '4:05', '4:03', '2:43', '3:22', '3:18', '3:32', '2:27'] 

]



var style = "bre"


var randomal = randomRange(0,8)
var hrz = songs[randomal][randomRange(0,randomal)]

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

z = 0
function incr(t){
    if (z+t < 9){
        z+=t;updateScore(z,false,false)
    } else{
        z+=t;updateScore(z,false,true)
    }
    
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parseTime(j){
    const [mino,seco] = j.split(":");
    return Number(seco) + Number(mino) * 60;
}

function calcTime(inp1,inp2,inp3){
    return (Math.abs(parseTime(inp1) - parseTime(inp2)) <= inp3)
}

function createNewGuess(arg){
    
    const template = document.getElementById("guessedsong")
    const parent = document.getElementById("wheredeygo")
    var clone = template.content.cloneNode(true);

    // Alla värden som alltid gäller

    const songName = arg
    const songImage = ("albums/" + songs.findIndex(sub => sub.some(item => item.toLowerCase() === arg.toLowerCase())) + ".webp")
    const songAlbum = songs.findIndex(s=>s.some(d=>d===arg))
    const songTrack = songs[songs.findIndex(s=>s.some(d=>d===arg))].findIndex(x=>x===arg) 
    const songLength = lengths[songAlbum][songTrack]

    const correctAlbum = songs.findIndex(s=>s.some(d=>d===hrz))
    const correctTrack = songs[songs.findIndex(s=>s.some(d=>d===hrz))].findIndex(x=>x===hrz) 
    const correctLength = lengths[correctAlbum][correctTrack]

    clone.querySelectorAll("td")[0].innerHTML = songName

    clone.querySelectorAll("td")[1].querySelector("img").src = songImage

    clone.querySelectorAll("td")[2].innerHTML = songTrack + 1

    clone.querySelectorAll("td")[3].innerHTML = songLength

    // Jämför med det rätta svaret

    if(arg != hrz){

        // Först albumet

        if(songAlbum == correctAlbum){
            clone.querySelectorAll("td")[1].classList = ""
            clone.querySelectorAll("td")[1].classList.add("greencorrect") 
        } else if(songAlbum - 1 == correctAlbum){
            clone.querySelectorAll("td")[1].classList = ""
            clone.querySelectorAll("td")[1].classList.add("yellowcorrect")
        } else if(songAlbum + 1 == correctAlbum){
            clone.querySelectorAll("td")[1].classList = ""
            clone.querySelectorAll("td")[1].classList.add("yellowcorrect")
        } 

        if(songAlbum > correctAlbum){
            clone.querySelectorAll("td")[1].classList.add("down")
        } else if(songAlbum < correctAlbum){
            clone.querySelectorAll("td")[1].classList.add("up")
        }

        // Track #

        if(songTrack == correctTrack){
            clone.querySelectorAll("td")[2].classList = ""
            clone.querySelectorAll("td")[2].classList.add("greencorrect") 
        } else if(songTrack - 1 == correctTrack || songTrack - 2 == correctTrack){
            clone.querySelectorAll("td")[2].classList = ""
            clone.querySelectorAll("td")[2].classList.add("yellowcorrect")
        } else if(songTrack + 1 == correctTrack || songTrack + 2 == correctTrack){
            clone.querySelectorAll("td")[2].classList = ""
            clone.querySelectorAll("td")[2].classList.add("yellowcorrect")
        } 

        if(songTrack > correctTrack){
            clone.querySelectorAll("td")[2].classList.add("down")
        } else if(songTrack < correctTrack){
            clone.querySelectorAll("td")[2].classList.add("up")
        }

        // Length

        if(songLength == correctLength){
            clone.querySelectorAll("td")[3].classList = ""
            clone.querySelectorAll("td")[3].classList.add("greencorrect") 
        } else if(calcTime(songLength,correctLength,30)){
            clone.querySelectorAll("td")[3].classList = ""
            clone.querySelectorAll("td")[3].classList.add("yellowcorrect")
        }

        if(parseTime(songLength) > parseTime(correctLength)){
            clone.querySelectorAll("td")[3].classList.add("down")
        } else if(parseTime(songLength) < parseTime(correctLength)){
            clone.querySelectorAll("td")[3].classList.add("up")
        }

        


        



    } else{

        // Sybau jag kommer inte använda loops

        clone.querySelectorAll("td")[0].classList = ""
        clone.querySelectorAll("td")[1].classList = ""
        clone.querySelectorAll("td")[2].classList = ""
        clone.querySelectorAll("td")[3].classList = ""

        clone.querySelectorAll("td")[0].classList.add("greencorrect")
        clone.querySelectorAll("td")[1].classList.add("greencorrect")
        clone.querySelectorAll("td")[2].classList.add("greencorrect")
        clone.querySelectorAll("td")[3].classList.add("greencorrect")
    }

    // Sist, appenda det till dokumentet

    parent.appendChild(clone);

    
   return
}



async function updateScore(g,win,lose){

    if(!lose){
        if(win){
        
        for(c=0;c<4;c++){ // <--- cpp spotted?!?!
            await wait(200)
            Array.from(document.querySelectorAll(".headlightcon")).forEach((i,k)=>{
            
            if (g==k+1){i.children[0].classList="";i.children[0].classList.add("headlightg");}
            else if(g<k+1){i.children[0].classList="";i.children[0].classList.add("headlightg");}
            else{i.children[0].classList="";i.children[0].classList.add("headlightg");}
            
            
        })
        await wait(200)
            Array.from(document.querySelectorAll(".headlightcon")).forEach((i,k)=>{
            
            if (g==k+1){i.children[0].classList="";i.children[0].classList.add("headlightw");}
            else if(g<k+1){i.children[0].classList="";i.children[0].classList.add("headlightw");}
            else{i.children[0].classList="";i.children[0].classList.add("headlightw");}
            
            
        })
        
        }
        await wait(200)
        Array.from(document.querySelectorAll(".headlightcon")).forEach((i,k)=>{
            
            if (g==k+1){i.children[0].classList="";i.children[0].classList.add("headlightg");}
            else if(g<k+1){i.children[0].classList="";i.children[0].classList.add("headlightg");}
            else{i.children[0].classList="";i.children[0].classList.add("headlightg");}
        })

        
    }
    else{
        Array.from(document.querySelectorAll(".headlightcon")).forEach((i,k)=>{
            if (g==k+1){i.children[0].classList="";i.children[0].classList.add("headlighty");}
            else if(g<k+1){i.children[0].classList="";i.children[0].classList.add("headlightw");}
            else{i.children[0].classList="";i.children[0].classList.add("headlightr");}
            
            
        })


    }
    } else{
        for(c=0;c<4;c++){
            await wait(200)
            Array.from(document.querySelectorAll(".headlightcon")).forEach((i,k)=>{
            
            if (g==k+1){i.children[0].classList="";i.children[0].classList.add("headlightr");}
            else if(g<k+1){i.children[0].classList="";i.children[0].classList.add("headlightr");}
            else{i.children[0].classList="";i.children[0].classList.add("headlightr");}
            
            
        })
        await wait(200)
            Array.from(document.querySelectorAll(".headlightcon")).forEach((i,k)=>{
            
            if (g==k+1){i.children[0].classList="";i.children[0].classList.add("headlightw");}
            else if(g<k+1){i.children[0].classList="";i.children[0].classList.add("headlightw");}
            else{i.children[0].classList="";i.children[0].classList.add("headlightw");}
            
            
        })
        
        }
        await wait(200)
        Array.from(document.querySelectorAll(".headlightcon")).forEach((i,k)=>{
            
            if (g==k+1){i.children[0].classList="";i.children[0].classList.add("headlightr");}
            else if(g<k+1){i.children[0].classList="";i.children[0].classList.add("headlightr");}
            else{i.children[0].classList="";i.children[0].classList.add("headlightr");}
        })
    }
    
    
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("input").addEventListener("input", ()=>{
        var list = document.getElementById("lsit");
        var value = document.getElementById("input").value.toLowerCase();
        list.innerHTML = "";
        if (value == ""){
            return;
        }


        var filtered = songs.flat().filter((item) =>{
            if ((item.toLowerCase()).includes(value)){return true}else{return false}
        }) 

        

        filtered.slice(0, 5).forEach((k)=>{
            
            const template = document.getElementById("sugg");
            var clone = template.content.cloneNode(true);
            const suggestion = clone.querySelector(".hovercolor");
            clone.querySelector("p").innerHTML = k;
            clone.querySelector("p").style.color = "white";

            suggestion.addEventListener("click", ()=>{
                document.getElementById("input").value = k;
                list.innerHTML = "";
            })
            list.appendChild(clone)
        })

        document.addEventListener("click", (event)=>{
            if (event.target !== document.getElementById("input") && !document.getElementById("input").contains(event.target)) {
                list.innerHTML ="";
            }
        })

        

        

    })
})







// Haha, I can't be bothered to do these fuckass styles, Breakfast with Girls it is //

function styledoc(){
    const doc = document.documentElement.style
    switch(style){
    case "bre": doc.setProperty('--backgroundcolor', 'black');
    doc.setProperty('--headercolor', 'white');
    doc.setProperty("--backgroundimage","url(bd.png)");
    doc.setProperty('--backgroundcolor2', "black");
    doc.setProperty('--backgroundcolor', 'black');
    doc.setProperty('--bordercolor', 'black');
    break
    case "giz": doc.setProperty('--backgroundcolor', 'rgb(250 236 201)');
    doc.setProperty('--headercolor', "rgb(153 204 255)");
    doc.setProperty("--backgroundimage","url(tan.jpg)");
    doc.setProperty('--backgroundcolor2', 'rgb(238 80 32)');
    doc.setProperty('--bordercolor', 'white');
}
}

styledoc()

// Input stuff - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

document.addEventListener("DOMContentLoaded", ()=>{
    updateScore(z,false,false);console.log();
    document.getElementById("enterbutt").addEventListener("click",()=>{
        if((z+1 != 10) && (songs.flat().includes(document.getElementById("input").value))){
            if(hrz != (document.getElementById("input").value)){
                incr(1);
                createNewGuess(document.getElementById("input").value);
                document.getElementById("input").value = "";
            } else{
                updateScore(0,true,false)
                createNewGuess(document.getElementById("input").value);
                document.getElementById("input").value = "";
            }
            

        }
    })
        
    


}


    
)

function makeBouncy(){
        document.querySelectorAll("h1").forEach((item)=>{
        item.classList.toggle("striped")
        })
    
}

function shatter(){
        document.querySelectorAll("h1").forEach((item)=>{
        item.classList.toggle("shatter")
        })
    
}




// To be used on the self wiki

/*

(function()
{   
    var k = 3
    var data = [];
    for(i=1;i<document.getElementsByTagName("tbody")[k].children.length-1;i++){
        data.push(document.getElementsByTagName("tbody")[k].children[i].children[1].querySelector("a").title);
        console.log(document.getElementsByTagName("tbody")[k].children[i].children[1].querySelector("a").title)
    }
    return data;

}())

(function()
{   
    var k = 2
    var data = [];
    for(i=1;i<document.getElementsByTagName("tbody")[k].children.length-1;i++){
        data.push(document.getElementsByTagName("tbody")[k].children[i].children[2].innerHTML);
        console.log(document.getElementsByTagName("tbody")[k].children[i].children[2].innerHTML)
    }
    return data;

}())

*/