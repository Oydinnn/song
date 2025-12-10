class Song{
  constructor(title, artist, duration){
    this.title = title,
    this.artist = artist,
    this.duration = duration
  }
  getInfo(){
    return `"${this.title}" by ${this.artist} ${this.duration} min`
  }
}

const mp3_1 = new Song("Shape of You", "Ed Sheeran", 4)
const mp3_2 = new Song("S", "Ed Sheeran", 43)
const mp3_3 = new Song("You", "Ed Sheeran", 14)


class Playlist{
  constructor(title){
    this.title = title,
    this.songs = []
  }

  addSong(song){
    this.songs.push(song)
  }

  listSongs(){
    return this.songs
  }

  getTotalDuration(){
    return this.songs.reduce((sum, s) => sum + s.duration, 0)
  }

  remove(title){
    return this.songs.filter((i) => i.title!=title)
  }

  findSong(title){
    return this.songs.find(s => s.title === title)
  }
}

const song = new Playlist()

song.addSong(mp3_1)
song.addSong(mp3_2)
song.addSong(mp3_3)

// console.log(song.listSongs());
// console.log(song.getTotalDuration());
// console.log(song.remove('S'));
// console.log(song.findSong('S'));

console.log(mp3_1.getInfo());


