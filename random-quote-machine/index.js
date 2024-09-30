var currentQuote = "", currentAuthor = ""
const QUOTES = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "The harder I work, the luckier I get.", author: "Samuel Goldwyn" },
  { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
  { quote: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" }
];


$(document).ready(() => {
  getQuote()
  $('#new-quote').on('click', getQuote)
  $('#tweet-quote').on('click', () => {
    if (inIframe()) openURL(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${currentQuote}"${currentAuthor}`)}`)
  })
})

function getQuote() {
  const randomIndex = Math.floor(Math.random() * QUOTES.length)
  const quote = QUOTES[randomIndex]
  if (inIframe())
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor))
  $("#text").text(quote.quote)
  $("#author").html(quote.author)
}

function openURL(url) { window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0'); }

function inIframe() { try { return window.self !== window.top } catch (e) { return true } }