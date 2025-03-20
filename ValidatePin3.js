function isValidPin(pin) {
    const pinPattern = /^[1-9][0-9]{5}$/; // Ensures 6-digit numeric PIN, no alphabets/special chars at start or end
    return pinPattern.test(pin);
}

// Sample test cases
const testPins = ["400088", "110001", "560017", "A400088", "@400088", "040088", "4008A8", "1234567", "400088B", "400088#"];

testPins.forEach(pin => {
    console.log(`PIN: ${pin} => Valid: ${isValidPin(pin)}`);
});