function createGrid(nos){
  let rows = nos;
  let coloumns = nos;
  let padWidth = 500;
  let padHeight = 500;
  let boxW = padWidth/coloumns;
  let boxH = padHeight/rows;

const container = document.querySelector('#container');
container.style.width = `${padWidth}px`;
container.style.height = `${padHeight}px`;
//console.log(container);
for(let i = 0; i < rows; i++){
   // let rows = [];
  // rows.push(document.createElement('div')); why cant document.createElement('div') refs can be pushed into array
  let con = document.createElement('div');
  // console.log(rows[i]);
   con.classList.add(`row${i}`)
   con.style.display='flex';
   con.style.height=`${boxH}px`;
   container.appendChild(con);//value of con gets added 
//for every row do all the coloumns
  // console.log(container);
   for (let j = 0; j < coloumns; j ++){
    let square = document.createElement('div');
    square.classList.add(`squares`);
    square.style.width=`${boxH}px`;
     con.appendChild(square);//value of con gets added 
    //rows[i].appendChild(square);
   }
}
}

let button = document.createElement('button');
button.style.cssText= 'width:140px; height: 60px; color:blue;';
//button.style.height='60px';
button.textContent='click to enter';
//button.style.color="blue";

document.body.appendChild(button);
button.addEventListener('click', buildSquares);

/*function(){
  let num = prompt('Enter the no of squares per side', '');
  console.log(num);
  createGrid(num);
});*/

function buildSquares(){
  let num = prompt('Enter the no of squares per side', '');
  console.log(num);
  createGrid(num);
  proSquare();// has to be called inside coz if callled before prompt is answered, will create an empty nodelist as only after prompt squares arre created.
}

function proSquare(){
let squares = document.querySelectorAll('div.squares');
console.log(squares)
squares.forEach(square => {console.log('ff')
     square.setAttribute("style","flex:1")
    //square.style.backgroundColor='blue';
    square.addEventListener('mouseover', function (e) { 
       // console.log(e)
        //console.log(this)
        // generating random values for colors
        let col=new Array(3);
        console.log(col.length);
        for(i =0; i < col.length;i++){
        col[i]=(Math.random()*255);
        }
        //for(c of col){col.push(Math.random()*255)}
      //  col.forEach(col.push(Math.random()*255));
        
       this.style.backgroundColor=`rgb(${col[0]},${col[1]},${col[2]})`
       console.log(`rgb(${col[0]},${col[1]},${col[2]})`);
    } );
 

})
}