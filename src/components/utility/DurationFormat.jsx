
const DurationFormat = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return {
        minutes,
        hours,
    }
}

export default DurationFormat