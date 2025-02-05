document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust the print button size based on window size
    function adjustButtonSize() {
        const printButton = document.querySelector('.calculator button[onclick="printInvoice()"]');
        if (window.innerWidth < 600) {
            printButton.style.width = '100%'; // Full width on small screens
            printButton.style.fontSize = '16px'; // Adjust font size
        } else {
            printButton.style.width = 'auto'; // Default width on larger screens
            printButton.style.fontSize = '18px'; // Default font size
        }
    }

    // Call the function on window resize
    window.addEventListener('resize', adjustButtonSize);

    // Call it initially to set the correct size
    adjustButtonSize();

    // Function to start voice input
    function startVoiceInput() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            processVoiceCommand(command);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error detected: ' + event.error);
        };

        recognition.start();
    }

    // Function to process voice commands
    function processVoiceCommand(command) {
        const operations = {
            'plus': '+',
            'add': '+',
            'minus': '-',
            'subtract': '-',
            'times': '*',
            'multiply': '*',
            'divided by': '/',
            'over': '/',
        };

        let result = command;

        // Replace words with symbols
        for (const [word, symbol] of Object.entries(operations)) {
            const regex = new RegExp(`\\b${word}\\b`, 'g');
            result = result.replace(regex, symbol);
        }

        // Append result to display
        appendToDisplay(result);
        
        // Automatically calculate the result
        calculateResult(); 
    }

    // Function to append value to display
    function appendToDisplay(value) {
        const display = document.getElementById('display');
        display.value += value; // Append the value to the display
    }

    // Function to calculate result
    function calculateResult() {
        const display = document.getElementById('display');
        try {
            const result = eval(display.value); // Calculate the result
            display.value = result; // Display the result
        } catch (error) {
            display.value = 'Error'; // Handle any errors
        }
    }

    // Function to clear display
    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    // Function to print the invoice
    function printInvoice() {
        const customerName = document.getElementById('customer-name').value;
        const customerAddress = document.getElementById('customer-address').value;
        const orgAddress = document.getElementById('org-address').value;
        const customerMobile = document.getElementById('customer-mobile').value;
        const itemName = document.getElementById('item-name').value;
        const itemPrice = document.getElementById('item-price').value;
        const itemUnit = document.getElementById('item-unit').value;
        const itemQuantity = document.getElementById('item-quantity').value;
        const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

        function printInvoice() {
            const customerName = document.getElementById('customer-name').value;
            const customerAddress = document.getElementById('customer-address').value;
            const orgAddress = document.getElementById('org-address').value;
            const customerMobile = document.getElementById('customer-mobile').value;
            const itemName = document.getElementById('item-name').value;
            const itemPrice = document.getElementById('item-price').value;
            const itemUnit = document.getElementById('item-unit').value;
            const itemQuantity = document.getElementById('item-quantity').value;
            const invoiceAmountWords = document.getElementById('invoice-amount-words').value;
        
            console.log('Print Invoice function called'); // Debug log
        
            // Validation: Check if all required fields are filled
            if (!customerName || !customerAddress || !orgAddress || !customerMobile || !itemName || !itemPrice || !itemUnit || !itemQuantity || !invoiceAmountWords) {
                alert('Please fill in all required fields.');
                return; // Exit the function if validation fails
            }
        
function printInvoice() {
    const customerName = document.getElementById('customer-name').value;
    const customerAddress = document.getElementById('customer-address').value;
    const orgAddress = document.getElementById('org-address').value;
    const customerMobile = document.getElementById('customer-mobile').value;
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemUnit = document.getElementById('item-unit').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

    // Validation: Check if all required fields are filled
    if (!customerName || !customerAddress || !orgAddress || !customerMobile || !itemName || !itemPrice || !itemUnit || !itemQuantity || !invoiceAmountWords) {
        alert('Please fill in all required fields.');
        return; // Exit the function if validation fails
    }

    let invoiceContent = `
        <h1>Invoice</h1>
        <p>Customer Name: ${customerName}</p>
        <p>Customer Address: ${customerAddress}</p>
        <p>Organization Address: ${orgAddress}</p>
        <p>Mobile Number: ${customerMobile}</p>
        <p>Item: ${itemName}</p>
        <p>Price: ${itemPrice} (${itemUnit})</p>
        <p>Quantity: ${itemQuantity}</p>
        <p>Total: ${itemPrice * itemQuantity}</p>
        <p>Invoice Amount in Words: ${invoiceAmountWords}</p>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Invoice</title></head><body>');
    printWindow.document.write(invoiceContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
        result = result.replace(regex, symbol);
    }

    // Append result to display
    appendToDisplay(result);

    // Automatically calculate the result
    calculateResult();
}

// Function to append value to display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display
}

// Function to calculate result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value); // Calculate the result
        display.value = result; // Display the result
    } catch (error) {
        display.value = 'Error'; // Handle any errors
    }
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to validate input fields
function validateInputFields() {
    const customerName = document.getElementById('customer-name').value;
    const customerAddress = document.getElementById('customer-address').value;
    const orgAddress = document.getElementById('org-address').value;
    const customerMobile = document.getElementById('customer-mobile').value;
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemUnit = document.getElementById('item-unit').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

    if (!customerName || !customerAddress || !orgAddress || !customerMobile || !itemName || !itemPrice || !itemUnit || !itemQuantity || !invoiceAmountWords) {
        alert('Please fill in all required fields.');
        return false; // Exit the function if validation fails
    }

    return true; // Return true if all fields are filled
}

// Function to print the invoice
function printInvoice() {
    if (validateInputFields()) {
        const customerName = document.getElementById('customer-name').value;
        const customerAddress = document.getElementById('customer-address').value;
        const orgAddress = document.getElementById('org-address').value;
        const customerMobile = document.getElementById('customer-mobile').value;
        const itemName = document.getElementById('item-name').value;
        const itemPrice = document.getElementById('item-price').value;
        const itemUnit = document.getElementById('item-unit').value;
        const itemQuantity = document.getElementById('item-quantity').value;
        const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

        console.log('Print Invoice function called'); // Debug log
        console.log('Customer Name:', customerName); // Debug log
        console.log('Customer Address:', customerAddress); // Debug log
        console.log('Organization Address:', orgAddress); // Debug log
        console.log('Customer Mobile:', customerMobile); // Debug log
        console.log('Item Name:', itemName); // Debug log
        console.log('Item Price:', itemPrice); // Debug log
        console.log('Item Unit:', itemUnit); // Debug log
        console.log('Item Quantity:', itemQuantity); // Debug log
        console.log('Invoice Amount Words:', invoiceAmountWords); // Debug log

        let invoiceContent = `
            <h1>Invoice</h1>
            <p>Customer Name: ${customerName}</p>
            <p>Customer Address: ${customerAddress}</p>
            <p>Organization Address: ${orgAddress}</p>
            <p>Mobile Number: ${customerMobile}</p>
            <p>Item: ${itemName}</p>
            <p>Price: ${itemPrice} (${itemUnit})</p>
            <p>Quantity: ${itemQuantity}</p>
            <p>Total: ${itemPrice * itemQuantity}</p>
            <p>Invoice Amount in Words: ${invoiceAmountWords}</p>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Invoice</title></head><body>');
        printWindow.document.write(invoiceContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Call the function on window resize
    window.addEventListener('resize', adjustButtonSize);

    // Call it initially to set the correct size
    adjustButtonSize();

    // Call the printInvoice function
    document.querySelector('.calculator button[onclick="printInvoice()"]').addEventListener('click', printInvoice);
});
```
            const customerName = document.getElementById('customer-name').value;
            const customerAddress = document.getElementById('customer-address').value;
            const orgAddress = document.getElementById('org-address').value;
            const customerMobile = document.getElementById('customer-mobile').value;
            const itemName = document.getElementById('item-name').value;
            const itemPrice = document.getElementById('item-price').value;
            const itemUnit = document.getElementById('item-unit').value;
            const itemQuantity = document.getElementById('item-quantity').value;
            const invoiceAmountWords = document.getElementById('invoice-amount-words').value;
        
            // Validation: Check if all required fields are filled
            if (!customerName || !customerAddress || !orgAddress || !customerMobile || !itemName || !itemPrice || !itemUnit || !itemQuantity || !invoiceAmountWords) {
                alert('Please fill in all required fields.');
                return; // Exit the function if validation fails
            }
        
            let invoiceContent = `
                <h1>Invoice</h1>
                <p>Customer Name: ${customerName}</p>
                <p>Customer Address: ${customerAddress}</p>
                <p>Organization Address: ${orgAddress}</p>
                <p>Mobile Number: ${customerMobile}</p>
                <p>Item: ${itemName}</p>
                <p>Price: ${itemPrice} (${itemUnit})</p>
                <p>Quantity: ${itemQuantity}</p>
                <p>Total: ${itemPrice * itemQuantity}</p>
                <p>Invoice Amount in Words: ${invoiceAmountWords}</p>
            `;
        
            const printWindow = window.open('', '_blank');
            printWindow.document.write('<html><head><title>Invoice</title></head><body>');
            printWindow.document.write(invoiceContent);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        
            // Bluetooth printing logic can be added here
            // Note: Bluetooth printing requires additional libraries or APIs to connect to the printer
        }
            let invoiceContent = `
                <h1>Invoice</h1>
                <p>Customer Name: ${customerName}</p>
                <p>Customer Address: ${customerAddress}</p>
                <p>Organization Address: ${orgAddress}</p>
                <p>Mobile Number: ${customerMobile}</p>
                <p>Item: ${itemName}</p>
                <p>Price: ${itemPrice} (${itemUnit})</p>
                <p>Quantity: ${itemQuantity}</p>
                <p>Total: ${itemPrice * itemQuantity}</p>
                <p>Invoice Amount in Words: ${invoiceAmountWords}</p>
            `;
        
            const printWindow = window.open('', '_blank');
            printWindow.document.write('<html><head><title>Invoice</title></head><body>');
            printWindow.document.write(invoiceContent);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        }```javascript
// Function to adjust the print button size based on window size
function adjustButtonSize() {
    const printButton = document.querySelector('.calculator button[onclick="printInvoice()"]');
    const screenWidth = window.innerWidth;
    printButton.style.width = screenWidth < 600 ? '100%' : 'auto';
    printButton.style.fontSize = screenWidth < 600 ? '16px' : '18px';
}

// Call the function on window resize
window.addEventListener('resize', adjustButtonSize);

// Call it initially to set the correct size
adjustButtonSize();

// Function to start voice input
function startVoiceInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        processVoiceCommand(command);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.start();
}

// Function to process voice commands
function processVoiceCommand(command) {
    const operations = {
        'plus': '+',
        'add': '+',
        'minus': '-',
        'subtract': '-',
        'times': '*',
        'multiply': '*',
        'divided by': '/',
        'over': '/',
    };

    let result = command;

    // Replace words with symbols
    for (const [word, symbol] of Object.entries(operations)) {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        result = result.replace(regex, symbol);
    }

    // Append result to display
    appendToDisplay(result);

    // Automatically calculate the result
    calculateResult();
}

// Function to append value to display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display
}

