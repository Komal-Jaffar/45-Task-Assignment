   //TASK #25 (ALIEN COLOUR)
//write an if statement to test whether the alien's color is green. if it is, print a message that the player just earned 5 points.

let alien_color:string = "green";
if ( alien_color === 'green'){
       console.log("Congratulations! you just earned 5 points!");
}

//write one version of this program that passes that if test and another that fails. (the version that fails will  have no output.)
alien_color = 'red';
if (alien_color ==='green'){
      console.log("Congratulations! you just earned 5 points!");
    
}