function setup(){
    canvas = createCanvas(200, 200);
    canvas.center();
    background("white");
    canvas.mouseRealeased(classiffyCanvas);
    synth = window.speechSynthesis;
}

function preload() {


classifier = m15.imageClassifire('DoodleNet');
}

function clearCanvas(){

    backgroud("white");
}

function draw(){
strokeWeight(13);
stroke(0);
if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseY);
}
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function classifyCanvas(){
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Etiqueta: ' + result[0].label;

    document.getElementById('confidence').innerHTML = 'Precisión: ' + Math.round(result[0].confidence * 100) + '%';

    utterThis =new SpeechSynthesisUtterance(result[0].label);
    synth.speak(utterThis);
}