function redirectWhatsApp() {
    var phoneNumber = "5511999999999";
    var message = "Olá, estou interessado no seu serviço!";
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;
    alert(whatsappURL)
    //window.open(whatsappURL, '_blank');
}

function seeProject(project){
    window.open("https://github.com/meuGit/"+project, '_blank');
}