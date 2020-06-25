//上五の単語
var a = ["冷蔵庫","人間の","オートバイ","丸眼鏡","つまらない"];
var kaminoku = a[Math.floor(Math.random() * a.length)];
//中七の単語
var b = ["ひとつひとつに","腹がすいたら","夏の終わりに"]
var nakshiti = b[Math.floor(Math.random() * b.length)];
//下五の単語
var c = ["恋模様","夢うつつ","葉っぱ食べ","これお食べ"];
var shimonoku = c[Math.floor(Math.random() * c.length)];
console.log(`${kaminoku}`);
console.log(`${nakashiti}`);
console.log(`${shimonoku}`);