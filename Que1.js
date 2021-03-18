function customPrint(n, message) {
  n--;
  if (n >= 0) {
    customPrint(n, message);
    console.log(message);
  }
}
customPrint(5, "Hello, World!");
