import fs from "fs";
import chalk from "chalk";
const input1 = process.argv[2];

fs.readFile("./spotify.json", "utf-8", (err, data) => {
  let playlist = JSON.parse(data);
  playlist.push(input1);
  const pushBackData = JSON.stringify(playlist);
  fs.writeFile("./spotify.json", pushBackData, (err) => {
    if (!err) {
      console.log(chalk.bgCyanBright(` playlist updated added : ${input1} `));
      playlist.forEach((d, i) => {
        console.log(chalk.blue.underline.bold(`${i} : ${d}`));
      });
      console.log(chalk.blue.underline.bold("Added : " + input1));
    }
  });
});
