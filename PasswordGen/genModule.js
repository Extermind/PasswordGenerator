exports.generate = function (number){
    var pass="";
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i=0; i<number;i++){
        pass += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return pass;
};