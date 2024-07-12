
//TASK #40
  //DEFINE THE MAKE_ALBUM FUNCTION
function make_album(artist_name:string, album_title:string, tracks?:number){
      let album : {artist :string, title : string, tracks?:number}={
        artist:artist_name,
        title: album_title,

      };
      if(tracks !== undefined){
        album.tracks = tracks;

      }
        return album;
}

//CALLING THREE FUNCTIONS AND CREATING 3 VARIABLES WITH DIFFERENT VALUES
  let album1= make_album("Komal", "Album title 1");

  let album2 = make_album("Muskan", "Album title 2");

 // CALLING A MAKE_ALBUM FUNCTION WITH THIRD PARAMETER
  let album3=(make_album("Laiba", "Album title 3" , 10));
  // PRINT VALUES OF OUR OBJECT CREATED MY FUNCTION
  console.log(album1);
  console.log(album2);
  console.log(album3);