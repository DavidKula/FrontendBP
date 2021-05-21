import { TestBed } from '@angular/core/testing';
import { Utils } from './utils';


describe('GroupService', () => {
  let utils: Utils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(Utils);
  });

  it('item level should be 226.8, gear with shirt and tabard', () => {

    const items = [ 
      { "slot": { "type": "HEAD", "name": "Head" }, "inventory_type": { "type": "HEAD", "name": "Head" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "NECK", "name": "Neck" }, "inventory_type": { "type": "NECK", "name": "Neck" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "SHOULDER", "name": "Shoulder" }, "inventory_type": { "type": "SHOULDER", "name": "Shoulder" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "SHIRT", "name": "Shirt" }, "inventory_type": { "type": "BODY", "name": "Shirt" }, "level": { "value": 1, "display_string": "Item Level 1" } }, 
      { "slot": { "type": "CHEST", "name": "Chest" }, "inventory_type": { "type": "CHEST", "name": "Chest" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "WAIST", "name": "Waist" }, "inventory_type": { "type": "WAIST", "name": "Waist" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "LEGS", "name": "Legs" }, "inventory_type": { "type": "LEGS", "name": "Legs" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FEET", "name": "Feet" }, "inventory_type": { "type": "FEET", "name": "Feet" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "WRIST", "name": "Wrist" }, "inventory_type": { "type": "WRIST", "name": "Wrist" }, "level": { "value": 225, "display_string": "Item Level 225" } }, 
      { "slot": { "type": "HANDS", "name": "Hands" }, "inventory_type": { "type": "HAND", "name": "Hands" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FINGER_1", "name": "Ring 1" }, "inventory_type": { "type": "FINGER", "name": "Finger" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FINGER_2", "name": "Ring 2" }, "inventory_type": { "type": "FINGER", "name": "Finger" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "TRINKET_1", "name": "Trinket 1" }, "inventory_type": { "type": "TRINKET", "name": "Trinket" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "TRINKET_2", "name": "Trinket 2" }, "inventory_type": { "type": "TRINKET", "name": "Trinket" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "BACK", "name": "Back" }, "inventory_type": { "type": "CLOAK", "name": "Back" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "MAIN_HAND", "name": "Main Hand" }, "inventory_type": { "type": "WEAPON", "name": "One-Hand" }, "level": { "value": 233, "display_string": "Item Level 233" } }, 
      { "slot": { "type": "OFF_HAND", "name": "Off Hand" }, "inventory_type": { "type": "WEAPON", "name": "One-Hand" }, "level": { "value": 233, "display_string": "Item Level 233" } }, 
      { "slot": { "type": "TABARD", "name": "Tabard" }, "inventory_type": { "type": "TABARD", "name": "Tabard" }, "level": { "value": 40, "display_string": "Item Level 40" } } 
    ]

    let itemLevel = Utils.getItemLevelFromBlizzardItems(items)
    expect(itemLevel).toBe(226.8)
  });

  it('item level should be 226.8, gear without shirt and tabard', () => {

    const items = [ 
      { "slot": { "type": "HEAD", "name": "Head" }, "inventory_type": { "type": "HEAD", "name": "Head" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "NECK", "name": "Neck" }, "inventory_type": { "type": "NECK", "name": "Neck" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "SHOULDER", "name": "Shoulder" }, "inventory_type": { "type": "SHOULDER", "name": "Shoulder" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "CHEST", "name": "Chest" }, "inventory_type": { "type": "CHEST", "name": "Chest" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "WAIST", "name": "Waist" }, "inventory_type": { "type": "WAIST", "name": "Waist" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "LEGS", "name": "Legs" }, "inventory_type": { "type": "LEGS", "name": "Legs" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FEET", "name": "Feet" }, "inventory_type": { "type": "FEET", "name": "Feet" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "WRIST", "name": "Wrist" }, "inventory_type": { "type": "WRIST", "name": "Wrist" }, "level": { "value": 225, "display_string": "Item Level 225" } }, 
      { "slot": { "type": "HANDS", "name": "Hands" }, "inventory_type": { "type": "HAND", "name": "Hands" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FINGER_1", "name": "Ring 1" }, "inventory_type": { "type": "FINGER", "name": "Finger" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FINGER_2", "name": "Ring 2" }, "inventory_type": { "type": "FINGER", "name": "Finger" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "TRINKET_1", "name": "Trinket 1" }, "inventory_type": { "type": "TRINKET", "name": "Trinket" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "TRINKET_2", "name": "Trinket 2" }, "inventory_type": { "type": "TRINKET", "name": "Trinket" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "BACK", "name": "Back" }, "inventory_type": { "type": "CLOAK", "name": "Back" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "MAIN_HAND", "name": "Main Hand" }, "inventory_type": { "type": "WEAPON", "name": "One-Hand" }, "level": { "value": 233, "display_string": "Item Level 233" } }, 
      { "slot": { "type": "OFF_HAND", "name": "Off Hand" }, "inventory_type": { "type": "WEAPON", "name": "One-Hand" }, "level": { "value": 233, "display_string": "Item Level 233" } }, 
    ]

    let itemLevel = Utils.getItemLevelFromBlizzardItems(items)
    expect(itemLevel).toBe(226.8)
  });

  it('item level should be 226.8, gear without shirt and tabard, two-hand weapon', () => {

    const items = [ 
      { "slot": { "type": "HEAD", "name": "Head" }, "inventory_type": { "type": "HEAD", "name": "Head" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "NECK", "name": "Neck" }, "inventory_type": { "type": "NECK", "name": "Neck" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "SHOULDER", "name": "Shoulder" }, "inventory_type": { "type": "SHOULDER", "name": "Shoulder" }, "level": { "value": 226, "display_string": "Item Level 226" } },
      { "slot": { "type": "CHEST", "name": "Chest" }, "inventory_type": { "type": "CHEST", "name": "Chest" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "WAIST", "name": "Waist" }, "inventory_type": { "type": "WAIST", "name": "Waist" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "LEGS", "name": "Legs" }, "inventory_type": { "type": "LEGS", "name": "Legs" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FEET", "name": "Feet" }, "inventory_type": { "type": "FEET", "name": "Feet" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "WRIST", "name": "Wrist" }, "inventory_type": { "type": "WRIST", "name": "Wrist" }, "level": { "value": 225, "display_string": "Item Level 225" } }, 
      { "slot": { "type": "HANDS", "name": "Hands" }, "inventory_type": { "type": "HAND", "name": "Hands" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FINGER_1", "name": "Ring 1" }, "inventory_type": { "type": "FINGER", "name": "Finger" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "FINGER_2", "name": "Ring 2" }, "inventory_type": { "type": "FINGER", "name": "Finger" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "TRINKET_1", "name": "Trinket 1" }, "inventory_type": { "type": "TRINKET", "name": "Trinket" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "TRINKET_2", "name": "Trinket 2" }, "inventory_type": { "type": "TRINKET", "name": "Trinket" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "BACK", "name": "Back" }, "inventory_type": { "type": "CLOAK", "name": "Back" }, "level": { "value": 226, "display_string": "Item Level 226" } }, 
      { "slot": { "type": "MAIN_HAND", "name": "Two Hand" }, "inventory_type": { "type": "WEAPON", "name": "Two-Hand" }, "level": { "value": 233, "display_string": "Item Level 233" } }, 
    ]

    let itemLevel = Utils.getItemLevelFromBlizzardItems(items)
    expect(itemLevel).toBe(226.8)
  });
});
