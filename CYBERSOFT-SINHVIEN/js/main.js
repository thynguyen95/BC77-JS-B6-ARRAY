console.log("main");
/*
  các bước lấy dữ liệu từ giao diện về 
  1. tìm bộ chọn chắc chắn nơi mình cần lấy dữ liệu mà "KHÔNG ẢNH HƯỞNG NHỮNG CHỖ KHÁC"
    css thử cho selector đó 
*/

// let listTag = document.querySelectorAll("td:nth-child(3)");
// for (let index = 0; index < listTag.length; index++) {
//   listTag[index].style.background = "red";
// }

// Khi 1 data sử dụng cho nhiều function sẽ khai báo biến ở global
let arrayTen = [];
let arrayDiem = [];

const setArrayTen = () => {
  console.log("setArrayTen");

  //   lấy ra mảng tên
  let arrayTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
  console.log("arrayTagTen: ", arrayTagTen);

  //   (7) ['Nguyễn Văn A', 'Đỗ Văn Nhơn', 'Vin Thị Liên', 'Đen Thị Giàu', 'Ngô Văn Mạnh', 'Văn Sỹ Lâm', 'Bùi Đình Sen']
  for (let index = 0; index < arrayTagTen.length; index++) {
    // lấy ra tên tại vị trí index
    let name = arrayTagTen[index].innerHTML;
    arrayTen.push(name);
  }

  console.log("arrayTen: ", arrayTen);
};

const setArrayDiem = () => {
  console.log("setArrayDiem");

  //   lấy ra mảng điểm
  let arrayTagDiem = document.querySelectorAll(".td-scores");
  console.log("arrayTagDiem: ", arrayTagDiem);

  //   (7) [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]

  for (let index = 0; index < arrayTagDiem.length; index++) {
    // lấy điểm tại vị trí index
    let diem = +arrayTagDiem[index].innerHTML;

    arrayDiem.push(diem);
  }

  console.log("arrayDiem", arrayDiem);
};

setArrayTen();
setArrayDiem();

// tìm sinh viên có điểm cao nhất
document.querySelector("#btnSVCaoDiemNhat").onclick = () => {
  console.log("test", arrayDiem);

  // input: arrTen, arrDiem

  //   tìm ra điểm cao nhất
  //   (7) [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
  let max = arrayDiem[0]; //lấy vị trí đầu tiên làm cột móc lớn nhất để so sánh
  let indexMax = 0;
  for (let index = 0; index < arrayDiem.length; index++) {
    // lần 1      6.4         > 6.4
    // lần 2      8.2         > 6.4
    // lần 3      3.4         > 8.2
    // lần 4      9.8         > 8.2
    if (arrayDiem[index] > max) {
      max = arrayDiem[index];
      indexMax = index;
    }
  }

  console.log("max", max);
  console.log("indexMax", indexMax);

  let tenMax = arrayTen[indexMax];
  console.log("tenMax: ", tenMax);

  //   templateString
  document.querySelector("#svGioiNhat").innerHTML = `${tenMax} - ${max}`;
};

// tìm sinh viên có điểm thấp nhất
document.querySelector("#btnSVThapDiemNhat").onclick = () => {
  // input: arrayTen, arrayDiem => đã xử lý ở global'

  // (7) [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
  // 0    1    2    3    4    5    6
  /*chạy tay: 
            arrayDiem[index] < min 
    index = 0:   6.4          < 6.4 => false => giữ nguyên
    index = 1:   8.2          < 6.4 => false => giữ nguyên
    index = 2:   3.4          < 6.4 => true => min = 3.4 , indexMin = 2
    index = 3:   9.8          < 3.4 => false => giữ nguyên
    index = 4:   2.4          < 3.4 => true => min = 2.4, indexMin = 4
    . 
    . 
    .
  */

  let min = arrayDiem[0];
  let indexMin = 0;
  // tìm ra số nhỏ nhất
  for (let index = 1; index < arrayDiem.length; index++) {
    if (arrayDiem[index] < min) {
      min = arrayDiem[index];
      indexMin = index;
    }
  }

  console.log("min", min);
  console.log("indexMin", indexMin);

  // tìm tên sv có điểm thấp để in lên giao diện
  let name = arrayTen[indexMin];

  document.querySelector("#svYeuNhat").innerHTML = `${name} - ${min}`;
};

console.log("test", undefined === 6);

// đếm số sv giỏi: sv có điểm từ 8 trở lên
document.querySelector("#btnSoSVGioi").onclick = () => {
  console.log("đếm số sv giỏi");

  // input: arrayDiem

  // progress:
  //   yêu cầu điểm >= 8;
  //   duyệt mảng

  // cách 1:
  // let count = 0;
  // for (let index = 0; index < arrayDiem.length; index++) {
  //   if (arrayDiem[index] >= 8) {
  //     count++;
  //   }
  // }

  // console.log("count", count);
  // document.querySelector("#soSVGioi").innerHTML = count;

  // cách 2
  let arrayDiemThan8 = arrayDiem.filter(function (index) {
    // index: đại diện cho từng phần tử trong mảng
    console.log("index: ", index);
    return index >= 8;
  });

  console.log("arrayDiemThan8", arrayDiemThan8);

  document.querySelector(
    "#soSVGioi"
  ).innerHTML = `${arrayDiemThan8.length} - ${arrayDiemThan8}`;
};

// Danh sách sinh viên điểm TB lớn hơn 5
document.querySelector("#btnSVDiemHon5").onclick = () => {
  // input: arrayDiem, arrayTen
  // progress:
  //   1. kiểm tra sv nào có dtb > 5 => duyệt mảng điểm
  //   2. dựa vào index của điểm để lấy ra tên
  let output = "";
  for (let index = 0; index < arrayDiem.length; index++) {
    if (arrayDiem[index] > 5) {
      // output += arrayTen[index] + " - " + arrayDiem[index] + " <br>";
      output += `${arrayTen[index]} - ${arrayDiem[index]} <br>`;
    }
  }

  // output:
  //   Nguyễn Văn A - 5.5
  //   Nguyễn Văn B - 6.5

  console.log("output", output);
  document.querySelector("#dsDiemHon5").innerHTML = output;
};

// sắp xếp tăng dần
document.querySelector("#btnSapXepTang").onclick = () => {
  // input: arrayDiem
  // progress: dùng hàm sort
  // [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
  // 6.4 --- 8.2
  // pt1 --- pt2
  let result = arrayDiem.sort(function (pt2, pt1) {
    console.log("pt2", pt2, "pt1", pt1);
    // pt2 - pt1 = số âm  => hoán vị (đổi vị trí)
    // pt2 - pt1 = số dương => giữ nguyên
    return pt2 - pt1;
  });

  console.log("result", result);
};
