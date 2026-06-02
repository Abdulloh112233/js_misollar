// 1
let name = "Ali";
let age = 20;
console.log(`Ism: ${name}, Yosh: ${age}`);

// 2
let a = 5, b = 10;
console.log("Yuzasi: " + (a * b));

// 3
let r = 7;
console.log("Aylana uzunligi: " + (2 * Math.PI * r));

// 4
let num = 10;
console.log(num % 2 === 0 ? "Juft" : "Toq");

// 5
let n = -5;
if (n > 0) console.log("Musbat");
else if (n < 0) console.log("Manfiy");
else console.log("Nol");

// 6
let x = 5, y = 10;
x = x + y;
y = x - y;
x = x - y;

// 7
let n1 = 10, n2 = 25, n3 = 15;
let max = Math.max(n1, n2, n3);
console.log("Eng kattasi: " + max);

// 8
let num8 = 15;
if (num8 % 3 === 0 && num8 % 5 === 0) console.log("Bo'linadi");
else console.log("Bo'linmaydi");

// 9
for(let i = 1; i <= 100; i++) process.stdout.write(i + " ");

// 10
let N = 10;
let sum = 0;
for(let i = 1; i <= N; i++) sum += i;

// 11
for(let i = 2; i <= 100; i += 2) console.log(i);

// 12
let product = 1;
for(let i = 1; i <= N; i++) product *= i;

// 13
let count = 0;
for(let i = 1; i <= N; i++) if(i % 2 === 0) count++;

// 14
for(let i = 1; i <= 50; i++) if(i % 3 === 0) console.log(i);

// 15, 16, 17 (Funksiyalar)
function yigindi(a, b) { return a + b; }
function kvadrat(n) { return n * n; }
function kub(n) { return n * n * n; }