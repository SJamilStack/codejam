var fs = require("fs");
var dataset = fs
  .readFileSync("./data/customer-service.txt")
  .toString()
  .split("\n");

const num_of_current_agent = dataset[0];

let datapointArr = [];

for (let i = 2; i < dataset.length; i++) {
  const datapoints = dataset[i].split(" ");
  datapointArr.push({
    start: datapoints[0],
    end: datapoints[1],
  });
}

let overlaps = 0;
for (let i = 0; i < datapointArr.length - 1; i++) {
  const start1 = datapointArr[i].start;
  const start2 = datapointArr[i + 1].start;
  const end1 = datapointArr[i].end;
  const end2 = datapointArr[i + 1].end;
  if (start1 <= end2 && end1 >= start2) overlaps++;
}

num_of_agents_required = overlaps - num_of_current_agent;
console.log(num_of_agents_required <= 0 ? 0 : num_of_agents_required);
