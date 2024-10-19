let user1 = "Nam";
let user2 = "Tiến";
let user3 = "Trung";
// CRUD: create - read - update - delete

/*
    C - create 
    cách khai báo array 
    let tenArray = [];
    let tenArray = new Array();

    1. array có thể chứa nhiều kiểu dữ liệu
    2. array có chỉ số(index) bắt đầu từ 0 
*/
let arrayUser = ["Nam", "Tiến", "Trung", "ABC", "XYZ", "EDY"];
//    0       1        2
let arrayNumber = [2, 4, 5, 6];
let arrayIcon = ["", ""];
let arrayInfo = ["Nam", 1995, "Tiến", 2000];

/* 
    R - read : đọc mảng

    tenArray[index] => nội dung của item trong mảng tại vị trí in
*/

let item1 = arrayUser[1];
console.log("item1: ", item1);

// lấy ra nội dung của item thứ 5
console.log("item 5", arrayUser[4]);

/*
    U - update: cập nhật mảng

    1. cập nhật nội dung của 1 item trong mảng 

    tenArray[index] = "nội dung muốn cập nhật"
*/
arrayUser[3] = "Nguyễn Văn A";
console.log("array User mới update", arrayUser);

// arrayName.length : lấy được độ dài của mảng
let arrayUserLength = arrayUser.length;
console.log("arrayUserLength: ", arrayUserLength);

console.log("hello Nam");

console.log("hello Trung");
for (let i = 0; i < arrayUser.length; i++) {
  let name = arrayUser[i];
  console.log(`hello ${name}`);
}

/* 
    Thêm phần tử vào mảng 
    + thêm vào đầu mảng, có thể thêm 1 lúc nhiều phần tử (gây ra thay đổi chỉ số của các phần tử trong mảng) => ko khuyến khích xài cách này
        arrayName.unshift("item", "item")
    + thêm vào cuối mảng, có thể thêm 1 lúc nhiều phần tử 
        arrayName.push("item", "item");
*/
arrayUser.push("Nguyễn Văn B");
console.log("arrayUser sau khi thêm phần tử mới : ", arrayUser);

let arrayUnshift = arrayUser.unshift("user 1");
console.log("arrayUnshift: ", arrayUnshift);
console.log("arrayUser sau khi thêm phần tử mới vào đầu mảng : ", arrayUser);

/* 
    D - delete 
    pop: xóa phần tử cuối cùng của mảng và trả về phần tử đó 
    shift: xóa phần tử đầu tiên của mảng và trả về phần tử đó
*/
let arrayPop = arrayUser.pop();
console.log("arrayPop: ", arrayPop);
console.log("arrayUser sau khi pop: ", arrayUser);

let arrayShift = arrayUser.shift();
console.log("arrayShift: ", arrayShift);
console.log("arrayUser sau khi shift: ", arrayUser);

// slice vs splice
// slice: cắt 1 đoạn trong mảng và không thay đổi mảng hiện tại mà trả về 1 mảng mới
console.log("arrayUser trước khi slice : ", arrayUser);
let arraySlice = arrayUser.slice(2);
console.log("arraySlice: ", arraySlice);
console.log("arrayUser sau khi slice : ", arrayUser);

// splice: thay đổi nội dung của mảng, thêm hoặc xóa các phần tử trong mảng và trả về các phần tử đã bị xóa
console.log("arrayUser trước khi splice : ", arrayUser);
let arraySplice = arrayUser.splice(1, 1);
console.log("arraySplice: ", arraySplice);
console.log("arrayUser sau khi splice : ", arrayUser);

//queryselectorAll
let arrayTagP = document.querySelectorAll(".test");
console.log("arrayTagP: ", arrayTagP);

// từ tất cả nội dung trong thẻ p tạo ra 1 mảng chứa các nội dung đó, với mỗi nội dung của 1 thẻ là 1 item của mảng

// ['thẻ p 1', 'thẻ p 2', 'thẻ p 3', 'thẻ p 4', 'thẻ p 5']