// Function to calculate result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value); // Calculate the result
        display.value = result; // Display the result
    } catch (error) {
        display.value = 'Error'; // Handle any errors
    }
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to print the invoice
function printInvoice() {
    if (validateInputFields()) {
        const customerName = document.getElementById('customer-name').value;
        const customerAddress = document.getElementById('customer-address').value;
        const orgAddress = document.getElementById('org-address').value;
        const customerMobile = document.getElementById('customer-mobile').value;
        const itemName = document.getElementById('item-name').value;
        const itemPrice = document.getElementById('item-price').value;
        const itemUnit = document.getElementById('item-unit').value;
        const itemQuantity = document.getElementById('item-quantity').value;
        const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

        console.log('Print Invoice function called'); // Debug log
        console.log('Customer Name:', customerName); // Debug log
        console.log('Customer Address:', customerAddress); // Debug log
        console.log('Organization Address:', orgAddress); // Debug log
        console.log('Customer Mobile:', customerMobile); // Debug log
        console.log('Item Name:', itemName); // Debug log
        console.log('Item Price:', itemPrice); // Debug log
        console.log('Item Unit:', itemUnit); // Debug log
        console.log('Item Quantity:', itemQuantity); // Debug log
        console.log('Invoice Amount Words:', invoiceAmountWords); // Debug log

        let invoiceContent = `
            <h1>Invoice</h1>
            <p>Customer Name: ${customerName}</p>
            <p>Customer Address: ${customerAddress}</p>
            <p>Organization Address: ${orgAddress}</p>
            <p>Mobile Number: ${customerMobile}</p>
            <p>Item: ${itemName}</p>
            <p>Price: ${itemPrice} (${itemUnit})</p>
            <p>Quantity: ${itemQuantity}</p>
            <p>Total: ${itemPrice * itemQuantity}</p>
            <p>Invoice Amount in Words: ${invoiceAmountWords}</p>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Invoice</title></head><body>');
        printWindow.document.write(invoiceContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}
```-```javascript
// Function to adjust the print button size based on window size
function adjustButtonSize() {
    const printButton = document.querySelector('.calculator button[onclick="printInvoice()"]');
    const screenWidth = window.innerWidth;
    printButton.style.width = screenWidth < 600 ? '100%' : 'auto';
    printButton.style.fontSize = screenWidth < 600 ? '16px' : '18px';
}

// Call the function on window resize
window.addEventListener('resize', adjustButtonSize);

// Call it initially to set the correct size
adjustButtonSize();

// Function to start voice input
function startVoiceInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        processVoiceCommand(command);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.start();
}

// Function to process voice commands
function processVoiceCommand(command) {
    const operations = {
        'plus': '+',
        'add': '+',
        'minus': '-',
        'subtract': '-',
        'times': '*',
        'multiply': '*',
        'divided by': '/',
        'over': '/',
    };

    let result = command;

    // Replace words with symbols
    for (const [word, symbol] of Object.entries(operations)) {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        result = result.replace(regex, symbol);
    }

    // Append result to display
    appendToDisplay(result);

    // Automatically calculate the result
    calculateResult();
}

// Function to append value to display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display
}

// Function to calculate result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value); // Calculate the result
        display.value = result; // Display the result
    } catch (error) {
        display.value = 'Error'; // Handle any errors
    }
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to print the invoice
function printInvoice() {
    const customerName = document.getElementById('customer-name').value;
    const customerAddress = document.getElementById('customer-address').value;
    const orgAddress = document.getElementById('org-address').value;
    const customerMobile = document.getElementById('customer-mobile').value;
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemUnit = document.getElementById('item-unit').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

    // Validation: Check if all required fields are filled
    if (!customerName || !customerAddress || !orgAddress || !customerMobile || !itemName || !itemPrice || !itemUnit || !itemQuantity || !invoiceAmountWords) {
        alert('Please fill in all required fields.');
        return; // Exit the function if validation fails
    }

    let invoiceContent = `
        <h1>Invoice</h1>
        <p>Customer Name: ${customerName}</p>
        <p>Customer Address: ${customerAddress}</p>
        <p>Organization Address: ${orgAddress}</p>
        <p>Mobile Number: ${customerMobile}</p>
        <p>Item: ${itemName}</p>
        <p>Price: ${itemPrice} (${itemUnit})</p>
        <p>Quantity: ${itemQuantity}</p>
        <p>Total: ${itemPrice * itemQuantity}</p>
        <p>Invoice Amount in Words: ${invoiceAmountWords}</p>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Invoice</title></head><body>');
    printWindow.document.write(invoiceContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// Function to validate input fields
function validateInputFields() {
    const customerName = document.getElementById('customer-name').value;
    const customerAddress = document.getElementById('customer-address').value;
    const orgAddress = document.getElementById('org-address').value;
    const customerMobile = document.getElementById('customer-mobile').value;
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemUnit = document.getElementById('item-unit').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

    if (!customerName || !customerAddress || !orgAddress || !customerMobile || !itemName || !itemPrice || !itemUnit || !itemQuantity || !invoiceAmountWords) {
        alert('Please fill in all required fields.');
        return false; // Exit the function if validation fails
    }

    return true; // Return true if all fields are filled
}

// Call the validateInputFields function before printing the invoice
function printInvoice() {
    if (validateInputFields()) {
        // Rest of the printInvoice function remains the same
    }
}
``````javascript
// Function to adjust the print button size based on window size
function adjustButtonSize() {
    const printButton = document.querySelector('.calculator button[onclick="printInvoice()"]');
    const screenWidth = window.innerWidth;
    printButton.style.width = screenWidth < 600 ? '100%' : 'auto';
    printButton.style.fontSize = screenWidth < 600 ? '16px' : '18px';
}

// Call the function on window resize
window.addEventListener('resize', adjustButtonSize);

// Call it initially to set the correct size
adjustButtonSize();

// Function to start voice input
function startVoiceInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        processVoiceCommand(command);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.start();
}

// Function to process voice commands
function processVoiceCommand(command) {
    const operations = {
        'plus': '+',
        'add': '+',
        'minus': '-',
        'subtract': '-',
        'times': '*',
        'multiply': '*',
        'divided by': '/',
        'over': '/',
    };

    let result = command;

    // Replace words with symbols
    for (const [word, symbol] of Object.entries(operations)) {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        result = result.replace(regex, symbol);
    }

    // Append result to display
    appendToDisplay(result);

    // Automatically calculate the result
    calculateResult();
}

// Function to append value to display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display
}

// Function to calculate result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value); // Calculate the result
        display.value = result; // Display the result
    } catch (error) {
        display.value = 'Error'; // Handle any errors
    }
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to validate input fields
function validateInputFields() {
    const customerName = document.getElementById('customer-name').value;
    const customerAddress = document.getElementById('customer-address').value;
    const orgAddress = document.getElementById('org-address').value;
    const customerMobile = document.getElementById('customer-mobile').value;
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemUnit = document.getElementById('item-unit').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

    if (!customerName || !customerAddress || !orgAddress || !customerMobile || !itemName || !itemPrice || !itemUnit || !itemQuantity || !invoiceAmountWords) {
        alert('Please fill in all required fields.');
        return false; // Exit the function if validation fails
    }

    return true; // Return true if all fields are filled
}

