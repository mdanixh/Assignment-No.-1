// Album: Write a function called make_album() that builds an Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
//Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the 
//album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call
// that includes the number of tracks on an album.
type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
          //This line defines a TypeScript type alias named Album. It represents the structure of an album object with three 
          //properties: artist, title, and tracks. The tracks property is optional (denoted by the ? symbol), which means it can be present 
          //or absent in the album object.
          
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist: artist,
      title: title
    };
          //This is a function declaration named make_album. It takes three parameters: artist (string), title (string), and tracks (optional number). 
          //The function returns an object that conforms to the Album type.
    if (tracks !== undefined) {
      album.tracks = tracks;  //If the tracks parameter is provided (not undefined), this line of code assigns the value of tracks to the tracks property of the album object.
    }
  
    return album;   //The function returns the album object after setting its properties based on the provided arguments. If tracks is not provided, the album object will not have the tracks property.
  }
  
  const album1 = make_album("Jagjit Sing", "Close to my Heart");
  const album2 = make_album("Strings", "Dhani");
  const album3 = make_album("Ali Sethi", "Chandni Raat", 12);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  
  