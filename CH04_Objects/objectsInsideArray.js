// {## Objects inside array}
let blockList = [
  { userName: "Binod", reason: "Abusive Content" },
  { userName: "John", reason: "Copy right" },
];

console.log(blockList);
for (let index = 0; index < blockList.length; index++) {
  console.log(blockList[index].userName);
}
