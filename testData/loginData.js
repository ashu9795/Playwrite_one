export const loginScenarios = [
  {
    name: "Valid login",
    username: process.env.SITE_USERNAME,
    password: process.env.SITE_PASSWORD,
    success: true
  },
  {
    name: "Empty username",
    username: "",
    password: "Apple@123",
    success: false
  },
  {
    name: "Empty password",
    username: "ashu",
    password: "",
    success: false
  },
  {
    name: "Spaces only",
    username: "   ",
    password: "   ",
    success: false
  },
  {
    name: "Wrong password",
    username: "ashu",
    password: "Wrong@123",
    success: false
  },
  {
    name: "Uppercase username",
    username: "ASHU",
    password: "Apple@123",
    success: false
  },
  {
    name: "With backspace char",
    username: "ashu\b",
    password: "Apple@123",
    success: false
  }
];
