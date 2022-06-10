function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
} 

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let hello = "I can\'t hear you!";
    let HELLO = "YES INDEED!" 
    let letsHaveDinnerTogether = "I would love to!"
    if(string.toLowerCase(string) === string) {
        return hello;
    }
    else if(string.toUpperCase(string) === string) {
        return HELLO;
    }
    else if("Let's have dinner together!" === string) {
        return letsHaveDinnerTogether
    }
}