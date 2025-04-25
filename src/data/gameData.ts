// Mock data for games
export interface Game {
  id: string;
  title: string;
  console: string;
  consoleName: string;
  genre: string;
  imageUrl: string;
}

const originalGames: Game[] = [
  // Nintendo NES Games
  {
    id: "nes-1",
    title: "Super Pixel Adventure",
    console: "nes",
    consoleName: "NES",
    genre: "Platformer",
    imageUrl: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "nes-2",
    title: "Mega Blaster Bros",
    console: "nes",
    consoleName: "NES",
    genre: "Action",
    imageUrl: "https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "nes-3",
    title: "Dungeon Raiders",
    console: "nes",
    consoleName: "NES",
    genre: "RPG",
    imageUrl: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "nes-4",
    title: "Metal Warriors",
    console: "nes",
    consoleName: "NES",
    genre: "Action",
    imageUrl: "https://images.pexels.com/photos/6498304/pexels-photo-6498304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "nes-5",
    title: "F1 Racers",
    console: "nes",
    consoleName: "NES",
    genre: "Racing",
    imageUrl: "https://images.pexels.com/photos/12168556/pexels-photo-12168556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
  // Super Nintendo Games
  {
    id: "snes-1",
    title: "Chrono Fantasy",
    console: "snes",
    consoleName: "SNES",
    genre: "RPG",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "snes-2",
    title: "Street Fighter Alpha",
    console: "snes",
    consoleName: "SNES",
    genre: "Fighting",
    imageUrl: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "snes-3",
    title: "Super Mario World 2",
    console: "snes",
    consoleName: "SNES",
    genre: "Platformer",
    imageUrl: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "snes-4",
    title: "Secret of Mana",
    console: "snes",
    consoleName: "SNES",
    genre: "Action RPG",
    imageUrl: "https://images.pexels.com/photos/2263818/pexels-photo-2263818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "snes-5",
    title: "F-Zero X",
    console: "snes",
    consoleName: "SNES",
    genre: "Racing",
    imageUrl: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
  // Sega Genesis Games
  {
    id: "genesis-1",
    title: "Sonic Adventure",
    console: "genesis",
    consoleName: "Genesis",
    genre: "Platformer",
    imageUrl: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "genesis-2",
    title: "Streets of Rage",
    console: "genesis",
    consoleName: "Genesis",
    genre: "Beat 'em up",
    imageUrl: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "genesis-3",
    title: "Golden Axe",
    console: "genesis",
    consoleName: "Genesis",
    genre: "Action",
    imageUrl: "https://images.pexels.com/photos/7915282/pexels-photo-7915282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "genesis-4",
    title: "Phantasy Star IV",
    console: "genesis",
    consoleName: "Genesis",
    genre: "RPG",
    imageUrl: "https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "genesis-5",
    title: "Gunstar Heroes",
    console: "genesis",
    consoleName: "Genesis",
    genre: "Run and Gun",
    imageUrl: "https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
  // PlayStation Games
  {
    id: "ps1-1",
    title: "Final Fantasy VII",
    console: "ps1",
    consoleName: "PlayStation",
    genre: "RPG",
    imageUrl: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "ps1-2",
    title: "Metal Gear Solid",
    console: "ps1",
    consoleName: "PlayStation",
    genre: "Stealth Action",
    imageUrl: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "ps1-3",
    title: "Crash Bandicoot",
    console: "ps1",
    consoleName: "PlayStation",
    genre: "Platformer",
    imageUrl: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "ps1-4",
    title: "Resident Evil 2",
    console: "ps1",
    consoleName: "PlayStation",
    genre: "Survival Horror",
    imageUrl: "https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "ps1-5",
    title: "Tekken 3",
    console: "ps1",
    consoleName: "PlayStation",
    genre: "Fighting",
    imageUrl: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
  // Nintendo 64 Games
  {
    id: "n64-1",
    title: "Super Mario 64",
    console: "n64",
    consoleName: "N64",
    genre: "Platformer",
    imageUrl: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "n64-2",
    title: "The Legend of Zelda: Ocarina of Time",
    console: "n64",
    consoleName: "N64",
    genre: "Action Adventure",
    imageUrl: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "n64-3",
    title: "GoldenEye 007",
    console: "n64",
    consoleName: "N64",
    genre: "FPS",
    imageUrl: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "n64-4",
    title: "Star Fox 64",
    console: "n64",
    consoleName: "N64",
    genre: "Rail Shooter",
    imageUrl: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "n64-5",
    title: "Mario Kart 64",
    console: "n64",
    consoleName: "N64",
    genre: "Racing",
    imageUrl: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Generate more games to reach 120 total
const generateMoreGames = (): Game[] => {
  const additionalGames: Game[] = [];
  const consoles = [
    { id: "nes", name: "NES" },
    { id: "snes", name: "SNES" },
    { id: "genesis", name: "Genesis" },
    { id: "ps1", name: "PlayStation" },
    { id: "n64", name: "N64" }
  ];
  
  const genres = [
    "Action", "Adventure", "RPG", "Fighting", "Platformer", 
    "Racing", "Puzzle", "Strategy", "Sports", "Shooter"
  ];
  
  const imageUrls = [
    "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  
  const gameNames = [
    "Legendary", "Epic", "Super", "Mega", "Ultra", "Hyper", "Quantum", "Stellar", "Cosmic", "Retro",
    "Fantasy", "Warrior", "Quest", "Adventure", "Saga", "Chronicles", "Legacy", "Heroes", "Knights", "Legends",
    "Racing", "Fighter", "Battle", "Puzzle", "Mystery", "Dungeon", "Castle", "Galaxy", "World", "Kingdom"
  ];
  
  for (let i = 0; i < 95; i++) {
    const console = consoles[Math.floor(Math.random() * consoles.length)];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    
    // Generate a random game name by combining two words
    const nameWord1 = gameNames[Math.floor(Math.random() * gameNames.length)];
    const nameWord2 = gameNames[Math.floor(Math.random() * gameNames.length)];
    const title = `${nameWord1} ${nameWord2} ${Math.floor(Math.random() * 5) + 1}`;
    
    additionalGames.push({
      id: `${console.id}-extra-${i}`,
      title,
      console: console.id,
      consoleName: console.name,
      genre,
      imageUrl
    });
  }
  
  return additionalGames;
};

// Combine original games with generated ones and export as gameData
export const gameData: Game[] = [...originalGames, ...generateMoreGames()];