function rolling() {
  const diceNumb = document.getElementById("inputDice").value;
  const result = document.getElementById("result")
  const diceImages = document.getElementById("images")
  const values = [];
  const images = [];

  for (let i = 0; i < diceNumb; i++) {
    const value = Math.floor(Math.random() * 6 + 1);
    values.push(value);
    images.push(`<img src="dice_images/${value}.PNG" alt='dice result'
    width='150px'></img>`)

  }
  
  result.textContent=`Dice result ${values.join(", ")}`; 
  diceImages.innerHTML=images.join(''); 
}