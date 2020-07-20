function solve(arrInput) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = arrInput.shift();
    let songsData = [];

    for (let i = 0; i < n; i++) {
        let currentSong = arrInput.shift();
        let [typeList, name, time] = currentSong.split('_');

        let song = new Song(typeList, name, time);
        songsData.push(song);
    }

    let songRequest = arrInput.shift();

    for (let eachSong of songsData) {

        if (eachSong.typeList === songRequest || songRequest == 'all') {
            console.log(eachSong.name);
        }
    }

}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);