// Function to print the invoice
function printInvoice() {
    if (validateInputFields()) {
        const customerName = document.getElementById('customer-name').value;
        const customerAddress = document.getElementById('customer-address').value;
        const orgAddress = document.getElementById('org-address').value;
        const customerMobile = document.getElementById('customer-mobile').value;
        const itemName = document.getElementById('item-name').value;
        const itemPrice = document.getElementById('item-price').value;
        const itemUnit = document.getElementById('item-unit').value;
        const itemQuantity = document.getElementById('item-quantity').value;
        const invoiceAmountWords = document.getElementById('invoice-amount-words').value;

        console.log('Print Invoice function called'); // Debug log
        console.log('Customer Name:', customerName); // Debug log
        console.log('Customer Address:', customerAddress); // Debug log
        console.log('Organization Address:', orgAddress); // Debug log
        console.log('Customer Mobile:', customerMobile); // Debug log
        console.log('Item Name:', itemName); // Debug log
        console.log('Item Price:', itemPrice); // Debug log
        console.log('Item Unit:', itemUnit); // Debug log
        console.log('Item Quantity:', itemQuantity); // Debug log
        console.log('Invoice Amount Words:', invoiceAmountWords); // Debug log

        let invoiceContent = `
            <h1>Invoice</h1>
            <p>Customer Name: ${customerName}</p>
            <p>Customer Address: ${customerAddress}</p>
            <p>Organization Address: ${orgAddress}</p>
            <p>Mobile Number: ${customerMobile}</p>
            <p>Item: ${itemName}</p>
            <p>Price: ${itemPrice} (${itemUnit})</p>
            <p>Quantity: ${itemQuantity}</p>
            <p>Total: ${itemPrice * itemQuantity}</p>
            <p>Invoice Amount in Words: ${invoiceAmountWords}</p>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Invoice</title></head><body>');
        printWindow.document.write(invoiceContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Call the function on window resize
    window.addEventListener('resize', adjustButtonSize);

    // Call it initially to set the correct size
    adjustButtonSize();

    // Call the printInvoice function
    document.querySelector('.calculator button[onclick="printInvoice()"]').addEventListener('click', printInvoice);
});
```

        console.log('Print Invoice function called'); // Debug log
        console.log('Customer Name:', customerName); // Debug log
        console.log('Customer Address:', customerAddress); // Debug log
        console.log('Organization Address:', orgAddress); // Debug log
        console.log('Customer Mobile:', customerMobile); // Debug log
        console.log('Item Name:', itemName); // Debug log
        console.log('Item Price:', itemPrice); // Debug log
        console.log('Item Unit:', itemUnit); // Debug log
        console.log('Item Quantity:', itemQuantity); // Debug log
        console.log('Invoice Amount Words:', invoiceAmountWords); // Debug log

        // Validation: Check if all required fields are filled
        if (!customerName || !customerAddress || !orgAddress || !customerMobile || !itemName || !itemPrice || !itemUnit || !itemQuantity || !invoiceAmountWords) {
            alert('Please fill in all required fields.');
            return; // Exit the function if validation fails
        }

        let invoiceContent = `
            <h1>Invoice</h1>
            <p>Customer Name: ${customerName}</p>
            <p>Customer Address: ${customerAddress}</p>
            <p>Organization Address: ${orgAddress}</p>
            <p>Mobile Number: ${customerMobile}</p>
            <p>Item: ${itemName}</p>
            <p>Price: ${itemPrice} (${itemUnit})</p>
            <p>Quantity: ${itemQuantity}</p>
            <p>Total: ${itemPrice * itemQuantity}</p>
            <p>Invoice Amount in Words: ${invoiceAmountWords}</p>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Invoice</title></head><body>');
        printWindow.document.write(invoiceContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
});
