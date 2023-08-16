document.addEventListener("DOMContentLoaded", function() {
    const cardPay = document.getElementById("cardPay");
    const nobankBook = document.getElementById("nobankBook");

    cardPay.addEventListener("click", function() {
        cardPay.classList.add("selected");
        nobankBook.classList.remove("selected");
    });

    nobankBook.addEventListener("click", function() {
        nobankBook.classList.add("selected");
        cardPay.classList.remove("selected");

    });
});

const phoneNum = document.getElementById('phoneNum');

phoneNum.addEventListener('input', () => {
  const maxLength = 11;
  const value = phoneNum.value;

  if (value.length > maxLength) {
    phoneNum.value = value.slice(0, maxLength);
  }
});