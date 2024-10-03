const data = [
    {
      name: "Superman",
      favoriteIceCreams: [
        "Strawberry",
        "Vanilla",
        "Chocolate",
        "Cookies & Cream",
      ]
    },
    {
      name: "Batman",
      favoriteIceCreams: [
        "Cookies & Cream",
        "Mint Chocolate Chip",
        "Chocolate",
        "Vanilla",
      ]
    },
    {
      name: "Flash",
      favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"]
    },
    {
      name: "Aquaman",
      favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"]
    },
    {
      name: "Green Lantern",
      favoriteIceCreams: ["Vanilla", "French Vanilla", "Vanilla Bean", "Strawberry"]
    },
    {
      name: "Robin",
      favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"]
    }
  ];
  
function countIceCreams(data) {
  return data.reduce((acc, superhero) => {
    superhero.favoriteIceCreams.forEach(iceCream => {
      if (acc[iceCream]) {
        acc[iceCream]++;
      } else {
        
        acc[iceCream] = 1;
      }
    });
    return acc;
  }, {}); 
}

const result = countIceCreams(data);
console.log(result);