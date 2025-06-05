import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function cacheGet(name) {
  const safeName = name.replaceAll("/", " ").replaceAll(":", "");
  const path = `./cache/${safeName}.html`;
  if (fs.existsSync(path)) {
    return fs.readFileSync(path);
  }
  return false;
}

function cacheSet(name, value) {
  const safeName = name.replaceAll("/", " ").replaceAll(":", "");
  if (!fs.existsSync("./cache")) fs.mkdirSync("./cache");
  fs.writeFileSync(`./cache/${safeName}.html`, value);
}

async function downloadImg(imgUrl) {
  const fileName = path.basename(new URL(imgUrl).pathname);
  const outDir = "./comics";
  const filePath = path.join(outDir, fileName);

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  if (fs.existsSync(filePath)) return;

  const res = await axios.get(imgUrl, { responseType: "stream" });
  const writer = fs.createWriteStream(filePath);
  await new Promise((resolve, reject) => {
    res.data.pipe(writer);
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

let baseUrl = "https://www.smbc-comics.com";
let url = baseUrl;
for (let i = 0; i < 20; i++) {
  const cacheName = url;
  let data = cacheGet(cacheName);

  if (!data) {
    console.log("LIVE REQUEST!!!!!!!");
    await sleep(1000);
    const res = await axios.get(url);
    data = res.data;
    cacheSet(cacheName, data);
  }

  const $ = cheerio.load(data);
  let src = $("#cc-comic").attr("src");
  let title = $("#cc-comic").attr("title");
  let next = $(".cc-prev").attr("href");

  if (src && src.startsWith("//")) {
    src = "https:" + src;
  } else if (src && src.startsWith("/")) {
    src = baseUrl + src;
  }

  if (next && next.startsWith("/")) {
    next = baseUrl + next;
    z;
  }

  console.log(src);
  console.log(title);
  console.log(next);

  await downloadImg(src);
  url = next;
}
