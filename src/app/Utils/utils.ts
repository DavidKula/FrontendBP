export class Utils {

  static getItemLevelFromBlizzardItems(equipped_items: any) : number {

      let total = 0
      let twoHandWepIlvl = 0
      let hasOffHand = false
      equipped_items.forEach((element: { level: { value: number}; inventory_type: {name: string}; slot: { type: string} }) => {
  
        if(element.slot.type === "OFF_HAND") {
          hasOffHand = true
        } 
  
        if(element.slot.type == "SHIRT" || element.slot.type == "TABARD") return;

        if(element.slot.type === "MAIN_HAND" && element.inventory_type.name === "Two-Hand") {
          twoHandWepIlvl = element.level.value
        }
  
        total += element.level.value
      });
  
      if(!hasOffHand) total += twoHandWepIlvl
      return parseFloat((Math.round((total /16) * 10) / 10).toFixed(1))
    }
}