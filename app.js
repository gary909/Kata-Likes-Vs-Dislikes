// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    return Like || Dislike || Nothing;
}

console.log(likeOrDislike([Dislike])); // Dislike
console.log(likeOrDislike([Like, Like])); // Nothing
console.log(likeOrDislike([Dislike, Like])); // Like
console.log(likeOrDislike([Like, Dislike, Dislike])); // Nothing