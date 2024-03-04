window.onSpotifyIframeApiReady = (IFrameAPI) => {
const xd = document.getElementById('container')
const callback = (EmbedController) => {
    document.querySelectorAll('.episode').forEach(
      episode => {
    
        episode.addEventListener('click', () => {
    
            if(document.getElementById("playlist").value.length > 0) {
                const id = document.getElementById("playlist").value
                console.log(id)
                document.getElementById("custom").dataset.spotifyId = "spotify:playlist:" + id
            }
            
            EmbedController.loadUri(episode.dataset.spotifyId)
        });
      })
  };
const apperance = {
    width: '50%',
    height: '352',
    uri: 'spotify:playlist:2lusnaAIIckVJJFKM2upOe'
}
IFrameAPI.createController(xd, apperance, callback);
}

const songs_array = [
    "3JAsFCtpWkle2kn07De748",
    "4kFsuOpk6CDW4Xlk6bjpbn",
    "1Ic75bJnvNE3zpE7qZg7aA",
    "53X0qHnEpAkRwXtX1emwGS",
    "75PXINUJqSDqEbLj3p9tv0",
    "5gE5M6mWYtljC8JTfqV3cD"
]