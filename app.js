// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    let lastElement = buttons[buttons.length - 1]; // last element
    let secLastElement = buttons[buttons.length - 2]; // second to last element
    let thirdLastElement = buttons[buttons.length - 3]; // third to last element
    if (buttons.length >= 3) {
        if (lastElement == 'Dislike' && secLastElement == 'Dislike' && thirdLastElement == 'Dislike') {
            return 'Dislike';
        }
        else if (lastElement == secLastElement && lastElement != 'Dislike' && thirdLastElement != 'Dislike' || lastElement != secLastElement) {
            return lastElement;
        } else if (lastElement == 'Dislike' && secLastElement == 'Dislike' || thirdLastElement == 'Dislike' && lastElement == secLastElement) {
            return 'Nothing';
        }
    } else if (buttons.length === 0 || lastElement == secLastElement) {
        return 'Nothing';
    } else if (lastElement != secLastElement || buttons.length == 1) {
        return lastElement;
    }
}

console.log('********************');
console.log(likeOrDislike(['Dislike'])); // Dislike
console.log(likeOrDislike(['Like', 'Like'])); // Nothing
console.log(likeOrDislike(['Dislike', 'Like'])); // Like
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])); // Nothing
console.log('********************');
console.log(likeOrDislike(['Dislike', 'Dislike'])); // Nothing
console.log(likeOrDislike(['Like', 'Like', 'Like'])); // Like
console.log(likeOrDislike(['Like', 'Dislike'])); // Dislike
console.log(likeOrDislike(['Dislike', 'Like', 'Dislike'])); // Dislike
console.log(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike'])); // Dislike
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])); // Nothing
console.log(likeOrDislike([])); // Nothing
console.log('********************');
console.log(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like'])); // Nothing
console.log('********************');
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike', 'Dislike', 'Dislike'])); // Dislike