//////////////////////////////////////////
//2-massala
//////////////////////////////////////////
//Siz 44dan 66gacha istalgan son o'ylaysiz, kompyuter topishi kerak.
//  Agar to'g'ri topsa while to'xtashi kerak, agar topa olmasa qaytadan yangi sonni aytishi kerak.
//  Darsdagi amaliyotga o'xshash.

// while (true) {
//   let min = 44;
//   let max = 67;
//   random = Math.trunc(Math.random() * (max - min) + min);

//   let num = prompt("Oylagan soningiz shumi?:" + random);
//   if (num === "ha") break;
// }

//=======================
// Tushuntirish
// let min va let max bunda faqat 44 va 67 ni orasidagi random sonlarni oladi math trunc butun sondan keyingi raqamlarni chopib tashlaydi
//math random esa 44 va 67 orasidagi sonlarni random shakilda beradi. foydalanuvchi 44dan 66 gacha bolgan sonlardan
//oylaydi va kompyuter random son beradi togri bolsa ha deydi va while break boladi va toxtaydi!

//////////////////////////////////////////
//3-massala
/////////////////////////////////////////
//promptdan so'z kiritadi, kiritgan so'zini siz harflab konsolga chiqarishingiz kerak. Misol uchun hello kiritdi.
//Siz uni:

//h

//e

//l

//l

//o

// let w = prompt("so'z kiriting:");
// s = w.split("").join("\n");
// console.log(s);

//=====================
//Tushuntirish
//Bu yerda "w" promptga kiritilgan soz shun ozgaruvchiga saqlanadi , "w.split"- bu kiritilgan sozni harflarga bo'ladi,
//  ".join(\n)"-yangi qator yaratadi yani har bir harf uchun yangi qator ochadi
//=====================

//========================
//     1-massala
//========================
//prompt orqali 1-999 gacha son qabul qiling. Kiritgan son 1-999 oralig'ida bo'lmasa yoki boshqa narsa bo'lsa xatolik deb chiqaring.
//  Aytaylik 365 kiritdi, siz esa konsolga uch yuz oltmish besh deb chiqarishingiz kerak.

// let first = 1;
// let last = 999;
// let num = +prompt("Son kriting:");
// u = Number(num);
// let x1 = Math.floor(num % 10);
// let x10 = Math.floor((num % 100) / 10);
// let x100 = Math.floor(num / 100);
// let x1000 = Math.floor(num / 100);
// switch (x1) {
//   case 1:
//     x1 = "bir";
//     break;
//   case 2:
//     x1 = "ikki";
//     break;
//   case 3:
//     x1 = "uch";
//     break;
//   case 4:
//     x1 = "to'rt";
//     break;
//   case 5:
//     x1 = "besh";
//     break;
//   case 6:
//     x1 = "olti";
//     break;
//   case 7:
//     x1 = "yetti";
//     break;
//   case 8:
//     x1 = "sakkiz";
//     break;
//   case 9:
//     x1 = "to'qqiz";
//     break;
//   default:
//     "No'malum";
//     break;
// }
// switch (x10) {
//   case 1:
//     x10 = "o'n";
//     break;
//   case 2:
//     x10 = "yigirma";
//     break;
//   case 3:
//     x10 = "o'ttiz";
//     break;
//   case 4:
//     x10 = "qirq";
//     break;
//   case 5:
//     x10 = "ellik";
//     break;
//   case 6:
//     x10 = "oltmish";
//     break;
//   case 7:
//     x10 = "yetmish";
//     break;
//   case 8:
//     x10 = "sakson";
//     break;
//   case 9:
//     x10 = "to'qson";
//     break;
//   default:
//     "No'malum";
//     break;
// }
// switch (x100) {
//   case 1:
//     x100 = "bir yuz";
//     break;
//   case 2:
//     x100 = "ikki yuz";
//     break;
//   case 3:
//     x100 = "uch yuz";
//     break;
//   case 4:
//     x100 = "to'rt yuz";
//     break;
//   case 5:
//     x100 = "besh yuz";
//     break;
//   case 6:
//     x100 = "olti yuz";
//     break;
//   case 7:
//     x100 = "yetti yuz";
//     break;
//   case 8:
//     x100 = "sakkiz yuz";
//     break;
//   case 9:
//     x100 = "to'qqiz yuz";
//     break;
//   default:
//     "No'malum";
//     break;
// }
// let natija = `${x100} ${x10} ${x1}`;
// if (isNaN(num)) {
//   alert("Iltimos son kiriting");
// } else if (num < first) {
//   alert("Iltimos 1 dan katta son kiriting");
// } else if (num > last) {
//   alert("Iltimos 999 dan kichik son kiriting");
// } else {
//   alert(natija);
// }
