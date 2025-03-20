function isValidEmail(email) {
    const emailPattern = /^abc(?:[._+,-][a-zA-Z0-9]+)?@bridgelabz\.co(?:\.[a-zA-Z]{2})?$/;
    return emailPattern.test(email);
}

const testEmails = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc-xyz@bridgelabz.co",
    "abc+xyz@bridgelabz.co",
    "abc_xyz@bridgelabz.co",
    "abc,xyz@bridgelabz.co",
    "abc.xyz@bridgelabz.co.in",
    "abc@bridgelabz.co.in",
    "abc@bridgelabz.co.us",
    "abc@bridgelabz.co.uk",
    "abc@bridgelabz.com",
    "abc@bridgelabz",
    "abc.xyz@bridgelabz.io",
    "abc.xyz@bridgelabz.co.abc",
    "abc.xyz@bridgelabz.co.",
    "abc..xyz@bridgelabz.co",
    "abc@xyz.co.in",
    "abc@bridgelabz.co.inx"
];

testEmails.forEach(email => {
    console.log(`Email: "${email}" => Valid: ${isValidEmail(email)}`);
});
