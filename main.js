Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
         });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LRc4mvv-R/.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
}
function identify()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}

function gotResult(error, results) {
    if (error)
    {console.error(error);
        }
    else{
        console.log(results);
        document.getElementById("span1").innerHTML=results[0].label;
        document.getElementById("span2").innerHTML=results[0].confidence.toFixed(4);
    }
}