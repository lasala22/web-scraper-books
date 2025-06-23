import puppeteer from "puppeteer";
import fs from "fs";

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const allBooks = [];
  let currentPage = 1;
  const maxPage = 5;

  while (currentPage < maxPage) {
    const url = `https://books.toscrape.com/catalogue/category/books_1/page-${currentPage}.html`;

    await page.goto(url);

    // Title of page
    // const title = await page.title();
    // console.log(`Page Title: ${title}`);

    const books = await page.evaluate(() => {
      const bookElements = document.querySelectorAll(".product_pod");
      return Array.from(bookElements).map((book) => {
        const title = book.querySelector("h3 a").getAttribute("title");
        const price = book.querySelector(".price_color").textContent;
        const stock = book.querySelector(".instock.availability")
          ? "Instock"
          : "Out of Stock";
        const rating = book
          .querySelector(".star-rating")
          .className.split(" ")[1];
        const link = book.querySelector("h3 a").getAttribute("href");

        return { title, price, stock, rating, link };
      });
    });
    allBooks.push(...books);
    currentPage ++;
  }
  
  fs.writeFileSync("books.json", JSON.stringify(allBooks, null, 2));
  console.log("Data save to books.json");
  await browser.close();
};

scrape();
