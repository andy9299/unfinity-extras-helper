const stickerData = [
  {
    "name": "Eldrazi Guacamole Tightrope",
    "art": [
      "Alert!",
      "Wizard hat",
      "Magic card back"
    ],
    "ability": "{TK}{TK} — Haste\n{TK}{TK}{TK}{TK}{TK} — You may cast this card from your graveyard by paying 2 life in addition to paying its other costs.",
    "stats": "{TK}{TK} — 1/4\n{TK}{TK}{TK} — 5/3",
    "imageName": "1_Eldrazi_Guacamole_Tightrope.jpg",
    "id": 1
  },
  {
    "name": "Trendy Circus Pirate",
    "art": [
      "Aviator hat and goggles",
      "In Response...",
      "Rubber Chicken"
    ],
    "ability": "{TK}{TK} — Deathtouch\n{TK}{TK}{TK}{TK}{TK} — Whenever this creature deals combat damage to a player, create that many 1/1 green Squirrel creature tokens.",
    "stats": "{TK}{TK} — 5/1\n{TK}{TK}{TK} — 3/6",
    "imageName": "2_Trendy_Circus_Pirate.jpg",
    "id": 2
  },
  {
    "name": "Night Brushwagg Ringmaster",
    "art": [
      "Fedora hat",
      "Bow tie",
      "Alien squirrel"
    ],
    "ability": "{TK}{TK} — Menace\n{TK}{TK}{TK} — Persist (When this permanent dies, if it had no -1/-1 counters on it, return it to the battlefield under its owner's control with a -1/-1 counter on it.)",
    "stats": "{TK}{TK} — 2/3\n{TK}{TK}{TK}{TK}{TK}{TK} — 10/10",
    "imageName": "3_Night_Brushwagg_Ringmaster.jpg",
    "id": 3
  },
  {
    "name": "Urza's Dark Cannonball",
    "art": [
      "Squirrel",
      "Beanie",
      "Gideon plushie"
    ],
    "ability": "{TK}{TK} — Exalted, exalted (Whenever a creature you control attacks alone, it gets +1/+1 until end of turn for each instance of exalted among permanents you control.)\n{TK}{TK}{TK} — Shadow (This creature can block or be blocked only by creatures with shadow.)",
    "stats": "{TK}{TK} — 1/5\n{TK}{TK}{TK}{TK} — 7/4",
    "imageName": "4_Urzas_Dark_Cannonball.jpg",
    "id": 4
  },
  {
    "name": "Misunderstood Trapeze Elf",
    "art": [
      "Straw hat",
      "Acorn",
      "Liliana plushie"
    ],
    "ability": "{TK}{TK} — Whenever you cast a spell, this creature gets +X/+X until end of turn, where X is the amount of generic mana in that spell's mana cost.\n{TK}{TK}{TK} — Hexproof",
    "stats": "{TK}{TK} — 4/2\n{TK}{TK}{TK}{TK} — 6/6",
    "imageName": "5_Misunderstood_Trapeze_Elf.jpg",
    "id": 5
  },
  {
    "name": "Zombie Cheese Magician",
    "art": [
      "Horse shoe",
      "Propeller cap",
      "Chandra plushie"
    ],
    "ability": "{TK}{TK} — First strike\n{TK}{TK}{TK}{TK} — Whenever this creature deals combat damage to a player, draw that many cards.",
    "stats": "{TK}{TK} — 3/3\n{TK}{TK}{TK} — 6/2",
    "imageName": "6_Zombie_Cheese_Magician.jpg",
    "id": 6
  },
  {
    "name": "Carnival Elephant Meteor",
    "art": [
      "Wrench",
      "Top hat",
      "Jace plushie"
    ],
    "ability": "{TK}{TK} — Sacrifice this permanent: Draw two cards.\n{TK}{TK}{TK} — Whenever this creature attacks, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
    "stats": "{TK}{TK} — 4/1\n{TK}{TK}{TK}{TK}{TK} — 8/7",
    "imageName": "7_Carnival_Elephant_Meteor.jpg",
    "id": 7
  },
  {
    "name": "Happy Dead Squirrel",
    "art": [
      "Top hat",
      "Cat",
      "Garruk plushie"
    ],
    "ability": "{TK}{TK} — {T}: Add {C}{C}. Spend this mana only to cast noncreature spells.\n{TK}{TK}{TK} — Infect (This permanent deals damage to creatures in the form of -1/-1 counters and to players in the form of poison counters.)",
    "stats": "{TK}{TK} — 3/2\n{TK}{TK}{TK}{TK} — 4/7",
    "imageName": "8_Happy_Dead_Squirrel.jpg",
    "id": 8
  },
  {
    "name": "Slimy Burrito Illusion",
    "art": [
      "Green wig with fascinator",
      "Cheese wedge",
      "Ajani plushie"
    ],
    "ability": "{TK}{TK} — Bushido 2 (Whenever this creature blocks or becomes blocked, it gets +2/+2 until end of turn.)\n{TK}{TK}{TK} — Double strike",
    "stats": "{TK}{TK} — 2/4\n{TK}{TK}{TK}{TK} — 5/6",
    "imageName": "9_Slimy_Burrito_Illusion.jpg",
    "id": 9
  },
  {
    "name": "Spooky Clown Mox",
    "art": [
      "Cracked egg",
      "Atomic fascinator",
      "Sliver claw"
    ],
    "ability": "{TK}{TK} — Vigilance\n{TK}{TK}{TK}{TK} — {1}, {T}: Tap target creature.",
    "stats": "{TK}{TK} — 1/5\n{TK}{TK}{TK} — 5/4",
    "imageName": "10_Spooky_Clown_Mox.jpg",
    "id": 10
  },
  {
    "name": "Mystic Doom Sandwich",
    "art": [
      "Baseball cap",
      "Toy mallet",
      "Beeble"
    ],
    "ability": "{TK}{TK} — Lifelink\n{TK}{TK}{TK} — This creature must be blocked if able. Whenever this creature becomes blocked, it gets +1/+1 until end of turn for each creature blocking it.",
    "stats": "{TK}{TK} — 1/4\n{TK}{TK}{TK}{TK}{TK} — 6/8",
    "imageName": "11_Mystic_Doom_Sandwich.jpg",
    "id": 11
  },
  {
    "name": "Narrow-Minded Baloney Fireworks",
    "art": [
      "Impounding Lot-Bot",
      "Side eyes",
      "The Wanderer's hat"
    ],
    "ability": "{TK}{TK} — Whenever this creature attacks, you gain 2 life.\n{TK}{TK}{TK} — Vigilance, reach",
    "stats": "{TK}{TK} — 2/4\n{TK}{TK}{TK}{TK}{TK} — 7/7",
    "imageName": "12_Narrow-Minded_Baloney_Fireworks.jpg",
    "id": 12
  },
  {
    "name": "Unsanctioned Ancient Juggler",
    "art": [
      "Mustard-Ketchup \"Bot\"-tle",
      "Unfinity hat",
      "Groucho glasses"
    ],
    "ability": "{TK}{TK} — Whenever this creature attacks, bolster 1. (Choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)\n{TK}{TK}{TK}{TK} — Indestructible",
    "stats": "{TK}{TK} — 3/2\n{TK}{TK}{TK} — 5/4",
    "imageName": "13_Unsanctioned_Ancient_Juggler.jpg",
    "id": 13
  },
  {
    "name": "Deep-Fried Plague Myr",
    "art": [
      "Viking helmet",
      "Pie",
      "The Blackblade"
    ],
    "ability": "{TK}{TK} — Whenever this creature attacks, scry 1.\n{TK}{TK}{TK} — Whenever this permanent leaves the battlefield, you may destroy target artifact or enchantment.",
    "stats": "{TK}{TK}{TK} — 4/5\n{TK}{TK}{TK}{TK} — 8/4",
    "imageName": "14_Deep-Fried_Plague_Myr.jpg",
    "id": 14
  },
  {
    "name": "Contortionist Otter Storm",
    "art": [
      "Banana peel",
      "UFO",
      "Liliana's golden headdress"
    ],
    "ability": "{TK}{TK} — {T}: Target creature gains haste until end of turn.\n{TK}{TK}{TK}{TK} — Deathtouch, lifelink",
    "stats": "{TK}{TK} — 5/1\n{TK}{TK}{TK} — 3/5",
    "imageName": "15_Contortionist_Otter_Storm.jpg",
    "id": 15
  },
  {
    "name": "Sticky Kavu Daredevil",
    "art": [
      "Mushroom cloud",
      "Hard hat",
      "Krark's Other Thumb"
    ],
    "ability": "{TK}{TK} — Whenever this permanent dies, you may return target creature to its owner's hand.\n{TK}{TK}{TK}{TK} — Whenever this creature attacks, creatures you control get +1/+1 until end of turn.",
    "stats": "{TK}{TK} — 3/3\n{TK}{TK}{TK} — 2/6",
    "imageName": "16_Sticky_Kavu_Daredevil.jpg",
    "id": 16
  },
  {
    "name": "Goblin Coward Parade",
    "art": [
      "#1 pilot mug",
      "Spaceship",
      "Donkey ears headband"
    ],
    "ability": "{TK}{TK} — Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.)\n{TK}{TK}{TK} — When this permanent leaves the battlefield, you may destroy target creature with power 4 or greater.",
    "stats": "{TK}{TK} — 2/3\n{TK}{TK}{TK}{TK} — 8/4",
    "imageName": "17_Goblin_Coward_Parade.jpg",
    "id": 17
  },
  {
    "name": "Phyrexian Midway Bamboozle",
    "art": [
      "Angrath's hammer",
      "Airplane Bird House",
      "The Chain Veil"
    ],
    "ability": "{TK}{TK} — Whenever this creature attacks, you get {TK}.\n{TK}{TK}{TK} — Undying (When this creature dies, if it had no +1/+1 counters on it, return it to the battlefield under its owner's control with a +1/+1 counter on it.)",
    "stats": "{TK}{TK} — 4/2\n{TK}{TK}{TK}{TK}{TK} — 6/9",
    "imageName": "18_Phyrexian_Midway_Bamboozle.jpg",
    "id": 18
  },
  {
    "name": "Eternal Acrobat Toast",
    "art": [
      "Alien plushie",
      "Bowler hat",
      "The Skyship Weatherlight"
    ],
    "ability": "{TK}{TK} — Whenever this creature deals combat damage to a player, exile target creature you control, then return it to the battlefield under it owner's control.\n{TK}{TK}{TK} — {T}: Untap another target permanent.",
    "stats": "{TK}{TK}{TK} — 4/4\n{TK}{TK}{TK}{TK}{TK} — 7/8",
    "imageName": "19_Eternal_Acrobat_Toast.jpg",
    "id": 19
  },
  {
    "name": "Jetpack Death Seltzer",
    "art": [
      "Axe",
      "Bowling pin",
      "Nicol Bolas horns headband"
    ],
    "ability": "{TK}{TK} — Trample\n{TK}{TK}{TK} — {3}: Monstrosity 3. (If this creature isn't monstrous, put three +1/+1 counters on it and it becomes monstrous.)",
    "stats": "{TK}{TK}{TK} — 2/7\n{TK}{TK}{TK}{TK} — 6/5",
    "imageName": "20_Jetpack_Death_Seltzer.jpg",
    "id": 20
  },
  {
    "name": "Demonic Tourist Laser",
    "art": [
      "Goldfish",
      "Balloon",
      "Red wig with googles"
    ],
    "ability": "{TK}{TK} — Outlast {1} ({1}, {T}: Put a +1/+1 counter on this creature. Outlast only as a sorcery.)\n{TK}{TK}{TK} — When this permanent dies, you get seven {TK}.",
    "stats": "{TK}{TK} — 1/4\n{TK}{TK}{TK}{TK}{TK} — 9/6",
    "imageName": "21_Demonic_Tourist_Laser.jpg",
    "id": 21
  },
  {
    "name": "Cursed Firebreathing Yogurt",
    "art": [
      "Pirate tricorne",
      "Corn dog",
      "Vegetation Abomination"
    ],
    "ability": "{TK}{TK} — Prowess, prowess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn twice.)\n{TK}{TK}{TK}{TK}{TK} — {2}, {T}: This permanent deals 2 damage to any target.",
    "stats": "{TK}{TK} — 4/2\n{TK}{TK}{TK}{TK} — 4/8",
    "imageName": "22_Cursed_Firebreathing_Yogurt.jpg",
    "id": 22
  },
  {
    "name": "Ancestral Hot Dog Minotaur",
    "art": [
      "Astrotorium ticket",
      "Ice cream sundae",
      "Garruk's helmet"
    ],
    "ability": "{TK}{TK} — Afflict 2 (Whenever this creature becomes blocked, defending player loses 2 life.)\n{TK}{TK}{TK} — Flying",
    "stats": "{TK}{TK} — 1/4\n{TK}{TK}{TK}{TK}{TK} — 8/6",
    "imageName": "23_Ancestral_Hot_Dog_Minotaur.jpg",
    "id": 23
  },
  {
    "name": "Familiar Beeble Mascot",
    "art": [
      "Candy apple",
      "Chicken hat",
      "Fblthp"
    ],
    "ability": "{TK}{TK} — Whenever this creature attacks, untap target permanent.\n{TK}{TK}{TK}{TK} — Whenever a creature enters the battlefield under your control, creatures you control get +1/+1 until end of turn.",
    "stats": "{TK}{TK} — 2/3\n{TK}{TK}{TK} — 5/3",
    "imageName": "24_Familiar_Beeble_Mascot.jpg",
    "id": 24
  },
  {
    "name": "Giant Mana Cake",
    "art": [
      "Popcorn",
      "Vraska wig",
      "Moonsilver Spear"
    ],
    "ability": "{TK}{TK} — When this permanent leaves the battlefield, create two Food tokens. (They're artifacts with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")\n{TK}{TK}{TK}{TK} — When this permanent dies, destroy target nonland permanent.",
    "stats": "{TK}{TK} — 3/3\n{TK}{TK}{TK} — 6/2",
    "imageName": "25_Giant_Mana_Cake.jpg",
    "id": 25
  },
  {
    "name": "Snazzy Aether Homunculus",
    "art": [
      "Crown",
      "Kazoo",
      "Mirari"
    ],
    "ability": "{TK}{TK} — {1}: Target creature gains all creature types until end of turn.\n{TK}{TK}{TK} — Magecraft — Whenever you cast or copy an instant or sorcery spell, draw a card.",
    "stats": "{TK}{TK} — 2/4\n{TK}{TK}{TK}{TK}{TK} — 8/7",
    "imageName": "26_Snazzy_Aether_Homunculus.jpg",
    "id": 26
  },
  {
    "name": "Squid Fire Knight",
    "art": [
      "Donut",
      "Fez hat",
      "Bident"
    ],
    "ability": "{TK}{TK} — {T}: The next time target player would roll one or more dice this turn, instead they roll that many dice plus one, then you choose one of those rolls to ignore.\n{TK}{TK}{TK} — Protection from odd mana values",
    "stats": "{TK}{TK} — 4/1\n{TK}{TK}{TK}{TK} — 6/6",
    "imageName": "27_Squid_Fire_Knight.jpg",
    "id": 27
  },
  {
    "name": "Cool Fluffy Loxodon",
    "art": [
      "Funnel cake",
      "Devil horns headband",
      "Karn bobblehead"
    ],
    "ability": "{TK}{TK} — When this permanent leaves the battlefield, draw a card.\n{TK}{TK}{TK}{TK}{TK} — Whenever a creature enters the battlefield under your control, this permanent becomes a 13/13 Eldrazi creature in addition to its other types until end of turn.",
    "stats": "{TK}{TK} — 4/2\n{TK}{TK}{TK}{TK} — 5/6",
    "imageName": "28_Cool_Fluffy_Loxodon.jpg",
    "id": 28
  },
  {
    "name": "Space Fungus Snickerdoodle",
    "art": [
      "Jester cap and bells",
      "Ice cream cone",
      "Dragon plushie"
    ],
    "ability": "{TK}{TK} — Skulk (This creature can't be blocked by creatures with greater power.)\n{TK}{TK}{TK} — Battle cry (Whenever this creature attacks, each other attacking creature gets +1/+0 until end of turn.)",
    "stats": "{TK}{TK} — 3/2\n{TK}{TK}{TK}{TK}{TK} — 6/8",
    "imageName": "29_Space_Fungus_Snickerdoodle.jpg",
    "id": 29
  },
  {
    "name": "Playable Delusionary Hydra",
    "art": [
      "Soda",
      "Sombrero hat",
      "Blue sticky-hand"
    ],
    "ability": "{TK}{TK} — {T}: Draw a card, then discard a card.\n{TK}{TK}{TK}{TK} — Whenever this creature attacks, you gain 3 life and draw a card.",
    "stats": "{TK}{TK} — 1/5\n{TK}{TK}{TK} — 4/4",
    "imageName": "30_Playable_Delusionary_Hydra.jpg",
    "id": 30
  },
  {
    "name": "Wrinkly Monkey Shenanigans",
    "art": [
      "Witch hat",
      "Spider",
      "Garruk's axe"
    ],
    "ability": "{TK}{TK} — {1}: Target creature can't block this creature this turn.\n{TK}{TK}{TK}{TK} — Morbid — At the beginning of each end step, if a creature died this turn and this permanent is a creature, put a -1/-1 counter on this permanent and draw a card.",
    "stats": "{TK}{TK} — 2/4\n{TK}{TK}{TK} — 7/2",
    "imageName": "31_Wrinkly_Monkey_Shenanigans.jpg",
    "id": 31
  },
  {
    "name": "Geek Lotus Warrior",
    "art": [
      "Chocolate chip cookies",
      "Green balloon animal",
      "Shark beanie"
    ],
    "ability": "{TK}{TK} — {2}: This creature gets +2/+0 until end of turn.\n{TK}{TK}{TK}{TK} — Whenever a creature enters the battlefield under your control, this permanent deals 2 damage to target player.",
    "stats": "{TK}{TK} — 4/1\n{TK}{TK}{TK} — 3/6",
    "imageName": "32_Geek_Lotus_Warrior.jpg",
    "id": 32
  },
  {
    "name": "Primal Elder Kitty",
    "art": [
      "Triangle",
      "Boom!",
      "Rainbow wig"
    ],
    "ability": "{TK}{TK} — {1}: This creature gets +1/-1 until end of turn.\n{TK}{TK}{TK} — When this creature dies, you may put X +1/+1 counters on target creature, where X is this creature's power.",
    "stats": "{TK}{TK} — 5/1\n{TK}{TK}{TK}{TK} — 4/7",
    "imageName": "33_Primal_Elder_Kitty.jpg",
    "id": 33
  },
  {
    "name": "Sassy Gremlin Blood",
    "art": [
      "Unicycle",
      "Robo-Piñata",
      "Splash!"
    ],
    "ability": "{TK}{TK} — Whenever this creature attacks, create a Treasure token.\n{TK}{TK}{TK}{TK}{TK} — {3}: Target creature gains flying until end of turn.",
    "stats": "{TK}{TK} — 3/2\n{TK}{TK}{TK}{TK}{TK}{TK} — 10/10",
    "imageName": "34_Sassy_Gremlin_Blood.jpg",
    "id": 34
  },
  {
    "name": "Yawgmoth Merfolk Soul",
    "art": [
      "Snake",
      "Sword",
      "Ach! Hans, Run!"
    ],
    "ability": "{TK}{TK} — When this permanent leaves the battlefield, target player discards a card.\n{TK}{TK}{TK}{TK}{TK} — When this permanent leaves the battlefield, create five 1/1 white Clown Robot artifact creature tokens.",
    "stats": "{TK}{TK} — 3/3\n{TK}{TK}{TK}{TK} — 6/5",
    "imageName": "35_Yawgmoth_Merfolk_Soul.jpg",
    "id": 35
  },
  {
    "name": "Unassuming Gelatinous Serpent",
    "art": [
      "Rocket ship lollypop",
      "Umbrella",
      "\"Catch!\" speech bubble"
    ],
    "ability": "{TK}{TK} — When this permanent dies, return target noncreature, nonland card from your graveyard to your hand.\n{TK}{TK}{TK}{TK} — Whenever this creature deals combat damage to a player, that player mills twice that many cards.",
    "stats": "{TK}{TK} — 2/3\n{TK}{TK}{TK} — 7/2",
    "imageName": "36_Unassuming_Gelatinous_Serpent.jpg",
    "id": 36
  },
  {
    "name": "Squishy Sphinx Ninja",
    "art": [
      "Atom",
      "Angel wings",
      "\"Nope.\" speech bubble"
    ],
    "ability": "{TK}{TK} — Ward {2} (Whenever this creature becomes the target of a spell or ability an opponent controls, counter it unless that player pays {2}.)\n{TK}{TK}{TK}{TK} — Provoke (Whenever this creature attacks, you may have target creature defending player controls untap and block it if able.)",
    "stats": "{TK}{TK}{TK} — 5/3\n{TK}{TK}{TK}{TK}{TK} — 7/7",
    "imageName": "37_Squishy_Sphinx_Ninja.jpg",
    "id": 37
  },
  {
    "name": "Unique Charmed Pants",
    "art": [
      "Orange slushie",
      "AAAAAH!",
      "Googly-eyed Jellyfish"
    ],
    "ability": "{TK}{TK} — {T}: Add one mana of any color.\n{TK}{TK}{TK} — Whenever this creature attacks, if it's not a Brushwagg, it gets +X/+0 until end of turn, where X is the number of supertypes, card types, and subtypes it has.",
    "stats": "{TK}{TK} — 5/1\n{TK}{TK}{TK}{TK} — 4/8",
    "imageName": "38_Unique_Charmed_Pants.jpg",
    "id": 38
  },
  {
    "name": "Unhinged Beast Hunt",
    "art": [
      "VROOM!",
      "Spaceship",
      "Piano"
    ],
    "ability": "{TK}{TK} — {T}: You gain 1 life.\n{TK}{TK}{TK}{TK} — Whenever this creature attacks, tap each creature an opponent controls with the same power and/or same toughness as this creature.",
    "stats": "{TK}{TK} — 4/1\n{TK}{TK}{TK} — 2/6",
    "imageName": "39_Unhinged_Beast_Hunt.jpg",
    "id": 39
  },
  {
    "name": "Wild Ogre Bupkis",
    "art": [
      "Flying rocket ship",
      "Oops...",
      "Anvil"
    ],
    "ability": "{TK}{TK} — Whenever this creature attacks, put a +1/+1 counter on it.\n{TK}{TK}{TK} — Metalcraft — This permanent has protection from noncreature permanents as long as you control three or more artifacts.",
    "stats": "{TK}{TK} — 5/1\n{TK}{TK}{TK}{TK} — 7/4",
    "imageName": "40_Wild_Ogre_Bupkis.jpg",
    "id": 40
  },
  {
    "name": "Notorious Sliver War",
    "art": [
      "CRASH!",
      "Flaming circus ring",
      "Cheeseburger"
    ],
    "ability": "{TK}{TK} — {5}: Creatures you control get +1/+1 until end of turn.\n{TK}{TK}{TK} — Protection from creatures with two or more creature types",
    "stats": "{TK}{TK} — 3/3\n{TK}{TK}{TK}{TK}{TK} — 9/6",
    "imageName": "41_Notorious_Sliver_War.jpg",
    "id": 41
  },
  {
    "name": "Weird Angel Flame",
    "art": [
      "Raygun",
      "Rubber duck",
      "HELP!"
    ],
    "ability": "{TK}{TK} — Heroic — Whenever you cast a spell that targets this permanent, put two +1/+1 counters on it.\n{TK}{TK}{TK} — Protection from even mana values",
    "stats": "{TK}{TK} — 2/3\n{TK}{TK}{TK}{TK}{TK} — 7/8",
    "imageName": "42_Weird_Angel_Flame.jpg",
    "id": 42
  },
  {
    "name": "Vampire Champion Fury",
    "art": [
      "Time gun",
      "SURPRISE!",
      "Thopter"
    ],
    "ability": "{TK}{TK} — Hellbent — This creature gets +3/+3 as long as you have no cards in hand.\n{TK}{TK}{TK}{TK} — {2}, Sacrifice this creature: It deals X damage divided as you choose among any number of target creatures, where X is its power.",
    "stats": "{TK}{TK} — 1/5\n{TK}{TK}{TK} — 6/3",
    "imageName": "43_Vampire_Champion_Fury.jpg",
    "id": 43
  },
  {
    "name": "Trained Blessed Mind",
    "art": [
      "ZAP!",
      "Red clown nose",
      "Nissa's wooden staff"
    ],
    "ability": "{TK}{TK} — {T}: Exile target card from a graveyard.\n{TK}{TK}{TK} — Threshold — As long as seven or more cards are in your graveyard, this creature gets +4/+0 and has trample.",
    "stats": "{TK}{TK} — 4/2\n{TK}{TK}{TK}{TK}{TK} — 6/9",
    "imageName": "44_Trained_Blessed_Mind.jpg",
    "id": 44
  },
  {
    "name": "Unglued Pea-Brained Dinosaur",
    "art": [
      "Bowling ball",
      "Vampire fangs",
      "Danger! Sign"
    ],
    "ability": "{TK}{TK} — {T}: Add {2}. Spend this mana only to cast creature spells.\n{TK}{TK}{TK}{TK} — At the beginning of combat on your turn, target noncreature artifact you control becomes a 4/4 artifact creature with flying until end of turn.",
    "stats": "{TK}{TK} — 2/4\n{TK}{TK}{TK}{TK}{TK} — 8/6",
    "imageName": "45_Unglued_Pea-Brained_Dinosaur.jpg",
    "id": 45
  },
  {
    "name": "Elemental Time Flamingo",
    "art": [
      "Sunglasses",
      "Brain",
      "Presenting..."
    ],
    "ability": "{TK}{TK} — Exile this permanent: You may cast target nonland card from your graveyard this turn.\n{TK}{TK}{TK}{TK} — Whenever a creature you control dies, each opponent loses 1 life and you gain 1 life.",
    "stats": "{TK}{TK} — 1/5\n{TK}{TK}{TK} — 5/4",
    "imageName": "46_Elemental_Time_Flamingo.jpg",
    "id": 46
  },
  {
    "name": "Unstable Robot Dragon",
    "art": [
      "Mini-golf club",
      "Googly-eyed glasses",
      "BRAAAINS..."
    ],
    "ability": "{TK}{TK} — {1}: Switch this creature's power and toughness until end of turn.\n{TK}{TK}{TK}{TK} — Whenever this creature attacks, it gets +5/+5 until end of turn.",
    "stats": "{TK}{TK} — 3/2\n{TK}{TK}{TK} — 2/7",
    "imageName": "47_Unstable_Robot_Dragon.jpg",
    "id": 47
  },
  {
    "name": "Werewolf Lightning Mage",
    "art": [
      "Holophone",
      "Frog plushie",
      "Pink Teddy Bear"
    ],
    "ability": "{TK}{TK} — Landfall — Whenever a land enters the battlefield under your control, put a +1/+1 counter on this permanent.\n{TK}{TK}{TK}{TK} — Whenever a creature blocks this creature, that creature gets -4/-4 until end of turn.",
    "stats": "{TK}{TK} — 4/1\n{TK}{TK}{TK} — 3/5",
    "imageName": "48_Werewolf_Lightning_Mage.jpg",
    "id": 48
  }
];

export default stickerData;