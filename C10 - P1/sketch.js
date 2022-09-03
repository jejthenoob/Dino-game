var weight = [38, 47, 39, 46, 34];
// calculate the avg weight
// avg = total_weight / no_of_stud

var height = [127, 165, 130, 145, 120, 180, 176];
// sum of heights
var sum2 = 0;
var sum = 0;
function setup() 
{
  createCanvas(400,400);

  for (var i = 0; i < weight.length; i++){
    sum = sum + weight[i]
  }
  console.log(sum/weight.length);
}
for (var i = 0; i < height.length; i++){
  sum2 = sum2 + height[i]
}
console.log(sum2/height.length);
function draw() 
{
background(51);

}

