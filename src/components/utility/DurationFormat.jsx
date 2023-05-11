
const DurationFormat = (duration) => {
    const minutes = Math.floor(duration / (1000 * 60) % 60);
    const hours = Math.floor(duration / (1000 * 60 * 60) % 24);
    return {
        minutes,
        hours,
    }
}

export default DurationFormat