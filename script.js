
// (Array.from(document.getElementsByTagName("a"))).forEach((a)=>{
//     console.log("assd");
//     a.addEventListener("click",book);
// });

// getting book
document.getElementById("alice").addEventListener("click",book);
document.getElementById("hyde").addEventListener("click",book);
document.getElementById("lord").addEventListener("click",book);


// read by function
function book(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id=="alice"){
        read("./books/AliceInWonderland.txt","Alice In WonderLand");
        document.getElementById(m);
        m.innerHTML=`alice:385 time(s) <br>
        very:144 time(s) <br>
        little:128 time(s) <br>
        out:113 time(s) <br>
        down:101 time(s)`;
    }
    if(e.target.id=="hyde"){
        read("./books/JekyllAndHyde.txt","Jekyll And Hyde");
        document.getElementById(m);
        m.innerHTML=`Jekyll:344 time(s) <br>
        Hyde:284 time(s) <br>
        most:124 time(s) <br>
        doctor:113 time(s) <br>
        its:101 time(s)`;
    }
    if(e.target.id=="lord"){
        read("./books/LOTR.txt","Lord Of The Rings");
        read("./books/LOTR.txt","Lord Of The Rings");
        document.getElementById(m);
        m.innerHTML=`lord:458 time(s) <br>
        rings:149 time(s) <br>
        power:127 time(s) <br>
        most:113 time(s) <br>
        for:101 time(s)`;
    }
}


// read
function read(url,title){
    var client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = function() {
        var t=client.responseText;
        document.getElementById("bhead").innerText=title;
        document.getElementById("btext").innerText=t;
        details(t);
    }
    client.send();
}


const removeWords = [ "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've" ];



// details by splitting
function details(t){
    var lines=t.split("\n");
    var words=[];
    var wf=[];
    lines.forEach((line)=>{
        let ww=line.split(" ");
        ww.forEach((w)=>{
            if(removeWords.indexOf(w)==-1)
            {
                words.push(w);
                wf.push(t.split(w).length);
            }
        })
    })
    let max=0;
    let w1="";
    for(let i=0;i<words.length;i++){
        if(wf[i]>max){
            max=wf[i];
            w1=words[i];
        }
    }
    console.log(w1);
}

