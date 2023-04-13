const MoveSlides = (initialPosition, stateIndex, arr, arrayIndex) => {
    let position = initialPosition;
    if (arrayIndex === stateIndex) {
        position = 'activeSlide';
    };
    if (
        (arrayIndex === stateIndex - 1) ||
        (( stateIndex === 0 ) && ( arrayIndex === arrayIndex.length -1 ))
    ) {
        position = 'lastSlide';
    }
    return position;
}

export default MoveSlides