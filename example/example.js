var width = 64;
var height = 32;
var display;
var index = 0;
var x = 1, y = 0, _x = 0, _y = 0;
window.onload = function(){
    display = new Display( width, height, 12, !!CanvasRenderingContext2D );
    console.log(document.getElementById("screen"));
    console.log(display.container);
    document.getElementById("screen").appendChild( display.container );
    display.fill("#000").flush();
    callback();
};

var callback = function(){
    var i = 0;
    while( i++ < 10000 ){
        var color = "#00" + index;
        index = (index + 1) % 9;
        display.setPixel( _x, _y, color );
        display.setPixel( x, y, "#F00" ).flush();
        //if( !(y%5) && !x ) display.flush();
        //setTimeout( callback, 0, (x + 1) % width, (y + Math.floor((x + 1)/width)) % height );
        _x = x;
        _y = y;
        x = (x + 1) % width;
        y = x ? y : (y + 1) % height;
    }
};