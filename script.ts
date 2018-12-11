class Créature {
    private nom: string;
    private vie: number;
    private attaque: number;
    private defence: number;
    private critique: number;
    private magie: number;
    private mana: number;

    constructor(nom, vie, attaque, defence, critique, magie, mana) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.defence = defence;
        this.critique = critique;
        this.magie = magie;
        this.mana = mana;
    };

    getNom() {
        return this.nom;
    };

    setNom(nom) {
        this.nom = nom;
    };

    getVie() {
        return this.vie;
    };

    setVie(vie) {
        this.vie = vie;
    };

    getAttaque() {
        return this.attaque;
    };

    setAttaque(attaque) {
        this.attaque = attaque;
    };

    getDefence() {
        return this.defence;
    };

    setDefence(defence) {
        this.defence = defence;
    };

    getCritique() {
        return this.critique;
    };

    setCritique(critique) {
        this.critique = critique;
    };

    getMagie() {
        return this.magie;
    };

    setMagie(magie) {
        this.magie = magie;
    };

    getMana() {
        return this.mana;
    };

    setMana(mana) {
        this.mana = mana;
    };

}

var joueur: Créature = new Créature("Bili", 100, 20, 10, 0.4, 10, 100);
var monster: Créature = new Créature("Dark", 100, 20, 10, 0.2, 10, 100);

document.getElementById("nomDuJoueur").textContent = joueur.getNom();
document.getElementById("pvDuJoueur").textContent = String(joueur.getVie());
document.getElementById("magieDuJoueur").textContent = String(joueur.getMagie());
document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
document.getElementById("nomDuMonstre").textContent = monster.getNom();
document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
document.getElementById("magieDuMonstre").textContent = String(monster.getMagie());
document.getElementById("pmDuMonstre").textContent = String(monster.getMana());

function attaqueJoueur() {
    var atJ: number = joueur.getAttaque();
    var critJ: number = joueur.getCritique();
    var defJ: number = joueur.getDefence();
    var pvJ: number = joueur.getVie();

    var defM: number = monster.getDefence();
    var pvM: number = monster.getVie();
    var atM: number = monster.getAttaque();
    var critM: number = monster.getCritique();

    var randomJ: Boolean = Math.random() < critJ;
    var randomM: Boolean = Math.random() < critM;
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
            var x = confirm("Victoire du joueur français !")
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
                var y = confirm("Victoire du monstre !")
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

};

function magieJoueur() {
    var magieJ: number = joueur.getMagie();
    var manaJ: number = joueur.getMana();
    var vieJ: number = joueur.getVie();

    var magieM: number = monster.getMagie();
    var manaM: number = monster.getMana();
    var vieM: number = monster.getVie();

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
    } else {
        alert("Vous n'avez plus de mana !")
    }
    document.getElementById("pvDuMonstre").textContent = String(monster.getVie());
    document.getElementById("pmDuJoueur").textContent = String(joueur.getMana());
};

var tableau: Array<String> = ["Epées", "Bouclier", "Lance", "Armure"];

tableau.forEach(element => {
    console.log(element);
});

for (var i in tableau) {
    console.log(tableau[i]);
}

for (let index = 0; index < tableau.length; index++) {
    console.log(tableau[index]);
}
