// Defining a 'course' object with details about a course.
const course = {
  coursename: "js in hindi", // Course name
  price: "999", // Price
  courseInstructor: "shahriar", // Course instructor
};

// Object destructuring to extract the 'courseInstructor' property into a variable 'instructor'.
const { courseInstructor: instructor } =
  course[
    // Access the destructured variable 'instructor'.
    // console.log(instructor); // Output: "shahriar"

    // If you try to access 'courseInstructor' directly after destructuring, it won't work.
    // console.log(courseInstructor); // This would throw an error, as 'courseInstructor' is renamed to 'instructor'.

    // Example of an array of objects (empty objects in this case).
    ({}, {}, {})
  ];
