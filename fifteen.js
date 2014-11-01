/*
//THE UNIVERSITY OF THE WEST INDIES                 File Name: .../info2180project2/fifteen.js
//FACULTY OF SCIENCE & TECHNOLOGY                   Created by: 620064203
//DEPARTMENT OF COMPUTING                           Created on: 26/10/2014
//INFO2180 - Dynamic Web Development I
//Project 2 - "Fifteen Puzzle"
*/




window.onload = function(){
    
     var puzzleArea = $("puzzlearea");
     var puzzlePiece = puzzleArea.getElementsByTagName("div");
     
     var i = 0;
     var x = 0;
     var y = 0;
     var x_axis=0;
     var y_axis =0;
     
     
   
    for (i=0; i<puzzlePiece.length; i++) 
    {
        
        //Add CSS Class "puzzlepiece" to each div within "puzzlearea"
        puzzlePiece[i].className = "puzzlepiece";
        
        
        //Positon the puzzle pieces in 4x4 Grid Layout
        if(x==400)
        {
           x=0;
           y+=100;
           puzzlePiece[i].style.marginLeft = x + "px";
           puzzlePiece[i].style.marginTop = y + "px";
           x+=100; 
        }
        else
        {
          puzzlePiece[i].style.marginLeft = x + "px";
          puzzlePiece[i].style.marginTop = y + "px";
          x+=100; 
        }
        
        
        //Set background image to each puzzle piece and align image
        if(x_axis==-400)
        {
           x_axis = 0;
           y_axis-=100;
           puzzlePiece[i].style.backgroundImage = "url('number_15.jpg')";
           puzzlePiece[i].style.backgroundPositionX = x_axis + "px";
           puzzlePiece[i].style.backgroundPositionY = y_axis + "px";

           x_axis-=100;
        } 
        else
        {
            puzzlePiece[i].style.backgroundImage = "url('number_15.jpg')";
            puzzlePiece[i].style.backgroundPositionX = x_axis + "px";
            puzzlePiece[i].style.backgroundPositionY = y_axis + "px";
            x_axis-=100;
        }
        
        
        //Change appearance of puzzple piece when mouse passes over it
        puzzlePiece[i].addEventListener("mouseover", changeAppearance);
        puzzlePiece[i].addEventListener("mouseout", restoreAppearance);
        puzzlePiece[i].addEventListener("click", changePosition);
        
        
        
        
    }//End of for loop
    
    
     //Randomly re-arrange puzzle pieces upon click of shuffle button
     document.getElementById("shufflebutton").addEventListener("click", shuffle);
     document.getElementById("shufflebutton").addEventListener("click", feedback1);
     document.getElementById("shufflebutton").addEventListener("mouseout", feedback2);


    
    //Change appearance of puzzple piece when mouse passes over it
    function changeAppearance()
    {
        this.style.color = "blue";
        this.style.border = "2px solid blue";
    }
        
        
    //Restores appearance of puzzple piece when mouse leaves it
    function restoreAppearance()
    {
        this.style.color = "black";
        this.style.border = "2px solid black";
    
    }
     
        
    function changePosition()
    {
        var x_posOfBlank = 0;
        var y_posOfBlank = 0;
        
        for(var t=0; t<puzzlePiece.length; t++)
        {
            if(!puzzlePiece[t].hasAttribute("backgroundImage"))
            {
                x_posOfBlank = parseInt(puzzlePiece[t].style.marginLeft);
                y_posOfBlank = parseInt(puzzlePiece[t].style.marginTop);
            }
            else
            {
                x_posOfBlank = parseInt(puzzlePiece[15].style.marginLeft);
                y_posOfBlank = parseInt(puzzlePiece[15].style.marginTop);
            }
        }
        
        this.style.marginTop = y_posOfBlank + "px";
        this.style.marginLeft = x_posOfBlank + "px";
        
        
        /*var xcoord = parseInt(this.style.marginLeft);
        var ycoord = parseInt(this.style.marginTop);
        
        if(xcoord == 300 && ycoord == 300)
        {
            this.style.marginTop = "0px";
            this.style.marginLeft = "0px";
            
        }*/

    }
    
    //Provides feedback when shuffle button depressed
    function feedback1()
    {
       this.style.backgroundColor = "green";
       this.style.color = "white";
       this.style.border = "4px solid green";
    }
    
    
    //Provides feedback when shuffle button released
    function feedback2()
    {
       this.style.backgroundColor = "white";
       this.style.color = "black";
       this.style.border = "1px solid black";
    }
    

    //Randomly re-arrange puzzle pieces upon click of shuffle button
    function shuffle()
    {
        var index = 0;
        var xaxis = 0;
        var yaxis = 0;

        for(var p=0; p<16; p++)
        {
            index = Math.floor(Math.random() * 15);
            
            if(xaxis==400)
            {
                xaxis=0;
                yaxis+=100;
                puzzlePiece[index].style.marginTop = xaxis + "px";
                puzzlePiece[index].style.marginLeft = yaxis + "px";
                xaxis+=100;
            }
            else
            {
                puzzlePiece[index].style.marginTop = xaxis + "px";
                puzzlePiece[index].style.marginLeft = yaxis + "px";
                xaxis+=100;
            }
        }
            
    }
    
    
    //Apply class "movablepiece" to a piece that can be moved
   /* for (var m=0; m<puzzlePiece.length; m++)
    {
       puzzlePiece[m].className = "movablepiece";
        
    }*/
    
    
    
    //Check whether puzzle piece is movable
    
    
       //Change position of puzzle piece upon it being clicked
 /*   for (var l=0; l<puzzlePiece.length; l++)
    {
        puzzlePiece[l].addEventListener("click", changePosition);
        
    }
    
    
    function changePosition()
    {
        this.style.backgroundColor = "red";
        this.marginTop = "300px";
        this.marginLeft = "300px";
    }*/
    
       /* function shuffle()
    {
        var index1 = 0;
        var index2 = 0;
        var count = 0;
        var temp = 0;
        
        while(count < 30)
        {
            
            index1 = Math.floor(Math.random() * 15);
            index2 = Math.floor(Math.random() * 15);
            
            temp = puzzlePiece[index1];
            puzzlePiece[index1] = puzzlePiece[index2];
            puzzlePiece[index2] = temp;
            
            count++;
        }
        
    }*/
    
    

};//End of window.onload function

    
    

    

