
function add(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Қате: екі сан енгізу керек.";
    } else {
        return a + b;
    }
}

function subtract(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Қате: екі сан енгізу керек.";
    } else {
        return a - b;
    }
}

function multiply(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Қате: екі сан енгізу керек.";
    } else {
        return a * b;
    }
}

function divide(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Қате: екі сан енгізу керек.";
    } else if (b === 0) {
        return "Қате: нөлге бөлуге болмайды.";
    } else {
        return a / b;
    }
}

console.log("Қосу:", add(10, 5));
console.log("Қосуды тексеру:", add("а", 5));

console.log("Азайту:", subtract(10, 5));
console.log("Азайтуды тексеру:", subtract(10, "б"));

console.log("Көбейту:", multiply(10, 5));
console.log("Көбейтуді тексеру:", multiply("в", 5));

console.log("Бөлу:", divide(10, 5));
console.log("Бөлуді тексеру:", divide(10, "г"));
console.log("Нөлге бөлуді тексеру:", divide(10, 0));
