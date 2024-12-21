import { lib, game, ui, get, ai, _status } from "../../noname.js";

const dynamicTranslates = {
    olsbjinming(player) {
        let str = "回合开始时，你可以选择一项：";
        for (let i of ["1.回复过1点体力；", "2.造成过2点伤害；", "3.使用过三种类型的牌；", "4.弃置过四张牌。"]) {
            if (!player.getStorage("olsbjinming").includes(parseInt(i.slice(0, 1)))) i = `<span style="text-decoration: line-through;">${i}</span>`;
            str += i;
        }
        str += "然后本回合结束时你摸X张牌，若未满足选择的条件，则你失去1点体力并删除此选项（X为本回合〖矜名〗选择的选项序号）。";
        return str;
    },
	ol_yanzhu(player){
		if (!player.storage["ol_yanzhu_rewrite"]) {
			return `出牌阶段限一次，你可以令一名其他角色选择一项：1.令你获得其装备区的所有牌，你修改“宴诛”和“兴学”；2.弃置一张牌且下一次受到的伤害+1直到其下个回合开始。`;
		}
		return `出牌阶段限一次，你可以令一名其他角色下一次受到的伤害+1直到其下个回合开始。`;
	},
	ol_xinxue(player){
		if (!player.storage["ol_xinxue_rewrite"]) {
			return `结束阶段，你可令至多X名角色依次摸一张牌，然后其中手牌数大于体力值的角色依次将一张牌置于牌堆顶。（X为你的体力值）`;
		}
		return `结束阶段，你可以令至多X名角色依次摸一张牌，然后其中手牌数大于体力值的角色依次将一张牌置于牌堆顶（X为你的体力上限）。`;
	},
};
export default dynamicTranslates;
