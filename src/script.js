const btn = document.querySelector("#reloadbtn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

btn.addEventListener("click", () => {
  getQuote();
});
async function getQuote() {
  btn.disabled = true;
  const category = [
    "amazing",
    "failure",
    "famous",
    "future",
    "inspirational",
    "success",
    "alone",
  ];
  const randomNumber = Math.floor(Math.random() * category.length) + 1;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${category[randomNumber]}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "M0lOfQHnzZPCxAUkHG16gA==SIERy0iDYekynr4B",
      },
    }
  );
  if (!response.ok) {
    console.error("HTTP error:", response.status);
    return;
  }
  const data = await response.json();
  console.log(data[0]);
  quote.innerHTML = data[0].quote;
  author.innerHTML = data[0].author;
  btn.disabled = false;
}

getQuote();