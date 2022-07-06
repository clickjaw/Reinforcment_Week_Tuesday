// Unless stated otherwise, your code should go _only_ inside the anonymous function below.
(function () {
  const apples = [1, 3, 5, 7, 9];
  const bakers = [9, 0, 3, 8, 4, 2, 6, 1, 7, 5];
  const cards = [
    1, 0, 8, 14, 10, 6, 4, 22, 15, 24, 15, 13, 13, 5, 0, 25, 21, 24, 24, 17, 4,
    19, 15, 19, 9,
  ];
  const dogs = [
    29, 29, 17, 23, 23, 29, 17, 29, 17, 29, 23, 29, 23, 23, 29, 29, 23, 23, 17,
    23, 29, 29, 23, 29, 17,
  ];
  const eggs = [81, 75, 75, 81, 32, 75, 81, 75, 81];

  // 1. Show array apples.
  console.log(apples);
  // 2. Show how many elements are in array apples.
  console.log(apples.length);

  // 3. Calculate the sum of the numbers in array apples.

  let appleSum = 0;
  for (let i = 0; i < apples.length; i++) {
    appleSum += apples[i];
  }
  console.log(`Sum of apples: ${appleSum}`);

  // show the final result

  // 4. Show array bakers.
  console.log(bakers);
  // 5. Calculate the sum of the numbers in array bakers.
  let bakerSum = 0;
  for (let j = 0; j < bakers.length; j++) {
    bakerSum += bakers[j];
  }

  // show the final result
  console.log(`Sum of bakers: ${bakerSum}`);

  // 6a. Calculate the sum of the numbers in the even indices of array bakers.
  let evenBakerIndex = 0;
  for (m = 0; m < bakers.length; m += 2) {
    if (m % 2 == 0) {
      evenBakerIndex += bakers[m];
    }
    // console.log(evenBakerIndex);
  }

  // show the final result
  console.log(`Even Baker index: ${evenBakerIndex}`);

  // 6b. Calculate the sum of the even numbers in array bakers.
  let evenBakersArray = 0;
  for (let k = 0; k < bakers.length; k++) {
    if (bakers[k] % 2 == 0) {
      evenBakersArray += bakers[k];
    }
  }

  // show the final result
  console.log(`Even sum: ${evenBakersArray}`);

  // 7. Show array cards.
  console.log(cards);

  // 8. Determine *if* 15 is in array cards, and display the answer.
  // Note: There _is_ a built-in array.includes method to do this.
  //       Usually, you will use that method. But for this
  //       exercise, write it with a loop.
  // Usual way to find if an array has some value, such as 15.
  for (let n = 0; n < cards.length; n++) {
    if (cards[n] == 15) {
      console.log("Cards Array has a 15 card.");
    }
  }

  // show the final result

  // 9. Determine *where* 15 first appears in array cards.
  // Note: There _is_ a built-in array.indexOf method to do this.
  //       Usually, you will use that method. But for this
  //       exercise, write it with a loop.
  // Usual way to find the index of some value, such as 15:

  fifteenSearch = 0;
  for (let o = 0; o < cards.length; o++) {
    if (cards[o] == 15) {
      console.log(o);
      break;
    }
  }
  // show the final result

  // 10. How many times does 15 appear in array cards?
  fifteenCount = 0;
  for (let p = 0; p < cards.length; p++) {
    if (cards[p] == 15) {
      fifteenCount++;
    }
  }

  // show the final result
  console.log(`There are ${fifteenCount} 15 cards.`);

  // 11. How many times does 0, 4 any 13 appear in array cards?
  zeroCount = 0;
  fourCount = 0;
  thirteenCount = 0;
  for (let q = 0; q < cards.length; q++) {
    if (cards[q] == 0) {
      zeroCount++;
    } else if (cards[q] == 4) {
      fourCount++;
    } else if (cards[q] == 13) {
      thirteenCount++;
    }
  }

  // show the final result
  console.log(
    `There are ${zeroCount} 0s, ${fourCount} 4s, and ${thirteenCount} 13s.`
  );

  // 12. Which positions in array cards hold a 15?
  for (let r = 0; r < cards.length; r++) {
    if (cards[r] == 15) {
      console.log(`The 15 card is at ${r}.`);
    }
  }

  // show the final result

  // 13. How many numbers are in array cards are even?
  evenNumberCards = [];
  for (let s = 0; s < cards.length; s++) {
    if (cards[s] % 2 == 0) {
      evenNumberCards.push(cards[s]);
    }
  }

  // show the final result
  console.log(evenNumberCards);

  // 14. Show array dogs.
  console.log(`Dogs: ${dogs}`);

  // 15. How large is array dogs?
  console.log(`Dog length: ${dogs.length}`);

  // 16. Calculate whether there are more than 8 29s in array dogs.
  let twentyNineCount = 0;
  for (t = 0; t < dogs.length; t++) {
    if (dogs[t] == 29) {
      twentyNineCount++;
      if (twentyNineCount > 8) {
        console.log("There are more than 8 29s.");
      }
    }
  }

  // 17. Calculate whether there are more than 20 17s and 23s combined.
  let seventeenCount = 0;
  let twentyThreeCount = 0;
  combinedTotal = 0;

  for (let u = 0; u < dogs.length; u++) {
    if (dogs[u] == 17 || dogs[u] == 23) {
      combinedTotal++;
      if (combinedTotal > 20) {
        console.log("There are more than 20 combined 17s and 23s");
      } else {
        console.log("There are less than 20 combined 17s and 23s.");
      }
    }
  }

  // 18. Calculate how many 29s are in array dogs.

  console.log(`There are ${twentyNineCount} 29s.`);

  // 19. Calculate how many 23s and 17s combined are in array dogs.
  console.log(`The combined 17s and 23s equal ${combinedTotal}`);

  // YOU CAN STOP HERE -- July 5th, 2022
  // 20. Show array eggs.
  console.log(`Eggs: ${eggs}`)

  // 21. How large is array eggs?
  console.log(`Eggs Length: ${eggs.length}`)

  // 22. How many 32s are in array eggs?
  let twentyNineEgg = 0;
  for (let v = 0; v < eggs.length; v++){
    if (eggs[v] == 32){
      twentyNineEgg++;
      if (twentyNineEgg = 1){
        console.log("There is 1 32 in Eggs.")
      }else{console.log(`There are ${twentyNineEgg} 32s in Eggs.`)}
    }
  }
  // 23. Does array eggs have only 75s and 81s?
  for (let w = 0; w < eggs.length; w++ ){
    if (eggs[w] != 75 || eggs[w] != 81){
      console.log("There are other numbers than 75 and 81")
    }
  }
})();

// Stretch Goal Exercise 1

// Timer Challenge:

// Use the event timer function to animate the included sprite images of 'guy' images (in guy folder).
//  Start with an initial image of guy1.png then every .5 second (500 ms)
//  update the image to the next one in sequence. Once you reach image guy9.png
//  start over with the guy1.png image.

 let images = [], x = 0;
 images[0] = "guyfolder/guy1.png";
 images[1] = "guyfolder/guy2.png";
 images[2] = "guyfolder/guy3.png";
 images[3] = "guyfolder/guy4.png";
 images[4] = "guyfolder/guy5.png";
 images[5] = "guyfolder/guy6.png";
 images[6] = "guyfolder/guy7.png";
 images[7] = "guyfolder/guy8.png";
 images[8] = "guyfolder/guy9.png";
 function displayNextImage(){
  x = ((x == images.length - 1) ? 0: x + 1);
  
  document.getElementById("walkingImage").src = images[x];
}
function startTimer(){
  setInterval(displayNextImage, 100);
}

