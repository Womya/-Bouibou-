const Discord = require('Discord.js');

var bot = new Discord.Client();
var prefix = ("!");
var prefix2 = ("?")
var prefix3 = ("†")
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'modérer des trucs... ', type:  0} })
    console.log("botready !");
});

bot.login('Mzk1OTcyMzk5MDIxMDMxNDI0.DSapmQ.7Jn3zZnPADPJoGwTaQIgDXyNdxc')

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenu_info_toussa").send(`Chalut ! ${member.user.username}`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenu_info_toussa").send(`Bye ! ${member.user.username}`)
})

bot.on('message', message => {
    if (message.content === prefix + "regle")
    message.channel.sendMessage("Voici les rêgles du serveur: Les @Loup sont l'équivalent des modérateurs. Aucun manque de respect envers @madame Wø n'est accepté, le responsable sera bannis sur le champ. Les conflits se régleront sous présence d'@Chefs de Meute. Présence d'une modération impotante sur (presque) tout le serveur. Ici, on se respecte ausii bien soi même que les autres.")
   
    if (message.content === prefix + "presentation")
    message.channel.sendMessage("Salut ! Je suis Bouibou ! le bot de modération de ce serveur ! vous pouvez m'utiliser en tappant les commandes inscrites dans le channel #bienvenu_info_toussa. Amusez vous bien !!!")

    if (message.content === prefix + "liste_des_noms")
    message.channel.sendMessage("Les membres actuels du serveur son: † Wømya †, † ørora †, Jules, Yodasgame282, Winter, Cédric")

    if (message.content === prefix2 + "chefs de meute")
    message.channel.sendMessage("Les Chefs de meute sont les Les créateurs et gérants du serveur")

    if (message.content === prefix2 + "bouibou")
    message.channel.sendMessage("Bah C'est Mwa...")

    if (message.content === prefix2 + "copain irl")
    message.channel.sendMessage("ce sont les personnes que l'on croise tout les jours ex: en cours,etc")

    if (message.content === prefix2 + "amis virtuels")
    message.channel.sendMessage("ce sont les amitiés forgées sur internet.")

    if (message.content === prefix2 + "Abonnés")
    message.channel.sendMessage("C'est un rôle qui est attribué à toues les personnes qui sont abonées à la chaîne et qui on eu le privilège de pouvoir être sur le serveur !")

    if (message.content === prefix2 + "loup")
    message.channel.sendMessage("ce sont les modérateurs du serveurs, une sorte de 'police' qui maintient l'ordre sur le serveur en plus de Chefs de meute et de moi même")

    if (message.content === prefix2 + "the doomguy")
    message.channel.sendMessage("c'est un rôle attribuer au personne qui entre souvent en conflit c'est une punition temporaire")

    if (message.content === prefix2 + "patatomik")
    message.channel.sendMessage("un rang de préstige accordé au maitre dans l'art de l'AFK")

    if (message.content === prefix2 + "entité 1.1")
    message.channel.sendMessage("ce sont de personne sans grand intéret voir même cancer pour la communauté mais limitée dans leurs actions")

    if (message.content === prefix2 + "madame wø")
    message.channel.sendMessage("c'est la madame de † Wømya †(du coup il faudrait un peut se bouger pour aller la voire feigniasse !!!) ")

    if (message.content === prefix2 + "the sentence")
    message.channel.sendMessage("ce sont des sujets ayant commis une ou des erreurs envers les membres du serveurs ou ayant enfreint certaines rêgles.")

    if (message.content === prefix + "Ørora")
    message.channel.sendMessage("Malawi de la Clio IV Rs 220")

    if (message.content === prefix + "Wømya")
    message.channel.sendMessage("Malawi de la A45 Amg")

    if (message.content === prefix + "MALAWI")
    message.channel.sendMessage("VLaimennnnnnnnnnnnnt")

    if (message.content === prefix + "meute")
    message.channel.sendMessage("Membre du conseil des loups sur le serveur. Présent lors des jugements des membres perturbateur du serveur.")

    if (message.content === prefix + "help")
    message.channel.sendMessage("!regle: vous donne un résumé des règles du serveurs., !liste_des _noms: vous informe des noms des membres., !liste_des_rôles: vous donne la liste des rôles sur le serveur, !*nom d'un rôle* : vous donne de plus amples informations sur les rôles et comment les obtenirs, ?*nom d'un membre* : Vous donne le nom, l'age et quelques info sur un membre en particulier.");

    if (message.content === prefix + "grogne")
    message.channel.sendMessage("Grrr...");

    if (message.content === prefix + "miam")
    message.channel.sendMessage("Waf !");

    if (message.content === prefix + "Aim Bot")
    message.channel.sendMessage("Need Backup !")

    if (message.content === prefix + "animaliann")
    message.channel.sendMessage("ALLAHU AKHBAR !!!")

    if (message.content === prefix2+ "† Wømya †")
    message.channel.sendMessage("Prénom: Mathéo Age: 15 Info: Guitariste Noob et aime les loups et les doudous :3");

    if (message.content === prefix2 + "† Ørora †")
    message.channel.sendMessage("Prénom: Ariel Age: 14 Info: Copain Loup et guitariste, fan de voiture et de fille (wiwi vlaiment :3) aime la lutherie et mwa n_n");

    if (message.content === prefix2 + "Winter")
    message.channel.sendMessage("Prénom: ? Age: 15 Info: aime la musique et les jeux");

    if (message.content === prefix2 + "Jules")
    message.channel.sendMessage("Prénom: Jules Age: 14 Info: aime les jeux vidéo et les mangas");

    if (message.content === prefix2 + "YodasGames282")
    message.channel.sendMessage("Prénom: Jules Age: 15 Info: Aime Avenged Sevenfold, les jeux et le cinéma");

    if (message.content === prefix2 + "Wakafoufou")
    message.channel.sendMessage("Prénom: Titou Age: 1 Info: Nounours trop mignion qui mange des steaks hachés");

    if (message.content === prefix2 + "Cédric")
    message.channel.sendMessage("Prénom: Cédric Age: 16 Info: Aime BEAUCOUP la culture japonnaise et les mangas (surtout Dragon Ball)");
    
    if (message.content === prefix2 + "BOUIBOU")
    message.channel.sendMessage("Prénom: Bouibou Age: 2 mois Info: Bébé loup modo à votre service ! (mais pas trop quand même hein !)");

    if (message.content === prefix2 + "Malawi")
    message.channel.sendMessage("Prénom: Malawi Age: ? Info: léfugié au congo qui a le soulilie vlaiment hmm.");

    if (message.content === prefix + "!liste_des_rôles")
    message.channel.sendMessage("Les rôles actuel sont: Chefs de meute, Bouibou, Meute, Madame Wø, Loup, Copain IRL, Amis Virtuel, Abonnés, The Doomguy, Patatomik, entité 1.1, The sentence");

    if (message.content === prefix3 + " Titou †")
    message.channel.sendMessage("°.°")

    if (message.content === "Ca va Bouibou ?"){
        random();

        if (randnum == 1){
            message.reply("Bouibou content, Bouibou parle copain !")
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("Bouibou pas content, Bouibou a pas neige...")
            console.log(randnum);
        }

        if (randnum == 3){
            message.reply("Bouibou aime quand toi parle !")
            console.log(randnum);
        }

        if (randnum == 4){
            message.reply("Laisse Bouibou ! Bouibou vient pas embêter quand toi dors !!!")
            console.log(randnum);
        }

        if (randnum == 5){
            message.reply("Bouibou aime avoir compagnie humain car Bouibou loup et Bouibou vit dans forêt sans humain...")
            console.log(randnum);
        }
    }
});

function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}