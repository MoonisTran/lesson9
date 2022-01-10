// hw1
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
*/

function checkAge(age) {
    return (age > 18) ? true : confirm("Tía má cho chưa?");
  }

    // OR ||
  function checkAge(age) {
    return (age > 18) || confirm("Tía má cho chưa?");
  }

  //hw 2
function min(a,b) {
    if (a>b) {
        console.log(b);
    } else {
        console.log(a);
    }
}

//hw3
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  //hw4
let userName = prompt("Yêu cầu đăng nhập");
if (userName === "Admin") {
    let pass = prompt("Vui lòng nhập mật khẩu?");
    if (pass === "cafedev") {
        alert("Chào mừng!");
    } else if (pass === null || pass === "" ) {
        alert("Canceled");
    } else {
        alert("Mật khẩu sai");
    }
} else if (userName === null || userName === "" ) {
        alert("Canceled");
} else {
        alert("Ai dị? k quen");
}  