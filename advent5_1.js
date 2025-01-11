


const rulesStr = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`;


const updatesStr = `75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;


const rules = rulesStr.split("\n");

const updates = updatesStr.split("\n").map((line) => line.split(","));

const isUpdateValid = update => {
  const copy = [...update];

  let valid = true;
  for (let i = 0; i < copy.length - 1; i++) {
    const a = copy[i];
    const b = copy[i + 1];

    const str = b + "|" + a;

    if (rules.includes(str)) {
      valid = false;
      break;
    }
  }
  return valid;
}

console.log(
  updates
    .filter((update) => isUpdateValid(update))
    .map((update) => update[Math.trunc(update.length / 2)])
    .reduce((acc, curr) => +acc + +curr, 0)
);
