alert("ASSALOMU ALEYKUM!TUR KOMPANIYAMIZ ELEKTRON SAYTIGA HUSH KELIBSIZ");
confirm(`Siz to'lovni amalga oshirishga tayyormisiz?`);
alert(
  "Bilet-3937500 so'm \n Yashash harajatlari-7650000 so'm\n Sayr qilish-2958720 so'm \n Umumiy mablag'-14546220 so'm"
);

let biletIn$ = 350;
let yashashIn$ = 680;
let sayrInEuro = 230;

let $InSom = 11200;
let euroInSom = 12864;

let biletInSom = biletIn$ * $InSom;
let yashashInSom = yashashIn$ * $InSom;
let sayrInSom = sayrInEuro * euroInSom;

let allExpensesInSom = biletInSom + yashashInSom + sayrInSom;

let userMoney = +prompt("Sayohat uchun mablag'ingizni kiriting:");

if (userMoney >= allExpensesInSom) {
  console.log("Sizning mablag'ingiz sayohat uchun yetarli.\n Oq yo'l!!!");
} else if (userMoney < allExpensesInSom) {
  let days = Math.floor(Math.random() * (30 - 3 * 1)) + 3;
  console.log(
    `Sizning mablag'ingiz yetarli emas.Iltimos,yetarli mablag' bilan ${days} kundan keyin yana urinib ko'ring!`
  );
} else {
  console.log("Mablag'ni to'g'ri kiriting!");
}
