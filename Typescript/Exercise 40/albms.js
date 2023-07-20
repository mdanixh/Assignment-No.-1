function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Jagjit Sing", "Close to my Heart");
var album2 = make_album("Strings", "Dhani");
var album3 = make_album("Ali Sethi", "Chandni Raat", 12);
console.log(album1);
console.log(album2);
console.log(album3);
