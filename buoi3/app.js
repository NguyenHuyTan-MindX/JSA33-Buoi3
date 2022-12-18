//Sự khác biệt giữa For in & for of
let list = [4,5,6];
for (let i in list) {
    console.log(i)
}
// 0,1,2
for (let i of list ) {
    console.log(i)
}
//Hàm IndexOf():
let text = "Hello world, welcome to MindX";
let result = text.indexOf("world")
console.log("Ket qua IndexOf",result)
/*
Bài tập: Một nhà hàng gặp khó khăn trong việc quản lý menu order.
Xây dựng chương trình Order gồm những tính năng sau:
mặc định: trong menu luôn có 3 món ban đầu là:
let menu = [];
Cho người dùng nhập vào: C,R,U,D trong đó:
- C: Create => Thêm 1 món ăn mới vào menu
- R: Read => Hiển thị ra những món đã order (trong mảng menu)
- U: Update => Nhập tên món muốn thay thế (nhập không đúng món bắt nhập lại hoặc thoát nếu không muốn)
=> "Nhập tên món mới"
- D: Delete => Nhập tên món muốn delete (nhập không đúng thì nhập lại hoặc thoát ra)
=> xóa món đó trong menu.
*/
//them mon moi = push
// doc menu =, menu
// cap nhap = menu.indexOf => xac dinh vi tri can cap nhap mon an => menu[vitriUpdate]
// xoa = splice

/*
let menu = [];
let n = prompt("Người dùng nhập số món ăn muốn lưu:");
// n là biến người dùng nhập
n = Number(n); // hieu la nguoi dung nhap so
let i = 1
do{
    let x = prompt(`Mời người dùng nhập món ăn thứ ${i}`);
    // hiểu là khi in ra Mời người dùng nhập món ăn thứ i <=> số món ăn người dùng đã nhập
    menu.push(x);
    i = i+1;
}
while (i <= n);
console.log ("Menu mon an hien tai la:", menu);

let input; 
do {
    input = prompt("Moi nguoi dung nhap vao C,R,U,D");
    if (input == 'c'){
        //ở đây kiểm tra input == c hay không nha
        menu.push(prompt("Mời người dùng nhập món ăn muốn thêm:"));
        console.log("Menu món ăn sau khi thêm là:", menu);
    }
    // r = read
    else if (input == 'r'){
        console.log("Menu món ăn sau khi thêm là:",menu);
    }
    else if (input == 'u'){
        // tìm được vị trí của phần tử muốn cập nhập món ăn
        let vitriUpdate = menu.indexOf(prompt("người dùng nhập món ăn muốn cập nhập"))
        menu[vitriUpdate] = prompt("Người dùng nhập món ăn thay thế món ăn cũ:")
        console.log("Menu món ăn sau khi update là:", menu);
    }
    else if (input == 'd'){
        let vitriDelte = menu.indexOf(prompt("người dùng nhập món ăn muốn Delete:"));
        // hàm xoá là splice
        menu.splice(vitriDelte, 1);
        console.log("Menu món ăn sau khi delete là:", menu);
    }
    else{
        alert("Không tồn tại lựa chọn => thoát vòng lặp");
    }
}
// c => create
// r => read
// u => update
// d => delte

while (input == 'c' || input == 'r' || input == 'u' || input == 'd');
*/

function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
