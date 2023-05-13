import { useState } from 'react';
import { GoChevronRight, GoChevronLeft } from "react-icons/go"

export const CourseFilterList = ({ courseFilters }) => {
    const [scrollOffset, setScrollOffset] = useState(0);

    const handleScrollRight = () => {
        setScrollOffset((offset) => offset + 1);
    };

    const handleScrollLeft = () => {
        setScrollOffset((offset) => offset - 1);
    };

    const visibleFilters = courseFilters.slice(
        scrollOffset,
        scrollOffset +
        (courseFilters[scrollOffset]?.filter_name?.length > 9 &&
            courseFilters[scrollOffset]?.filter_name?.length <= 16
            ? 1
            : courseFilters[scrollOffset]?.filter_name?.length <= 9
                ? 3
                : courseFilters[courseFilters.length - 1]?.filter_name?.length < 9
                    ? 2
                    : 1)
    );

    return (
        <div className="course_list_filter ml-2 py-1 drop-shadow-lg mb-2">
            {visibleFilters.map(({ id, filter_name }) => (
                <div key={id} className="filter_card px-3">
                    {filter_name}
                </div>
            ))}
            {scrollOffset > 0 && (
                <div className="scroll_button left" onClick={handleScrollLeft}>
                    <GoChevronLeft size={20} />
                </div>
            )}
            {scrollOffset +
                (courseFilters[scrollOffset]?.filter_name?.length > 9 &&
                    courseFilters[scrollOffset]?.filter_name?.length <= 16
                    ? 1
                    : courseFilters[scrollOffset]?.filter_name?.length <= 9
                        ? 3
                        : courseFilters[courseFilters.length - 1]?.filter_name?.length < 9
                            ? 2
                            : 1) <
                courseFilters.length && (
                    <div className="scroll_button right" onClick={handleScrollRight}>
                        <GoChevronRight size={20} />
                    </div>
                )}
        </div>
    );
};
