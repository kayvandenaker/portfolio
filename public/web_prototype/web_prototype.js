const amount = 5;
let activeZone;
let dialRadius = 250;
let rotation;
var cursor;
var cursorCurrent;
let angles = [];
let anglesCurrent = [];

var scale = [];
var currentScale = [];
let overlay = 0;
let currentOverlay = 0;
let gradient;
let dialImg;
const bgColors = ['#EDE8EC', '#DEFFE6', '#FFFEDF', '#DEFEFF', '#FFF0DE'];
let zoneBg = [];

let zones;
let dial;
let coworkers = [];
let pf = [];
let callAnimation = false;

function setup() {
  createCanvas(1366, 768);
  noStroke();
  background(255);
  imageMode(CENTER);

  zones = new Zones();
  dial = new Dial();
  
  //for(let i = 0; i < amount - 2; i++){
  //  coworkers[i] = new Coworker("Name", i, int(random(3,5)));
  //}
  coworkers[0] = new Coworker("Name", 0, 4);
  coworkers[1] = new Coworker("Name", 1, 3);
  coworkers[2] = new Coworker("Name", 2, 3);
  coworkers[3] = new Coworker("Name", 3, 1);
  coworkers[4] = new Coworker("Name", 4, 2);
  coworkers[4].position = 0.5;
  coworkers[4].rootDistance = 600;
  coworkers[5] = new Coworker("Name", 5, 2);
  coworkers[5].position = 0.9;
  coworkers[5].rootDistance = 600;
}


function draw() {
  rotation = mouseX;
  zones.display();
  dial.display();

  for(let i = 0; i<coworkers.length;i++){
    coworkers[i].display();
  }
  
  for(let i = 0; i < coworkers.length; i++){
    for(let j = 0; j < coworkers.length; j++){
      if(j != i && j < coworkers.length && callAnimation == false){
        coworkers[i].distanceTo(coworkers[j]);
      }
    }
  }
  

  zones.overlay();  
}

function preload() {
  //img = loadImage('assets/rockies.jpg');
  gradient = loadImage("data/gradient3.png");
  dialImg = loadImage("data/dial.png");
  for(let i=0;i<6;i++){pf[i] = loadImage("data/cw" + i + ".jpeg");}
}

function mouseClicked() {
  for(let i = 0; i<coworkers.length;i++){
    coworkers[i].call();
  }
}

function keyPressed() {
  if(key == 'c'){
    coworkers[4].callToAnimation(); 
  }
  if(key == 'm'){
    coworkers[3].statusAnimation(); 
  }
}

class Zones {
  constructor() {    
    angles[amount] = TWO_PI;
    angles[0] = PI;
    anglesCurrent[amount] = TWO_PI;
    
    for(let i=0; i < amount; i++){
      anglesCurrent[i] = PI;
      zoneBg[i] = loadImage("data/bg" + str(i) + ".png");
      scale[i] = 0;
      currentScale[i] = 0;
    }
    
    
    gradient.resize(width + 5, 0); 
  }

  display() {
    activeZone = int(amount * rotation / width); // 0 - 4
    cursor = amount * rotation / width - activeZone;
    
    for(let i=0; i < amount; i++){
      if(i <= activeZone){angles[i] = PI + i * PI/10;} 
      else{angles[i] = PI + i * PI/10 + PI/2;}
      
      let dA = angles[i] - anglesCurrent[i];
      anglesCurrent[i] += dA * PI/100;
     
    
     if(i == activeZone){
       scale[i] = 1.7;       
     }
     else{
       scale[i] = 0.5;
     }
     
     let dS = scale[i] - currentScale[i];
     currentScale[i] += dS * 0.05;
     
      fill(bgColors[i]);
      
      arc(width/2, height, width*2, width*2, anglesCurrent[i], anglesCurrent[i+1], PIE);   
    }
    
    image(gradient, width/2,height);
    fill(255);
    rect(0,0,width, height-width/2);
    
    for(let i=0; i < amount; i++){
      if(i == activeZone){
         tint(255,240); 
       }
       else{
         tint(255,200);
       }
      push();
      translate(width/2 + cos(anglesCurrent[i] + 0.5 * (anglesCurrent[i+1] - anglesCurrent[i]))*600, height +sin(anglesCurrent[i] + 0.5 * (anglesCurrent[i+1] - anglesCurrent[i]))*600);
      scale(currentScale[i]);
      //print(i + ":" + currentScale[i]);
      image(zoneBg[i], 0,0);
      pop();
      noTint();
    }
  }
  
  overlay(){
    if(rotation < 50){ overlay = 175; } 
    else{ overlay = 0; }
    
    let dO = overlay - currentOverlay;
    currentOverlay += dO * 0.1;
    fill(0,0,0,currentOverlay);
    rect(0,0,width,height); 
      
  }
}

class Dial{

 
  constructor(){
   dialImg.resize(dialRadius*2, dialRadius*2); 
  }
  
