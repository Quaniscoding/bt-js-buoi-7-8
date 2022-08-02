
var listNumber = [];
document.getElementById("btnThemSo").onclick = function () {
    var addNumber = "";
    var number = document.getElementById("number").value * 1;
    listNumber.push(number);
    addNumber += listNumber + ", ";
    document.getElementById('thongBaoTong').innerHTML = addNumber;
}
// bài 1
document.getElementById("btnTinhTong").onclick = function () {
    if (listNumber.length > 0) {
        var sum = 0;
        for (var i = 0; i < listNumber.length; i++) {
            if (listNumber[i] >= 0) {
                sum += listNumber[i];
            }
        } var result = "Tổng số dương: " + sum;
        document.getElementById('thongBaoTong').innerHTML = result;
    }
    if (listNumber.length === 0) {
        alert('Vui long them so!');
        return;
    }
}
// bài 2
document.getElementById("btnDemSo").onclick = function () {
    var content = "";
    for (var i = 0; i < listNumber.length; i++) {
        content = "Tổng số dương :" + listNumber.length;
    }
    document.getElementById('thongBaoTong').innerHTML = content;
}
// bài 3
document.getElementById("btnSoNhoNhat").onclick = function () {
    var result = "";
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (min > listNumber[i]) {
            min = listNumber[i];
            result = "Số nhỏ nhất là: " + min;
            document.getElementById('thongBaoTong').innerHTML = result;
        }
        else {
            result = "Số nhỏ nhất là: " + min;
            document.getElementById('thongBaoTong').innerHTML = result;
        }
    }
}
// bài 4
document.getElementById("btnSoDuongMin").onclick = function () {
    var minDuong = listNumber[0];
    var result = "";
    for (var i = 1; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            if (minDuong > listNumber[i]) {
                minDuong = listNumber[i]
                result = "Số dương nhỏ nhất là: " + minDuong;
                document.getElementById('thongBaoTong').innerHTML = result;
            }
            else {
                result = "Số dương nhỏ nhất là: " + minDuong;
                document.getElementById('thongBaoTong').innerHTML = result;
            }
        }
    }
}
// bài 5

document.getElementById("btnSoChanCuoiCung").onclick = function () {
    var soChanCuoiCung = "";
    for (var i = listNumber.length - 1; i >= 0; i--) {
        if (listNumber[i] % 2 == 0) {
            soChanCuoiCung = "Số chẵn cuối cùng là :" + listNumber[i];
            document.getElementById('thongBaoTong').innerHTML = soChanCuoiCung;
            break;
        }

    }
}
// bài 6
function doiCho(number1, number2, listNumber) {
    var result = '';
    //xử lý
    for (var index = 0; index < listNumber.length; index++) {
        // listNumber = ([listNumber[number1], listNumber[number2]] = [listNumber[number2], listNumber[number1]]);
        const tmp = listNumber[0];
        listNumber[number1] = listNumber[number2];
        listNumber[number2] = tmp;
        result = "Mảng sau khi đổi :" + listNumber;
        break;
    }
    return result;
}
document.getElementById("btnDoiCho").onclick = function () {
    //input lisNumber=[]
    var number1 = document.getElementById('number1').value * 1;
    var number2 = document.getElementById('number2').value * 1;
    //output
    var result = doiCho(number1, number2, listNumber);
    document.getElementById('thongBaoTong').innerHTML = result;
}
//bài 7
document.getElementById("btnSapXepTangDan").onclick = function () {
    console.log(_);
    var result = "Các số theo thứ tự tăng dần là: " + _.sortBy(listNumber);
    document.getElementById('thongBaoTong').innerHTML = result;
}

//bài 8
document.getElementById("btnSntDau").onclick = function () {
    var sntDau = [];
    var ketQua;
    for (var index = 0; index <= listNumber.length - 1; index++) {
        if (listNumber[index] % 1 == 0 && listNumber[index] % listNumber[index] == 0) {
            sntDau += listNumber[index];
            ketQua = "Số nguyên tố đầu tiên là: " + sntDau[0];
            document.getElementById('thongBaoTong').innerHTML = ketQua;
        }
        else if (listNumber[index] < 2) {
            break;
        }
    }
}
// bài 9
function demSoNguyen(listNumber) {
    var soNguyen = 0;
    var result = '';
    for (var i = 0; i < listNumber.length; i++) {
        if (Number.isInteger(listNumber[i])) {
            soNguyen += 1;
            result = "Có: " + soNguyen + " số nguyên.";
        }
    }
    return result;
}
document.getElementById("btnDemSoNguyen").onclick = function () {
    var result = demSoNguyen(listNumber);
    document.getElementById('thongBaoTong').innerHTML = result;

}
// bài 10
function soSanh(listNumber) {
    var result = "";
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            soDuong += 1;
        }
        else {
            soAm += 1;
        }
        if (soDuong > soAm) {
            result = "Số dương nhiều hơn số âm";
        }
        else if (soDuong == soAm) {
            result = "Số âm bằng số dương";

        }
        else {
            result = "Số âm nhiều hơn số dương";
        }
    }
    return result;
}
document.getElementById("btnSoSanh").onclick = function () {
    var result = soSanh(listNumber);
    document.getElementById('thongBaoTong').innerHTML = result;

}
// input
// +nhập các số vào
// xử lý
// +kiêm tra các số nhập vào là số chẵn thì thêm vào 1 mảng mới
// output
// +in ra màn hình số chẵn cuối cùng
