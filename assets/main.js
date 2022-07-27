document.getElementById("submit").addEventListener("click", async function (e) {
    e.preventDefault();
   // получаем данные формы
   let registerForm = document.forms["registerForm"];
   let way = registerForm.elements["way"].value;
   // конвектируем данные в json
   let user = JSON.stringify({way: way});
   let request = new XMLHttpRequest();
   // посылаем запрос на адрес "/user"
    request.open("POST", "/user", true);   
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function () {
       // получаем и парсим ответ сервера
        let receivedUser = JSON.parse(request.response);
        console.log(receivedUser);   // ответ сервера
    });
    request.send(user);
});