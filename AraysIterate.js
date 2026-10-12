let tests = ["Pass", "Fail", "Pass", "Fail", "Pass"];

for (let i = 0; i < tests.length; i++) {
    console.log(`${i}: ${tests[i]}`);
}

for (test of tests) {
    console.log(test);
}

for (test in tests) {
    console.log(test);
}


tests.forEach((test, index) => {
    console.log(`${index}: ${test}`);
});