// đổi màu chữ của tất cả thẻ p: bằng thêm class, thêm css
// thẻ p thứ 4 có font size lớn hơn

/*
    input: arrayTagP
    progress: 
        + duyệt qua mảng arrayTagP để lấy ra text của từng thẻ p 
        + đẩy nội dung vào mảng mới 
    output: trả về 1 array mới chứa text của thẻ p 
    let arrayText = ['thẻ p 1', 'thẻ p 2', 'thẻ p 3', 'thẻ p 4', 'thẻ p 5']
*/

let arrayText = [];
for (let index = 0; index < arrayTagP.length; index++) {
  // lấy ra nội dung của thẻ tại vị trí index
  let text = arrayTagP[index].innerHTML;
  console.log("text: ", text);

  arrayTagP[index].classList.add("text-red-500");

  if (index === 3) {
    arrayTagP[index].classList.add("text-4xl");
  }

  //   thêm nội tại vị trí index vào mảng mới
  arrayText.push(text);
}
console.log("arrayText: ", arrayText);

// các hàm duyệt mảng es6
// trả về mảng mới, không làm ảnh hưởng mảng gốc
// tham số phải đúng thứ tự

// for of: trả về giá trị từng phần tử trong mảng
let arrayName = ["Tiến", "Văn", "Hùng"];
for (let name of arrayName) {
  console.log("name: ", name);
}

// for in : trả ra index
for (let index in arrayName) {
  console.log("index: ", index, arrayName[index]);
}

// map
let arrayAge = [10, 20, 30, 40, 50];
let arrayAgeDouble = arrayAge.map(function (value, index) {
  console.log("index: ", index, value);
  return value * 2;
});

console.log("arrayAgeDouble", arrayAgeDouble);

// forEach
// không trả về mảng mới
// không thể dừng hoặc thát vòng lặp giữa chừng(kể cả dừng với break, countinue )
arrayAge.forEach((item, index) => {
  console.log("item: ", item, index);
});

//------------------------------------------//
let arrayNumber2 = [1, 4, 4, 6, 8, 2, 4, 7];

document.querySelector("#array").innerHTML = `Array number : [${arrayNumber2}]`;

const handleAddNumber = () => {
  let number = +document.querySelector("#numberAdd").value;

  arrayNumber2.push(number);

  document.querySelector(
    "#array"
  ).innerHTML = `Array number : [${arrayNumber2}]`;
};

const hanldeDeleteNumber = () => {
  // input: arrayNumber, số cần xóa
  let number = +document.querySelector("#deleteAdd").value;

  // progress:
  //   1. duyệt mảng để tìm số cần xóa
  //   2. tìm được số cần xóa thì dùng hàm splice để xóa đi phần tử đó

  // cách 1:
  // đặt cờ hiệu
  let indexDel = -1;

  for (let index = arrayNumber2.length; index > 0; index--) {
    if (arrayNumber2[index] === number) {
      indexDel = index;
      arrayNumber2.splice(indexDel, 1);
    }
  }

  if (indexDel === -1) {
    console.log("Không có số này trong mảng");
  } else {
    console.log("số đã được xóa");
  }

  // end đặt cờ hiệu

  // cách 2:
  // let indexOfDel = arrayNumber2.indexOf(number);
  // console.log("indexOfDel: ", indexOfDel);

  // if (indexOfDel === -1) {
  //   console.log("Không có số này trong mảng");
  // } else {
  //   arrayNumber2.splice(indexOfDel, 1);
  //   console.log("số đã được xóa");
  // }

  // cách 3: dùng filter
  let arrayNew = arrayNumber2.filter(function (numberDel) {
    // index: đại diện cho từng phần tử trong mảng
    console.log("index: ", numberDel);
    return numberDel !== number;
  });
  console.log("arrayNew", arrayNew);

  // output: cập nhật lại mảng ban đầu

  document.querySelector(
    "#array"
  ).innerHTML = `Array number : [${arrayNumber2}]`;
};
