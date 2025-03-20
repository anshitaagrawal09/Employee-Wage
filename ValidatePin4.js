function isValidPin(pin) {
    const pinPattern = /^[1-9][0-9]{2} ?[0-9]{3}$/; // Allows "400088" and "400 088"
    return pinPattern.test(pin);
}

// Sample test cases
const testPins = ["400088", "110001", "560017", "A400088", "@400088", "040088", "4008A8", "1234567", "400088B", "400088#", "400 088", "123 456"];

testPins.forEach(pin => {
    console.log(`PIN: "${pin}" => Valid: ${isValidPin(pin)}`);
});