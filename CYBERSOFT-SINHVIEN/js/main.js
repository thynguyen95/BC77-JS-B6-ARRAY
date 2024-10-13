console.log("main");

// tìm sinh viên có điểm cao nhất
document.querySelector("#btnSVCaoDiemNhat").onclick = () => {
  console.log("test");

  // input: arrTen, arrDiem

  //   lấy ra mảng tên
  let arrayTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
  console.log("arrayTagTen: ", arrayTagTen);

  let arrayTen = [];
  //   (7) ['Nguyễn Văn A', 'Đỗ Văn Nhơn', 'Vin Thị Liên', 'Đen Thị Giàu', 'Ngô Văn Mạnh', 'Văn Sỹ Lâm', 'Bùi Đình Sen']
  for (let index = 0; index < arrayTagTen.length; index++) {
    // lấy ra tên tại vị trí index
    let name = arrayTagTen[index].innerHTML;
    arrayTen.push(name);
  }

  console.log("arrayTen: ", arrayTen);

  //   lấy ra mảng điểm
  let arrayTagDiem = document.querySelectorAll(".td-scores");
  console.log("arrayTagDiem: ", arrayTagDiem);

  let arrayDiem = [];
  //   (7) [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]

  for (let index = 0; index < arrayTagDiem.length; index++) {
    // lấy điểm tại vị trí index
    let diem = +arrayTagDiem[index].innerHTML;

    arrayDiem.push(diem);
  }

  console.log("arrayDiem", arrayDiem);

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

console.log("test", undefined === 6);
