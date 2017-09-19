

var images= new Array(5);
images[0]="puppy.jpg"
images[1]="kitten.jpg"
images[2]="nugget.jpg"
images[3]="bird.jpg"
images[4]="shark.jpg"


let i=0;
function forward()
{

var im=document.getElementById("image");

if (i!=4 && i!=5){

//  im.src=images[i];
  i++
  im.src=images[i];
}
else {

  im.src=images[4];
  i=-1;
}

}


function backward()
{

var im=document.getElementById("image");
if (i!=0 && i!=-1){

//  im.src=images[i];
  i--
  im.src=images[i];
}
else {

  im.src=images[0];
  i=5;
}

}