  display(){
    cursorCurrent = cursor;
 
    stroke(0);
    strokeWeight(dialRadius);
    strokeCap(ROUND);
    line(width/2, height, width/2 + cos(anglesCurrent[activeZone] + cursorCurrent * (anglesCurrent[activeZone+1] - anglesCurrent[activeZone]))*(dialRadius*0.75), height +sin(anglesCurrent[activeZone] + cursorCurrent * (anglesCurrent[activeZone+1] - anglesCurrent[activeZone]))*(dialRadius*0.75));
    strokeWeight(1);
    //line(width/2, height, width/2 + cos(anglesCurrent[activeZone] + cursor * (anglesCurrent[activeZone+1] - anglesCurrent[activeZone]))*500, height +sin(anglesCurrent[activeZone] + cursor * (anglesCurrent[activeZone+1] - anglesCurrent[activeZone]))*500);
    //arc(width/2, height, 300, 300, anglesCurrent[activeZone], anglesCurrent[activeZone] + cursor * (anglesCurrent[activeZone+1] - anglesCurrent[activeZone]), PIE);
    noStroke();
    
    fill(0);
    
 
    push();
    translate(width/2, height-20);
    rotate(float(amount) * rotation / width);
    image(dialImg, 0,0);
    pop();
  }
 }

 class Coworker{

  constructor(tempName, tempId, tempStatus){
    let size = 100;
    let mask = createGraphics(size,size);
    this.translateX = 0;
    this.translateXCurrent = 0;
    this.translateY = 0;
    this.translateYCurrent = 0;
    
    this.name = tempName;
    this.id = tempId;
    this.status = tempStatus;
    this.distance = 500;
    this.currentDistance = 500;
    this.rootDistance = random(dialRadius + size*2, height - size);
    this.scale = 1;
    this.currentScale = 1;
    this.opacity = 255;
    this.currentOpacity = 255;
    this.position = random(0.2,0.8);
    this.positionCurrent = this.position;
    this.calling = false;
    
    
    
    
    this.distance = this.rootDistance;
    
    mask.ellipse(size/2,size/2,size,size);
    pf[this.id].resize(size,size);
    pf[this.id].mask(mask);
    
    if(this.id == coworkers.length - 2){position = 0.4;}
    if(this.id == coworkers.length - 1){position = 0.8;}
    this.positionCurrent = this.position;
  }
  
  distanceTo(other){
     if(this.position > other.position - 0.15 && this.position < other.position + 0.15 && other.status == this.status){
       print("bubble hit"); 
       other.position = random(0.2,0.8);
     } 
  }
  
  display(){
    if(this.status == activeZone){
       this.scale = 1;
       this.opacity = 255;
       if(cursor < this.position + 0.05 && cursor > this.position - 0.05){
          //distance = dialRadius;
          this.scale = 1.25; 
        } else{
          this.distance = this.rootDistance;
        }
    } else{
      this.scale = 0.5;
      this.opacity = 220;
    }
    
    
    if(callAnimation == true){
      coworkers[5].rootDistance = this.distance + 40;
      coworkers[5].position = this.position + 0.025;
      print("start");
    }
    

    
    
    let dS = this.scale - this.currentScale;
    this.currentScale += dS * 0.2;
    let dD = this.distance - this.currentDistance;
    this.currentDistance += dD * 0.03;
    let dA = this.opacity - this.currentOpacity;
    this.currentOpacity += dA * 0.1;
    let dP = this.position - this.positionCurrent;
    this.positionCurrent += dP * 0.05;
    
    this.translateX = width/2 + cos(anglesCurrent[this.status] + this.positionCurrent * (anglesCurrent[this.status+1] - anglesCurrent[this.status]))*this.currentDistance;
    this.translateY = height +sin(anglesCurrent[this.status] + this.positionCurrent * (anglesCurrent[this.status+1] - anglesCurrent[this.status]))*this.currentDistance;
    let dTX = this.translateX - this.translateXCurrent;
    this.translateXCurrent += dTX * 0.1;
    let dTY = this.translateY - this.translateYCurrent;
    this.translateYCurrent += dTY * 0.1;

     tint(255, this.currentOpacity);
     push();
     translate(this.translateXCurrent, this.translateYCurrent);
     scale(this.currentScale);
     fill(255);
     ellipse(0,0,this.size,this.size);
     image(pf[this.id], 0,0);
     pop();
     noTint();
     
     if(this.currentDistance < dialRadius + 105 && this.calling == false){
        confirm("Open Microsoft Teams?"); 
        print("yes");
        this.calling = true;
     } 
     if(this.currentDistance > dialRadius + 110 && this.calling == true){ 
       print("no");
       this.calling = false;
     }
  }
  
  call(){
    if(this.status == activeZone && cursor < this.position + 0.05 && cursor > this.position - 0.05){
      this.distance = dialRadius + 100;
      //print("call");
    } 
  }
  
  callToAnimation(){    
    callAnimation = true;
  }
  
  statusAnimation(){
    this.status = 2;
    this.position = 0.1;
    //offset = 200;
  }


}
