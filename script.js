document.getElementById('check-btn').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;
    if (!text) {
      alert('Please input a value');
      return;
    }
    var cleanedText = text.replace(/[\W_]/g, '').toLowerCase();
    var reversedText = cleanedText.split('').reverse().join('');
    var resultText = text + ' is ' + (cleanedText === reversedText ? '' : 'not ') + 'a palindrome';
    document.getElementById('result').textContent = resultText;
  });