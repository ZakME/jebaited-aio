let proxyUrl = '',
    targetUrl = '',
    nextBuild = 851
    $jebait = $('#jebait');

checkNextBuild(nextBuild);
setTime();
checkAusTime();
setInterval( () => {
    checkAusTime();
}, 1000);
setInterval( () => {
    checkNextBuild(nextBuild);
}, 2000);

function checkNextBuild(buildNum) {
    $('#audio-jebait')[0].play();
    $jebait.append($('<button>').text('Pause Audio').click(()=>$('#audio-jebait')[0].pause()));
    $jebait.append('<br>')
        for (let i = 0; i < 45; i++) {
          $jebait.append($('<img>').attr('src','https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/3x'));
        }
}

function checkAusTime() {
    let time = new Date().toLocaleString('en-US', {timeZone: 'Australia/Sydney'})
    $('#timeAus').text(time.replace(/^.+,/g, ' '));
}

function setTime() {
    let time = new Date().toLocaleString('en-US', {timeZone: 'Australia/Sydney'})
    $('#time').text(time.replace(/^.+,/g, ' '));
}
