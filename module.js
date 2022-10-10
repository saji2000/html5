for(var count = 1; count <= 10; ++count){
    if(count == 6){
        continue;
    }
    document.writeln(count + " ");
}

document.writeln("<p>Used continue to skip printing 5</p>");
