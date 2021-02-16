function showAbout(cnt){
    const reserve = document.createElement(`p`)
    reserve.innerHTML = `At the Restaurant you can meet and dine with a fascinating cross-section of the entire population of space and time. Guests can arrive for any sitting they like without prior reservation because they can book retrospectively, as it were, when they return to your own time. All you have to do is deposit one penny in a savings account in your own era, and when you arrive at the End of Time the operation of compound interest means that the fabulous cost of your meal has been paid for.`
    cnt.appendChild(reserve)
    console.log(`fucking work`)
}

export {showAbout}