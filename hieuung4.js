var mua_ = document.getElementById("mua_5");
var soluong = 100;
var arr_hinh=["50%","0"];
var arr_size_h=["30px","40px"];
var arr_size_w=["30px","40px"];
var arr_filter=["0px","3px"];
var arr_time=["10s","15s","20s"];
var arr_corlor=["rgb(55, 195, 44)","rgb(231, 235, 48)","rgb(129, 231, 205)"]
var arr_bsd=["1px 1px 4px 1px rgb(76, 242, 15)","0px 0px 0px 0px"];
var arr_mt=document.documentElement.clientHeight;
var arr_ml=document.documentElement.clientWidth;
function hieuungmua() {
    for (var i = 1; i <= soluong; i++) {

        var h=Math.floor(Math.random()*3);
        var w=Math.floor(Math.random()*3);
        var color=Math.floor(Math.random()*3);
        var mt=Math.floor((Math.random()*arr_mt));
        var ml=Math.floor((Math.random()*680));
        var hinh=Math.floor(Math.random()*2);
        var filter=Math.floor(Math.random()*2);
        var bds=Math.floor(Math.random()*2);
        var time=Math.floor(Math.random()*4);


        var div = document.createElement('div');
        //div.style.boxShadow=arr_bsd[bds];
        div.style.filter="blur("+ arr_filter[filter] +")";
        //div.style.borderRadius=arr_hinh[hinh];
        div.style.backgroundImage="url('./Imggg/avt/lavang_1.png')";
        div.style.backgroundSize="cover";
        div.style.marginTop=mt+"px";
        div.style.marginLeft=ml+"px";
        div.style.height=arr_size_h[h];
        div.style.width=arr_size_h[w];
        //div.style.backgroundColor=arr_corlor[color];
        
        div.style.position="absolute";
        div.style.animation="chuyendong "+arr_time[color]+" ease-in  infinite"
        mua_.appendChild(div);
    }
}
hieuungmua();