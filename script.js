var Créature = /** @class */ (function () {
    function Créature(nom, vie, attaque, defence, critique, magie, mana) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.defence = defence;
        this.critique = critique;
        this.magie = magie;
        this.mana = mana;
    }
    ;
    Créature.prototype.getNom = function () {
        return this.nom;
    };
    ;
    Créature.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    ;
    Créature.prototype.getVie = function () {
        return this.vie;
    };
    ;
    Créature.prototype.setVie = function (vie) {
        this.vie = vie;
    };
    ;
    Créature.prototype.getAttaque = function () {
        return this.attaque;
    };
    ;
    Créature.prototype.setAttaque = function (attaque) {
        this.attaque = attaque;
    };
    ;
    Créature.prototype.getDefence = function () {
        return this.defence;
    };
    ;
    Créature.prototype.setDefence = function (defence) {
        this.defence = defence;
    };
    ;
    Créature.prototype.getCritique = function () {
        return this.critique;
    };
    ;
    Créature.prototype.setCritique = function (critique) {
        this.critique = critique;
    };
    ;
    Créature.prototype.getMagie = function () {
        return this.magie;
    };
    ;
    Créature.prototype.setMagie = function (magie) {
        this.magie = magie;
    };
    ;
    Créature.prototype.getMana = function () {
        return this.mana;
    };
    ;
    Créature.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    ;
    return Créature;
}());
var joueur = new Créature("Bili", 100, 20, 10, 0.4, 10, 100);
var monster = new Créature("Dark", 100, 20, 10, 0.2, 20, 100);
document.getElementById("nomDuJoueur").textContent = joueur.getNom();
document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
document.getElementById("magieDuJoueur").textContent = String(joueur.getMagie());
document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
document.getElementById("nomDuMonstre").textContent = monster.getNom();
document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
document.getElementById("magieDuMonstre").textContent = String(monster.getMagie());
document.getElementById("pmDuMonstre").textContent = String(monster.getMana());
function attaqueJoueur() {
    var atJ = joueur.getAttaque();
    var critJ = joueur.getCritique();
    var defJ = joueur.getDefence();
    var pvJ = joueur.getVie();
    var defM = monster.getDefence();
    var pvM = monster.getVie();
    var atM = monster.getAttaque();
    var critM = monster.getCritique();
    var randomJ = Math.random() < critJ;
    var randomM = Math.random() < critM;
    if (randomJ) {
        atJ = atJ + 10;
    }
    if (randomM) {
        atM = atM + 20;
    }
    var resAtJ = defM - atJ;
    var resAtM = defJ - atM;
    if (resAtJ < 0) {
        var pvRestantM = pvM + resAtJ;
        monster.setVie(pvRestantM);
        pvM = monster.getVie();
        if (pvM <= 0) {
            monster.setVie(0);
            document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
            var x = confirm("Victoire du joueur français !");
            if (x) {
                joueur.setVie(100);
                joueur.setMana(100);
                monster.setVie(100);
                monster.setMana(100);
                document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
                document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
                document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
                document.getElementById("pmDuMonstre").textContent = String(monster.getMana());
            }
            return this.attaqueJoueur;
        }
        if (resAtM < 0) {
            var pvRestantJ = pvJ + resAtM;
            joueur.setVie(pvRestantJ);
            pvJ = joueur.getVie();
            if (pvJ <= 0) {
                joueur.setVie(0);
                document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
                var y = confirm("Victoire du monstre !");
                if (y) {
                    joueur.setVie(100);
                    joueur.setMana(100);
                    monster.setMana(100);
                    monster.setVie(100);
                    document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
                    document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
                    document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
                    document.getElementById("pmDuMonstre").textContent = String(monster.getMana());
                }
            }
        }
        document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
        document.getElementById("pmDuMonstre").textContent = String(monster.getMana());
    }
    document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
    document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
}
;
function magieJoueur() {
    var magieJ = joueur.getMagie();
    var manaJ = joueur.getMana();
    var vieJ = joueur.getVie();
    var magieM = monster.getMagie();
    var manaM = monster.getMana();
    var vieM = monster.getVie();
    if (manaJ > 0) {
        var resJ = vieM - magieJ;
        monster.setVie(resJ);
        vieM = monster.getVie();
        var manaResJ = manaJ - 20;
        joueur.setMana(manaResJ);
        if (vieM <= 0) {
            monster.setVie(0);
            document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
            var x = confirm("Victoire du joueur français !");
            if (x) {
                joueur.setVie(100);
                joueur.setMana(100);
                monster.setMana(100);
                monster.setVie(100);
                document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
                document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
                document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
                document.getElementById("pmDuMonstre").textContent = String(monster.getMana());
            }
        }
        if (manaM > 0) {
            var resM = vieJ - magieM;
            joueur.setVie(resM);
            vieJ = joueur.getVie();
            var manaResM = manaM - 20;
            monster.setMana(manaResM);
            if (vieJ <= 0) {
                joueur.setVie(0);
                document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
                var y = confirm("Victoire du monstre !");
                if (y) {
                    joueur.setVie(100);
                    joueur.setMana(100);
                    monster.setMana(100);
                    monster.setVie(100);
                    document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
                    document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
                    document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
                    document.getElementById("pmDuMonstre").textContent = String(monster.getMana());
                }
            }
        }
        document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
        document.getElementById("pmDuMonstre").textContent = String(monster.getMana());
    }
    else {
        alert("Vous n'avez plus de mana !");
    }
    document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
    document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
}
;
var tableau = ["Epées", "Bouclier", "Lance", "Armure"];
tableau.forEach(function (element) {
    console.log(element);
});
for (var i in tableau) {
    console.log(tableau[i]);
}
for (var index = 0; index < tableau.length; index++) {
    console.log(tableau[index]);
}
