const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Do not wait for the perfect moment. Take the moment and make it perfect. – Unknown",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
  "Knowing yourself is the beginning of all wisdom. – Aristotle",
  "In the middle of difficulty lies opportunity. – Albert Einstein",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Will Durant",
  "The only true wisdom is in knowing you know nothing. – Socrates",
  "Don’t raise your voice. Improve your argument. – Desmond Tutu",
  "Creativity is intelligence having fun. – Albert Einstein",
  "You can't use up creativity. The more you use, the more you have. – Maya Angelou",
  "Art is not freedom from discipline, but disciplined freedom. – John F. Kennedy",
  "Imagination is more important than knowledge. – Albert Einstein",
  "Every artist was first an amateur. – Ralph Waldo Emerson",
  "I am so clever that sometimes I don't understand a single word of what I am saying. – Oscar Wilde",
  "The road to success is dotted with many tempting parking spaces. – Will Rogers",
  "If you think you are too small to make a difference, try sleeping with a mosquito. – Dalai Lama",
  "Why fit in when you were born to stand out? – Dr. Seuss",
  "Life is short. Smile while you still have teeth. – Unknown"
];

function geet(){
    const text = document.getElementById("quote");
    const randomNumber = Math.floor(Math.random() * quotes.length);
    text.textContent=quotes[randomNumber]
}

setInterval(geet,3000)

function changeBackgroundColor() {
    const colors = ['#f4cccc', '#d9ead3','#3b3b3b', '#cfe2f3','#2f2f2f', '#fff2cc','#0d1b2a','#665c00','#660000', '#ead1dc', '#d0e0e3','#1c1c1c','#2c3e50', '#34495e',];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor,3000)