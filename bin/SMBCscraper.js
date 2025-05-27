import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

function cacheGet(name) {
  if (fs.existsSync(`./cache${name}.html`)) {
    return fs.readFileSync(`./cache${name}.html`);
  }
  return false;
}

function cacheSet(name, value) {
  if (!fs.existsSync("./cache")) {
    fs.mkdirSync("./cache");
  }
  fs.writeFileSync(`./cache/${name}.html`, value);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let baseUrl = "https://www.smbc-comics.com";
for (let i = 10; i > 0; i--) {
  let name = baseurl + "/comic/" 
  let data = cacheGet(name);
  if (!data) {
    console.log("LIVE REQUEST!!!!!!!");
    await sleep(1000);
    let res = await axios.get(baseUrl);
    data = res.data;
    cacheSet(name, data);
  }

  //console.log(res.data);
  const $ = cheerio.load(data);
  let src = $("#cc-comic").attr("src");
  let title = $("#cc-comic").attr("title");
  console.log(src);
  console.log(title);
  url = $("#comicleft a.cc-prev").attr("href");
  console.log(url);
}
