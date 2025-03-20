function isValidPin(pin) {
    const pinPattern = /^[1-9][0-9]{5}$/; // Regex pattern for PIN code validation
    return pinPattern.test(pin);
}

// Sample test cases
const testPins = ["400088", "110001", "560017", "040088", "4008A8", "1234567"];

testPins.forEach(pin => {
    console.log(`PIN: ${pin} => Valid: ${isValidPin(pin)}`);
});