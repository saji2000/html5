var value;

document.writeln("<p>Random numbers</p><ol>");

for (var i = 1; i <= 30; ++i){

    value = Math.floor(1 + Math.random() * 6);

    document.writeln("<li>" + value + "</li>");

}

document.writeln("</ol>");


