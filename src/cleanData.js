export const cleanData = (data) => {
    let scrubbedData = []
    data.forEach(episode => {
        let episodeData = {}

        let date = episode.airDate
        date = date.slice(0, 10).split("-")
        date = date[1] + "/" + date[2] + "/" + date[0]

        episodeData.airDate = date
        episodeData.description = episode.description
        episodeData.episodeNum = episode.episode
        episodeData.id = episode.id
        episodeData.key = episode.id
        episodeData.myRating = 0
        episodeData.name = episode.name
        episodeData.popularityRating = episode.rating
        episodeData.season = episode.season
        episodeData.img = episode.thumbnailUrl

        scrubbedData.push(episodeData)
    })
    return scrubbedData
}