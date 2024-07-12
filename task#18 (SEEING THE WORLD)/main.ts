//making a array of countries and print its original order
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
   console.log("Original order:", countriesToVisit );

//print the arrar in alphabatical order without modifying the actual array list
   console.log("Alphabatical order:", [...countriesToVisit].sort());

//show that the array is still in its Original order
  console.log("still in original order:", countriesToVisit);


//print the array in reversed order without modifying the actual array list
   console.log("Reverse Order:", [...countriesToVisit].reverse());

 //show that the array is still in its Original order
   console.log("still in original order:", countriesToVisit);

//we have changed the original arrayorder now
   console.log("Original array reversed:", countriesToVisit.reverse());

//Print the array to show that it's back to it's original order
   console.log("Back to original order:", countriesToVisit.reverse());


//Print the array to show that it's order has been changed in Alphabatical order now
    console.log("sorted in Alphabatical order :", countriesToVisit.sort());


 //we have changed again the original array order now in reverse order again
    console.log(" Original array Reversed again:", countriesToVisit.reverse());   

   
