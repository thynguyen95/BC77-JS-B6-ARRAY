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
};

console.log("test", undefined === 6);
