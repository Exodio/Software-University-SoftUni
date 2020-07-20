function gramophonePlateRotation(bandName, album, songTitle) {

    let songDurationInSec = (album.length * bandName.length) * songTitle.length / 2;
    let plateRotationSum = songDurationInSec / 2.5;

    console.log(`The plate was rotated ${Math.ceil(plateRotationSum)} times.`)
}
gramophonePlateRotation('Black Sabbath', 'Paranoid', 'War Pigs');