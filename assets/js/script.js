let buttonEl = document.getElementById('button')

const insults1 = ['stupid', 'sophmoric', 'soporific', 'dense', 'pustulant', 'abcessed', 'rot-infested', 'revolting','decaying','incorrigible', 'impotent', 'shameful', 'parasitic', 'interminable', 'underdeveloped', 'swine-like', 'vole-brained', 'incestuous', 'elbow-licking', 'maidenless' ];
const insults2 = ['laggard', 'tumor', 'fuccboi', 'fuckwit', 'knob-twister', 'pus-stain', 'degenerate', 'yokel', 'troglodyte', 'neer-do-well', 'dullard','upstart', 'imp', 'dung-monger', 'piss-muffin', 'grub-slobber', 'goblin-fucker', 'cretin', 'cur', 'tarnished', 'miscreant', 'villain', 'cum-wipe', 'wanker', 'nimrod', 'potato', 'undesirable'];
const insults3 = ['begone from me before I am sick', 'get thee hence', 'remove yourself from the gene pool', 'fall down a well', 'go get trapped in a paper bag', 'drown in mustard', 'get eaten by a whale', 'die in a fire', 'go find a ditch to die in', 'go back in your mother and die', 'yeet thyself back into the void', 'cover yourself in pitch and dive into a volcano', 'crawl back into the earth with the rest of the worms', 'fellate thyself with a potato peeler', 'exit my vicinity, lest I let loose a wallop upon thy noggin', 'crawl back into your fathers shriveled testicular units', 'go fuck yourself', 'become sick with an incurable ailment', 'launch yourself into space, never to return', 'burn your house down cooking ramen and stay there', 'suck on a camels poody hole', 'fall into a swirling nexus of dicks and eat every last one', 'die in the car crash your parents should have been in', 'go make yourself useful as cannon fodder', 'divide by 0 and free us of your presence', 'asphyxiate yourself with dental floss', 'stub your toe clean off', 'draw thyself closer to thy maker', 'tumble into a mineshaft and choke on poison gas']


function sortRandom() {
    for (let i= insults1.length-1;i>0;i--){
        let j = Math.floor(Math.random()* i)
        let k = insults1[i]
        insults1[i] = insults1[j]
        insults1[j] = k
    }
    for (let i= insults2.length-1;i>0;i--){
        let j = Math.floor(Math.random()* i)
        let k = insults2[i]
        insults2[i] = insults2[j]
        insults2[j] = k
    }
    for (let i= insults3.length-1;i>0;i--){
        let j = Math.floor(Math.random()* i)
        let k = insults3[i]
        insults3[i] = insults3[j]
        insults3[j] = k
    }


    document.getElementById('insult').innerHTML="You"+" " + insults1[0] + " " + insults2[0] + ", " + insults3[0]
}

buttonEl.addEventListener('click' , sortRandom)