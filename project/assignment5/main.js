// ========================================================
// Assignment 5: JavaScript Post and Reply
// ========================================================

window.onload = setupFunction;

function setupFunction() {
    // กำหนดชื่อหัวข้อ
    document.getElementById("top").innerHTML = "Welcome to the Forum";
}

// ตัวแปรนับลำดับการโพสต์
let postCount = 0;

function postFunction() {
    // อ่านข้อความจาก textarea
    var message = document.getElementById("message").value;

    // Post ครั้งที่ 1
    if (postCount == 0) {
        document.getElementById("topic").innerHTML = message;
    }

    // Post ครั้งที่ 2
    else if (postCount == 1) {
        document.getElementById("reply1").innerHTML = message;
    }

    // Post ครั้งที่ 3
    else if (postCount == 2) {
        document.getElementById("reply2").innerHTML = message;
    }

    // ล้างช่องข้อความ
    document.getElementById("message").value = "";

    // เพิ่มจำนวนโพสต์
    postCount++;
}

function clearFunction() {
    // ล้างข้อความใน topic และ reply
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

    // ล้าง textarea
    document.getElementById("message").value = "";

    // รีเซ็ตจำนวนโพสต์
    postCount = 0;
}
