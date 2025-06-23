# 📚 Web Scraper for Books.toscrape.com

A Node.js script using Puppeteer to scrape book data from [books.toscrape.com](https://books.toscrape.com).

## 🚀 Features

- Scrapes book details from multiple pages
- Extracts: title, price, stock status, rating, and individual links
- Saves data to a cleanly formatted JSON file
- Handles pagination automatically

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/web-scraper-books.git
cd web-scraper-books
```

2. Install dependencies:
```bash
npm install
```

## 🛠 Usage

Run the scraper:
```bash
node scrape.js
```

The script will:
1. Open a headless browser
2. Navigate through pages 1-4 of the books catalogue
3. Save all book data to `books.json`

## 📂 Output Example

```json
[
  {
    "title": "A Light in the Attic",
    "price": "£51.77",
    "stock": "Instock",
    "rating": "Three",
    "link": "catalogue/a-light-in-the-attic_1000/index.html"
  },
  ...
]
```

## ⚙️ Configuration

Modify these variables in `scrape.js`:
- `maxPage`: Change to scrape more/fewer pages
- Output file name/path in `fs.writeFileSync()`

## 📌 Dependencies

- [Puppeteer](https://pptr.dev/) (Latest version)
- Node.js v14+

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

---

