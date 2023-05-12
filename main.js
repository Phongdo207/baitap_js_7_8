var listNumber = [];

function addnumber(){
    var number = document.getElementById("number").value * 1;
    listNumber.push(number);
    var showNumber = ("Số đã thêm : " + listNumber);
    document.getElementById("footerAddnumber").innerHTML = showNumber;
}

function tongDuong(){
    var tong = 0;
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0)
        tong += listNumber[i];
    }
    var showKQ1 = ("Tổng số dương : " + tong);
    document.getElementById("kQ1").innerHTML = showKQ1;
}

function demSD(){
    var dem = 0;
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            dem++;
        }
    }
    var showKQ2 = ("Sô dương hiện có : " + dem);
    document.getElementById("kQ2").innerHTML = showKQ2;
}

function timSNN(){
    var min = listNumber[0];
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] < min){
            min = listNumber[i];
        }
    }
    var showKQ3= ("Số nhỏ nhất trong mảng là : " + min);
    document.getElementById("kQ3").innerHTML = showKQ3;
}

function timSDNN(){
    var minSD = listNumber[0];
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0 && minSD > listNumber[i]){
            minSD = listNumber[i];
        }
    }
    var showKQ4= ("Số dương nhỏ nhất trong mảng là : " + minSD);
    document.getElementById("kQ4").innerHTML = showKQ4;
}

function timSCC(){
    var scc = listNumber.length - 1;
    for(var i = scc ; i > 0; i--){
        if(listNumber[i] % 2 === 0){
            scc =  listNumber[i];
            return scc;
        }
        console.log(scc);
    }
    // var showKQ5= ("Số chẵn cuối cùng là : " + sCcc);
    // document.getElementById("kQ5").innerHTML = showKQ5;
}

function hDVT(){
    var vt1 = document.getElementById("vt1").value;
    var vt2 = document.getElementById("vt2").value;
    var x = 0;
    for(var i = 0; i < listNumber.length; i++){
        x = listNumber[vt1];
        listNumber[vt1] = listNumber[vt2];
        listNumber[vt2] = x;
    }
    var showKQ6= ("Cập nhật mảng : " + listNumber);
    document.getElementById("kQ6").innerHTML = showKQ6;
}

function xSTD(){
    for(var i = 0; i < listNumber.length - 1; i++){
        for(j = i + 1; j < listNumber.length; j++){
            if(listNumber[i] > listNumber[j]){
                var x = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = x;
            }           
        }
    }
    var showKQ7= ("Cập nhật mảng : " + listNumber);
    document.getElementById("kQ7").innerHTML = showKQ7;
}

function ktSNT(n) {
    if (n <= 1) {
      return false;
    }
    var isNguyenTo = true;

    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        return false
      }
    }
    return isNguyenTo
  }

function sNTDT(){
    for(var i = 0 ; i < listNumber.length ; i++){
        if(ktSNT(listNumber[i])){
            var sNT = listNumber[i];
            break;
        }
    }
    var showKQ8= ("Cập nhật mảng : " + sNT);
    document.getElementById("kQ8").innerHTML = showKQ8;
}

function dSNT(){
    var dem = 0;
    for(var i = 0 ; i < listNumber.length ; i++){
        if(ktSNT(listNumber[i])){
            dem++;
        }
    }
    var showKQ9= ("Có " + dem + " số nguyên tố trong mảng");
    document.getElementById("kQ9").innerHTML = showKQ9;
}

function sS(){
    var sA = 0;
    var sD = 0;
    var show = "";
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            sD++;
        }
    }
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] < 0){
            sA++;
        }
    }
    if(sA > sD){
        show = "Số âm > Số dương"
    }else if (sA < sD){
        show = "Số âm < Số dương"
    }else{
        show = "Số âm = Số dương"
    }
    var showKQ10= (show);
    document.getElementById("kQ10").innerHTML = showKQ10;

}

