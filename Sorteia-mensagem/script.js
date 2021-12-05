let msg_list = ["msg1", "msg2", "msg3"]

function mensagem(){
    let msg_escolhida = Math.floor(Math.random() * msg_list.length);
    console.log(msg_list [msg_escolhida]);
    // return msg_list [msg_escolhida]
    document.getElementById("ler_msg").innerHTML = msg_list[msg_escolhida];
}
