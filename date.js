exports.getDate = function(){
    const today = new Date()
    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    const fullDay = today.toLocaleDateString("en-US", option)
    return fullDay
}