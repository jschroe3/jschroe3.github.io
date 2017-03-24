$( document ).ready( () => {
  $( "#submit" ).on( "click", () => {
    const searchTerms = $( "#search" ).val();

    $.ajax( {
      url: `https://itunes.apple.com/search?term=${searchTerms}`,
      dataType: "JSONP",
      type: "GET",
      success: ( data ) => {
        const songs = data.results.map( ( song ) =>
           `<article class="col-sm-3"><center><img class="img-thumbnail" src="${song.artworkUrl100}"><br><h5>${song.trackName}</h5><br><audio controls><source src="${song.previewUrl}" type="audio/mpeg"></audio></center></article>`
         ).join( "" );
        $( "#results" ).html( songs );
      },
    } );
  } );
} );
