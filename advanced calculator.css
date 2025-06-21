/* Basic reset */
* {
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background-color: #2f2f2f;
    color: #eee;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
}
.calculator {
    background: linear-gradient(145deg, #5a5a5a, #3a3a3a);
    border-radius: 15px;
    padding: 25px;
    width: 100%;
    max-width: 400px;
    box-shadow: 5px 5px 15px #2a2a2a, -5px -5px 15px #6a6a6a;
    border: 2px solid #888888; /* Grey border line */
}
.display {
    background: linear-gradient(145deg, #3a3a3a, #5a5a5a);
    color: #a0ffa0;
    font-size: 1.6rem;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    min-height: 60px;
    word-wrap: break-word;
    box-shadow: inset 2px 2px 5px #2a2a2a, inset -2px -2px 5px #6a6a6a;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
}
.buttons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
}
button {
    background: linear-gradient(145deg, #6e6e6e, #4a4a4a);
    border: none;
    border-radius: 12px;
    color: #ddd;
    font-size: 1.3rem;
    padding: 18px 0;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 3px 3px 6px #2a2a2a, -3px -3px 6px #6a6a6a;
    font-weight: 600;
    user-select: none;
}
button:hover {
    background: linear-gradient(145deg, #7f7f7f, #5a5a5a);
    box-shadow: 4px 4px 8px #1f1f1f, -4px -4px 8px #7f7f7f;
    color: #fff;
}
button:active {
    background: linear-gradient(145deg, #4a4a4a, #6e6e6e);
    box-shadow: inset 2px 2px 5px #2a2a2a, inset -2px -2px 5px #6a6a6a;
    color: #a0ffa0;
    transform: translateY(2px);
}
button.function {
    background: linear-gradient(145deg, #555555, #3d3d3d);
    color: #bbb;
    font-weight: 700;
}
button.function:hover {
    background: linear-gradient(145deg, #666666, #4d4d4d);
    color: #ddd;
}
/* Additional styles for print and voice buttons for responsiveness */
button.function[data-action="print"],
button.function[data-action="voice"] {
    transition: all 0.3s ease;
}
button.function[data-action="print"]:hover,
button.function[data-action="voice"]:hover {
    background: linear-gradient(145deg, #8a8a8a, #6a6a6a);
    color: #fff;
    box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #8a8a8a;
}
button.function[data-action="print"]:active,
button.function[data-action="voice"]:active {
    background: linear-gradient(145deg, #4a4a4a, #6e6e6e);
    box-shadow: inset 3px 3px 7px #1a1a1a, inset -3px -3px 7px #6a6a6a;
    color: #a0ffa0;
    transform: translateY(2px);
}
/* Red color for mathematical operator buttons */
button.function[data-action="add"],
button.function[data-action="subtract"],
button.function[data-action="multiply"],
button.function[data-action="divide"] {
    background: linear-gradient(145deg, #a83232, #7a1f1f);
    color: #fff;
    font-weight: 700;
    box-shadow: 3px 3px 6px #5a1a1a, -3px -3px 6px #b33a3a;
}
button.function[data-action="add"]:hover,
button.function[data-action="subtract"]:hover,
button.function[data-action="multiply"]:hover,
button.function[data-action="divide"]:hover {
    background: linear-gradient(145deg, #b84444, #8a2f2f);
    box-shadow: 4px 4px 8px #6a1f1f, -4px -4px 8px #c44a4a;
    color: #fff;
}
button.function[data-action="add"]:active,
button.function[data-action="subtract"]:active,
button.function[data-action="multiply"]:active,
button.function[data-action="divide"]:active {
    background: linear-gradient(145deg, #7a1f1f, #a83232);
    box-shadow: inset 2px 2px 5px #5a1a1a, inset -2px -2px 5px #b33a3a;
    color: #f88;
    transform: translateY(2px);
}
@media (max-width: 480px) {
    .calculator {
        max-width: 100%;
        padding: 15px;
    }
    button {
        font-size: 1rem;
        padding: 12px 0;
    }
    button.function[data-action="print"],
    button.function[data-action="voice"] {
        font-size: 0.9rem;
        padding: 10px 0;
    }
}
