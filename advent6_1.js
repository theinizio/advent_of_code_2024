const input =
  `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;


const directions = [
  'up',
  'right',
  'down',
  'left',
];

const lines = input.split("\n");

let direction = 'up';

const fieldWidth = input.indexOf("\n");
const fieldHeight = Math.trunc(input.length / fieldWidth);


console.log([fieldWidth, fieldHeight]);
let startPosY = 0;
let startPosX = 0;

for (let i = 0; i < lines.length; i++) {
  startPosX = lines[i].indexOf('^');
  if (startPosX > -1) {
    startPosY = i;
    break;
  }
}

let curPos = {
  x: startPosX,
  y: startPosY,
};

console.log(curPos);


const isEndOfField = () => {
  if (
    curPos.x === 0
    || curPos.x === (lines[0].length - 1)
    || curPos.y === 0
    || curPos.y === (lines.length - 1)
  ) {
    console.log(curPos);
    return true;
  }


  return false;
}

const nextDirection = () => {
  if (direction === "up") {
    return "right";
  }
  if (direction === "right") {
    return "down";
  }
  if (direction === "down") {
    return "left";
  }
  if (direction === "left") {
    return "up";
  }
}

const hasObstacle = () => {
  switch (direction) {
    case "up":
      return lines[curPos.y - 1][curPos.x] === '#';
    case "right":
      return lines[curPos.y][curPos.x + 1] === '#';
    case "down":
      return lines[curPos.y + 1][curPos.x] === '#';
    case "left":
      return lines[curPos.y][curPos.x - 1] === '#';
  }
}

const redraw = () => {
  const line = lines[curPos.y];
  lines[curPos.y] = line.substring(0, curPos.x ) + 'X' + line.substring(curPos.x + 1);

}

const step = () => {
  if (hasObstacle()) {
    direction = nextDirection();
    console.log('hasObstacle, moving ', direction, curPos);
    // console.log(lines.join("\n"));
    return;
  }


  switch (direction) {
    case "up":
      curPos.y--;
      break;
    case "right":
      curPos.x++;
      break;
    case "down":
      curPos.y++;
      break;
    case "left":
      curPos.x--;
      break;
  }

  redraw();

  // console.log(curPos);
}

console.log('------------------------');

console.log('moving ', direction);
while (!isEndOfField()) {
  step();
}

console.log(Array.from(lines.join('').matchAll(/X/g)).length);



