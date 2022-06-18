const Skills1 = document.getElementById('Skills1')
const Skills2 = document.getElementById('Skills2')
const Skills3 = document.getElementById('Skills3')
const Skills4 = document.getElementById('Skills4')
const textSKill1 = document.getElementById('textSkill1')
const textSKill2 = document.getElementById('textSkill2')
const textSKill3 = document.getElementById('textSkill3')
const textSKill4 = document.getElementById('textSkill4')
const block = document.getElementById('block')
const Fhoto = document.getElementById('Fhoto')
const myQuality = document.getElementById('myQuality')
const forjs = document.getElementsByClassName ('forjs')
const iconAge = document.getElementById('iconAge')
function SeeYouText (textSkill){
    if(textSkill.style.display === "block")
    textSkill.style.display = "none"
    else
    textSkill.style.display = "block"
}
Skills1.onclick = () => {
    SeeYouText(textSKill1)
}
Skills2.onclick = () => {
    SeeYouText(textSKill2)
}
Skills3.onclick = () => {
    SeeYouText(textSKill3)
}
Skills4.onclick = () => {
    SeeYouText(textSKill4)
}
window.onresize = () => {
if (window.innerWidth<=800){
block.style.width='100%'
Fhoto.style.display='none'
myQuality.style.gridTemplateColumns= '1fr'
myQuality.style.gridTemplateRows='1fr 1fr 1fr'
iconAge.style.display = 'none'
for(let i=0; i<forjs.length; i++){
    forjs[i].style.fontSize = '100%'
}
}
else{
block.style.width='80%'
Fhoto.style.display='block'
myQuality.style.gridTemplateColumns = '1fr 1fr 1fr'
myQuality.style.gridTemplateRows='1fr'
iconAge.style.display = 'block'
for(let i=0; i<forjs.length; i++){
    forjs[i].style.fontSize = '200%'
}
}
}