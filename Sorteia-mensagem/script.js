let msg_list = ["msg1", "msg2", "msg3"]


const mensagem = async() => {
    const response = await fetch('https://61ac1511264ec200176d43aa.mockapi.io/sorteia-mensagem/v1/msg');
    const myJson = await response.json(); 
    let indice = Math.floor(Math.random() * myJson.length);
    document.getElementById("ler_msg").innerHTML = myJson[indice].msg;
    
    console.log(indice);
    console.log(myJson[indice].msg);
}
