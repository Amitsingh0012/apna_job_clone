function validateMobile(input) {
    const mobileValue = input.value.replace(/\D/g, ''); 
    const errorSpan = document.getElementById('error');
    
    if (mobileValue.length === 10) {
        errorSpan.textContent = ''; 
    } 
    else {
        errorSpan.textContent = 'Please enter a valid mobile number';
    }
}
const numberField1 = document.getElementById('mobile');
document.addEventListener('click', function(event) {
    if (event.target !== numberField1) {
        numberField1.style.border = '1px solid red';
    } else {
        numberField1.style.border = '1px solid #ccc';
    }
});
const form = document.getElementById('mobile');
        const numberField = document.getElementById('numberField');
        const errorSpan = document.getElementById('error');
        const submitButton = document.getElementById('submitButton');

        form.addEventListener('submit', function(event) {
            if (!numberField.checkValidity()) {
                event.preventDefault(); 
                errorSpan.textContent = 'Please enter a valid number (e.g., +911234567890).';
            } else {
                errorSpan.textContent = '';
            }
        });
        numberField.addEventListener('input', function() {
            submitButton.disabled = !numberField.checkValidity();
        });
        
        function myFunction(id) {
            var x = document.getElementById(id);
            var elements = document.getElementsByClassName("w3-show");
            
            for (var i = 0; i < elements.length; i++) {
              if (elements[i].id !== id) {
                elements[i].className = elements[i].className.replace("w3-show", "");
                elements[i].previousElementSibling.className = 
                  elements[i].previousElementSibling.className.replace("w3-black", "w3-black");
              }
            }
            
            if (x.className.indexOf("w3-show") == -1) {
              x.className += " w3-show";
              x.previousElementSibling.className = 
                x.previousElementSibling.className.replace("w3-black", "w3-black");
            } else { 
              x.className = x.className.replace(" w3-show", "");
              x.previousElementSibling.className = 
                x.previousElementSibling.className.replace("w3-black", "w3-black");
            }
          }
          