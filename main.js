function getEle(id) {
  return document.getElementById(id);
}

// Bài 1
function tinhSoNguyenDuong() {
  var sum = 0;
  for (var i = 1; true; i++) {
    sum += i;
    if (sum > 10000) {
      return i;
    }
  }
}

getEle("btn-soNguyenDuong").onclick = function () {
  var soNguyenDuong = tinhSoNguyenDuong();

  var result = "Số nguyên dương nhỏ nhất: " + soNguyenDuong;
  //Show kq
  getEle("ketqua-soNguyenDuong").innerHTML = result;
};

// Bài 2
/**
 * input: số x, số n
 * process: S(n) = x + x^2 + x^3 + … + x^n
 * tăng i lên tới n
 * x giữ nguyên
 * output: S(n)
 */
function tinhTong(x, n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += x ** i;
  }
  return sum;
}

getEle("btn-tinhTong").onclick = function () {
  var x = getEle("soX").value * 1;
  var n = getEle("soN").value * 1;

  var sum = tinhTong(x, n);

  var result = "Tổng là: " + sum;

  // Show kq
  getEle("ketqua-tinhTong").innerHTML = result;
};

// Bài 3
function tinhGiaiThua(n) {
  var giaiThua = 1;
  for (i = 1; i <= n; i++) {
    giaiThua *= i;
  }
  return giaiThua;
}

getEle("btn-tinhGiaiThua").onclick = function () {
  var n = getEle("soGiaiThua").value * 1;

  var giaiThua = tinhGiaiThua(n);

  var result = n + "! = " + giaiThua;

  // Show kq
  getEle("ketqua-giaiThua").innerHTML = result;
};

// Bài 4

getEle("btn-in").onclick = function () {
  var content = "";
  var divDo = '<div style="background-color: red; color:white;">Div chẵn</div>';
  var divXanh = '<div style="background-color: blue;color:white;">Div lẻ</div>';

  for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      content += divDo;
    } else {
      content += divXanh;
    }
  }

  getEle("ketqua-div").innerHTML = content;
};
