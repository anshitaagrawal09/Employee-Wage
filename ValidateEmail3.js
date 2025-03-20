function isValidEmail(email) {
    const emailPattern = /^abc(?:\.[a-zA-Z0-9]+)?@bridgelabz\.co(?:\.[a-zA-Z]{2,})?$/;
    return emailPattern.test(email);
}

const testEmails = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc@bridgelabz.co.in",
    "abc.xyz@bridgelabz.co.in",
    "xyz@bridgelabz.co.in",
    "abc@xyz.co.in",
    "abc.xyz@bridgelabz.com",
    "abc.xyz@bridgelabz.co.uk",
    "abc@bridgelabz",
    "abc@bridgelabz.",
    "abc@bridgelabz.io",
    "abc@bridgelabz.com",
    "abc@bridgelabz.co."
];

testEmails.forEach(email => {
    console.log(`Email: "${email}" => Valid: ${isValidEmail(email)}`);
});
