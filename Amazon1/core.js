document.getElementById('applyDiscount').addEventListener('click', function() {
  var discountCode = document.getElementById('discountCode').value;
  var originalPrice = 9.99;
  var discountedPrice;
  var errorMessage = document.getElementById('error-message');

  if (discountCode === "#2314-#5691-#9012") {
      discountedPrice = originalPrice * 0.90;
      document.getElementById('price').textContent = 'Price: £' + discountedPrice.toFixed(2);
      errorMessage.style.display = 'none'; // Ascunde mesajul de eroare
  } else {
      errorMessage.style.display = 'block'; // Afișează mesajul de eroare
  }
});

paypal.Buttons({
  createOrder: function(data, actions) {
      var priceText = document.getElementById('price').textContent;
      var priceValue = parseFloat(priceText.replace('Price: £', ''));

      return actions.order.create({
          purchase_units: [{
              amount: {
                  value: priceValue.toFixed(2)
              }
          }]
      });
  }
}).render('#paypal-button-container');
