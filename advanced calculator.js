(function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let lastResult = null;
    let speechVolume = 1.0; // volume range 0.0 to 1.0
    let isMuted = false; // mute state

    function updateDisplay(value) {
        display.textContent = value || '0';
    }

    function factorial(n) {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    function calculate(expression) {
        try {
            // Replace custom operators with JS operators
            expression = expression.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
            // Evaluate expression safely
            // eslint-disable-next-line no-eval
            let result = eval(expression);
            if (typeof result === 'number' && !isNaN(result)) {
                return result;
            }
            return 'Error';
        } catch {
            return 'Error';
        }
    }

    function appendInput(value) {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        const result = calculate(currentInput);
        if (result !== 'Error') {
            updateDisplay(result.toString());
            speakResult(result.toString());
        } else {
            updateDisplay(currentInput);
        }
    }

    function clearInput() {
        currentInput = '';
        updateDisplay('0');
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput || '0');
    }

    function performFunction(action) {
        let val = parseFloat(currentInput);
        if (isNaN(val)) return;
        switch(action) {
            case 'sqrt':
                currentInput = Math.sqrt(val).toString();
                break;
            case 'square':
                currentInput = (val * val).toString();
                break;
            case 'inverse':
                currentInput = (1 / val).toString();
                break;
            case 'sin':
                currentInput = Math.sin(val).toString();
                break;
            case 'cos':
                currentInput = Math.cos(val).toString();
                break;
            case 'tan':
                currentInput = Math.tan(val).toString();
                break;
            case 'log':
                currentInput = Math.log10(val).toString();
                break;
            case 'ln':
                currentInput = Math.log(val).toString();
                break;
            case 'exp':
                currentInput = Math.exp(val).toString();
                break;
            case 'factorial':
                currentInput = factorial(Math.floor(val)).toString();
                break;
        }
        updateDisplay(currentInput);
        speakResult(currentInput);
    }

    function printInvoice() {
        const invoiceWindow = window.open('', '_blank');
        const invoiceContent = 
            '<html>' +
            '<head>' +
                '<title>Invoice</title>' +
                '<style>' +
                    '@page { size: A2; margin: 20mm; }' +
                    'body { font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; color: #333; }' +
                    'h1 { text-align: center; }' +
                    '.invoice { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; }' +
                    '.value { font-size: 1.5rem; font-weight: bold; margin-top: 20px; }' +
                    'button { margin-top: 20px; padding: 10px 20px; font-size: 1rem; cursor: pointer; }' +
                    '.info { margin-bottom: 15px; font-size: 1rem; }' +
                    'input[type="text"], select, input[type="number"] { width: 100%; padding: 6px 8px; margin: 4px 0; box-sizing: border-box; font-size: 1rem; }' +
                    'select { max-height: 100px; overflow-y: auto; }' +
                '</style>' +
            '</head>' +
            '<body>' +
                '<div class="invoice">' +
                    '<h1>Invoice</h1>' +
                    '<div class="info">' +
                        '<label>Shop Name:<br><input type="text" id="shopName" value="My Shop" /></label>' +
                        '<label>Email:<br><input type="text" id="email" value="shop@example.com" /></label>' +
                        '<label>Mobile:<br><input type="text" id="mobile" value="+1234567890" /></label>' +
                    '</div>' +
                    '<p>Calculation Result: <span class="value">' + (currentInput || '0') + '</span></p>' +
                    '<label>Number of Items:<br><input type="number" id="numItems" value="1" min="1" /></label>' +
                    '<label>Unit of Item:<br><select id="unitSelect">' +
                        '<option value="pcs">pcs</option>' +
                        '<option value="kg">kg</option>' +
                        '<option value="liters">liters</option>' +
                        '<option value="boxes">boxes</option>' +
                        '<option value="packs">packs</option>' +
                        '<option value="dozens">dozens</option>' +
                        '<option value="meters">meters</option>' +
                        '<option value="feet">feet</option>' +
                        '<option value="yards">yards</option>' +
                        '<option value="gallons">gallons</option>' +
                    '</select></label>' +
                    '<button onclick="window.print()">Print</button>' +
                '</div>' +
            '</body>' +
            '</html>';
        invoiceWindow.document.write(invoiceContent);
        invoiceWindow.document.close();
    }

    function voiceInput() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Speech recognition not supported in this browser.');
            return;
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();

        recognition.onresult = function(event) {
            const speechResult = event.results[0][0].transcript;
            // Sanitize and convert speech to calculator input
            const sanitized = speechResult.replace(/[^0-9+\-*/().]/g, '');
            currentInput += sanitized;
            updateDisplay(currentInput);
            speakResult(currentInput);
        };

        recognition.onerror = function(event) {
            alert('Error occurred in speech recognition: ' + event.error);
        };
    }

    document.querySelector('.buttons').addEventListener('click', function(e) {
        const target = e.target;
        if (!target.matches('button')) return;

        if (target.hasAttribute('data-value')) {
            appendInput(target.getAttribute('data-value'));
        } else if (target.hasAttribute('data-action')) {
            const action = target.getAttribute('data-action');
            switch(action) {
                case 'clear':
                    clearInput();
                    break;
                case 'backspace':
                    backspace();
                    break;
                case 'volume-up':
                    speechVolume = Math.min(1.0, speechVolume + 0.1);
                    console.log("Volume increased to", speechVolume);
                    if (isMuted) {
                        isMuted = false;
                        updateMuteButtonLabel();
                        speakResult("Voice output unmuted");
                    }
                    speakResult("Volume increased to " + Math.round(speechVolume * 100) + " percent");
                    break;
                case 'volume-down':
                    speechVolume = Math.max(0.0, speechVolume - 0.1);
                    console.log("Volume decreased to", speechVolume);
                    if (isMuted) {
                        isMuted = false;
                        updateMuteButtonLabel();
                        speakResult("Voice output unmuted");
                    }
                    speakResult("Volume decreased to " + Math.round(speechVolume * 100) + " percent");
                    break;
                case 'mute':
                    isMuted = !isMuted;
                    console.log("Mute toggled. isMuted:", isMuted);
                    updateMuteButtonLabel();
                    if (isMuted) {
                        window.speechSynthesis.cancel();
                        alert('Voice output muted');
                    } else {
                        speakResult('Voice output unmuted');
                    }
                    break;
                case 'equals':
                    const result = calculate(currentInput);
                    currentInput = result.toString();
                    updateDisplay(currentInput);
                    speakResult(currentInput);
                    break;
                case 'sqrt':
                case 'square':
                case 'inverse':
                case 'sin':
                case 'cos':
                case 'tan':
                case 'log':
                case 'ln':
                case 'exp':
                case 'factorial':
                    performFunction(action);
                    break;
                case 'print':
                    printInvoice();
                    break;
                case 'voice':
                    voiceInput();
                    break;
                case 'add':
                    appendInput('+');
                    break;
                case 'subtract':
                    appendInput('-');
                    break;
                case 'multiply':
                    appendInput('*');
                    break;
                case 'divide':
                    appendInput('/');
                    break;
            }
        }
    });

    function updateMuteButtonLabel() {
        const muteButton = document.querySelector('button[data-action="mute"]');
        if (muteButton) {
            muteButton.textContent = isMuted ? "Unmute" : "Mute";
        }
    }

    function readAloud(text) {
        if (isMuted) {
            console.log("Speech is muted, skipping speak.");
            return;
        }
        if ('speechSynthesis' in window) {
            if (window.speechSynthesis.speaking) {
                console.log("Speech synthesis is already speaking, canceling.");
                window.speechSynthesis.cancel(); // Cancel any ongoing speech
            }
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.volume = speechVolume;
            utterance.onstart = () => console.log("Speech started:", text);
            utterance.onend = () => console.log("Speech ended:", text);
            utterance.onerror = (e) => console.log("Speech error:", e.error);
            window.speechSynthesis.speak(utterance);
        } else {
            console.log("Speech synthesis not supported in this browser.");
        }
    }

    function speakResult(text) {
        console.log("speakResult called with text:", text);
        readAloud(text);
    }

    // Test speech synthesis on load
    window.addEventListener('load', () => {
        speakResult("Speech synthesis test. If you hear this, voice output is working.");
    });
})();
