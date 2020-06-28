//First block's Word List
var a = ["冷蔵庫","人間の","オートバイ","丸眼鏡","つまらない","バズり飯","全裸芸","猫の玉","腹太鼓","足の裏","テスト前"];
var kaminoku = a[Math.floor(Math.random() * a.length)];
//Second Block's Word List
var b = ["ひとつひとつに","腹がすいたら","夏の終わりに","とにもかくにも","コロナ休みに","そろりそろりと","ステイホームで"]
var nakashiti = b[Math.floor(Math.random() * b.length)];
//Third Block's Word List
var c = ["恋模様","夢うつつ","葉っぱ食べ","これお食べ","見えてきた","絶起した","自粛した","三密です"];
var shimonoku = c[Math.floor(Math.random() * c.length)];
//Set "FirstWord SecondWord ThirdWord"
var haiku = `${kaminoku}\n
${nakashiti}\n
${shimonoku}\n`
document.write(`<h3>${haiku}</h3>`);
//button-function(MakeNewHaiku)
document.getElementById("text").onclick = function (){
    location.reload();
}