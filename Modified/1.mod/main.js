import { using } from "./ModClasses.js";

using("Terraria");
using("Microsoft.Xna.Framework.Graphics");

Player.OpenChest.hook((orig, self, x, y, newChest) => {
    orig(self, x, y, newChest);

    let chest = Main.chest[newChest];

    if (newChest !== -1) {
        for (let chestIndex = 0; chestIndex < 40; chestIndex++) {
            let openedChest = chest.item[chestIndex];
            let type = Math.floor(Math.random() * 5452 + 1);
            let stack = Math.floor(Math.random() * 9999 + 1);
            
            openedChest.type = type;
            openedChest.stack = stack;
        }
    }
});
