const MoveSlides = (initialPosition, stateIndex, arr, arrayIndex) => {
    let position = initialPosition;
    if (arrayIndex === stateIndex) {
        return position = 'activeSlide';
    }
    else if (
        (arrayIndex === stateIndex - 1) ||
        (( stateIndex === 0 ) && ( arrayIndex === arrayIndex.length -1 ))
    ) {
       return position = 'lastSlide';
    }
    else {
        return position;
    }
}

export default MoveSlides