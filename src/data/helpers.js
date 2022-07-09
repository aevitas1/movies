// Convert time to hours and minutes
export const calcTime = time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formatter.format(money);
};

// Shorten the release date string
export const releaseDate = date => {
    return date.substring(0, 4);
}

// Round up movie score
export const movieScore = score => {
    const newScore = score.toFixed(1);
    return `${newScore}`;
}

// Convert US date to EU date
export const convertDate = oldDate => {
    const dates = oldDate.split('');
    const year = dates[0] + dates[1] + dates[2] + dates[3];
    const month = dates[5] + dates[6];
    const day = dates[8] + dates[9];
    return day + '-' + month + '-' + year;
}

// Actor gender
export const gender = genderType => {
    switch(genderType) {
        case 0:
            return 'Not specified'
        ;break;
        case 1:
            return 'Female'
        ;break;
        case 2:
            return 'Male'
        ;break;
        case 3:
            return 'Non-binair'
        ;break;
        default: return 'Not specified';
    }
}

// Filter duplicate movies

export const filterMovies = (movies, addition, newMovies) => {
    for (let movie of addition) {
        let duplicateIndex = movies.findIndex(old => old.id === movie.id)
        if (duplicateIndex < 0) {
            newMovies.push(movie);
        }
    }
}