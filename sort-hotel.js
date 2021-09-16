var fs = require("fs");
var dataset = fs.readFileSync("./data/sort-hotel.txt").toString().split("\n");

mention_list = dataset[0];
num_of_reviews = dataset[1];

mentionSet = new Set();
mention_list.split(" ").forEach((elem) => {
  mentionSet.add(elem);
});

reviewsObj = {};
for (let i = 2; i < dataset.length; i = i + 2) {
  const hotel_id = dataset[i];
  const review = dataset[i + 1];
  reviewsObj[hotel_id] =
    hotel_id in reviewsObj ? reviewsObj[hotel_id] + " " + review : review;
}

result = [];
for (const [key, value] of Object.entries(reviewsObj)) {
  const words = value.split(" ");
  let count = 0;
  words.forEach((word) => {
    eWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    if (mentionSet.has(eWord)) {
      count++;
    }
  });
  obj = {};
  obj["hotel_id"] = key;
  obj["count"] = count;
  result.push(obj);
  // console.log(count);
}

var final = result
  .sort((a, b) => Number(b.count) - Number(a.count))
  .map((item) => item.hotel_id)
  .join(" ");

console.log(final);
