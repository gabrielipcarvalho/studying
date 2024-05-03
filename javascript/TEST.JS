const fightModule = (function () {
    var harry = "Potter";
    var voldemort = "He who must not be named";

    function fight(character1, character2) {
        let attack1 = Math.floor(Math.random() * character1.length);
        let attack2 = Math.floor(Math.random() * character2.length);
        return attack1 > attack2 ? `${character1} wins` : `${character2} wins`;
    }

    return { fight: fight };
})();
fightModule.fight("Ron", "Hagrid");
fightModule();
