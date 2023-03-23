// array

const container = [
    "first",
    "second",
    [
        "nested first",
        "nested second",
        [
            "nested nested 1",
            "nested nested 2"
        ]
    ]
]

// constuct

// Log

// console.log("container", container);
// console.log("container 2nd: ", container[1]);
console.log("container 3rd: ", container[2][1]);
console.log("container nested nested: ", container[2][2][1]);
