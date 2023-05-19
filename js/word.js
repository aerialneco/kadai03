//賢者の言葉

$(document).ready(function() {
const word = Math.ceil(Math.random() * 10);
let viewWord1 = "";
let viewWord2 = "";
if (word === 1) {
    viewWord1 = '世界を動かそうと思ったら、まず自分自身を動かせ';
    viewWord2 = '- ソクラテス';
}
if (word === 2) {
    viewWord1 = '指導者とは、自己を売って、正義を買った人間だ';
    viewWord2 = '- ソクラテス'
}
if (word === 3) {
    viewWord1 = '人生は、後ろ向きにしか理解できないが、前を向いてしか生きられない';
    viewWord2 = '- キルケゴール'
}
if (word === 4) {
    viewWord1 = '愛は、人間の実存という問題への、唯一の健全で満足のいく答えである';
    viewWord2 = '- エーリッヒフロム'
}
if (word === 5) {
    viewWord1 = '我々の性格は、我々の行動の結果なり';
    viewWord2 = '- アリストテレス'
}
if (word === 6) {
    viewWord1 = 'すべての知識は経験に基づく';
    viewWord2 = '- カント'
}
if (word === 7) {
    viewWord1 = 'われはアテネ人にあらず、ギリシア人にあらずして世界市民なり';
    viewWord2 = '- ソクラテス'
}
if (word === 8) {
    viewWord1 = '過去が現在に影響を与えるように、未来も現在に影響を与える';
    viewWord2 = '- ニーチェ'
}
if (word === 9) {
    viewWord1 = '昼の光に、夜の闇の深さが分かるものか';
    viewWord2 = '- ニーチェ'
}
if (word === 10) {
    viewWord1 = '困難なことはすべて、扱うことができ、解決が必要な部分へと分割せよ';
    viewWord2 = '- カント'
}

$(".blur1").html(viewWord1);
$(".blur2").html(viewWord2);
});




