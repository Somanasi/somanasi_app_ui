import { useState, useEffect } from 'react';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export const CourseFilterList = ({ courseFilters }) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [visibleFilters, setVisibleFilters] = useState(courseFilters.slice(scrollOffset, 3));
  const [activeFilterId, setActiveFilterId] = useState(courseFilters[0].id);

  useEffect(() => {
    const filteredCourseFilters = courseFilters.filter((filter) => filter.filter_name.length >= 9 );
    const isFiltered = filteredCourseFilters.length >= 2 && visibleFilters.length === 3;

    setVisibleFilters((vFilters) => {
      if (isFiltered) {
        return vFilters = filteredCourseFilters.slice(filteredCourseFilters.length - 2, filteredCourseFilters.length);
      } else {
        return vFilters = courseFilters.slice(scrollOffset, scrollOffset +
          (visibleFilters[scrollOffset]?.filter_name?.length > 9 &&
            visibleFilters[scrollOffset]?.filter_name?.length <= 16
            ? 2
            : visibleFilters[scrollOffset]?.filter_name?.length <= 9
              ? 3
              : visibleFilters[courseFilters.length - 1]?.filter_name?.length < 9
                ? 3
                : 1));
      }
    });
  }, [scrollOffset]);


  const handleScrollRight = () => {
    setScrollOffset((offset) => offset + 1);
  };

  const handleScrollLeft = () => {
    setScrollOffset((offset) => offset - 1);
  };

  return (
    <div className={visibleFilters.length === 1 ? "course_list_filter_one_item course_list_filter ml-2 py-1 drop-shadow-lg mb-2" : "course_list_filter ml-2 py-1 drop-shadow-lg mb-2"}>
      {visibleFilters.map(({ id, filter_name }) => (
        <div key={id} className={`filter_card px-6 drop-shadow-md ${id === activeFilterId ? "active" : ""}`} onClick={() => setActiveFilterId(id)}>
          {filter_name}
        </div>
      ))}
      {scrollOffset > 0 && (
        <div className="scroll_button left" onClick={handleScrollLeft}>
          <GoChevronLeft size={20} />
        </div>
      )}
      {scrollOffset +
        (visibleFilters[scrollOffset]?.filter_name?.length > 9 &&
          visibleFilters[scrollOffset]?.filter_name?.length <= 16
          ? 2
          : visibleFilters[scrollOffset]?.filter_name?.length <= 9
            ? 3
            : visibleFilters[courseFilters.length - 1]?.filter_name?.length < 9
              ? 3
              : 1) <
        courseFilters.length && (
          <div className="scroll_button right pr-2 " onClick={handleScrollRight}>
            <GoChevronRight size={20} />
          </div>
        )}
    </div>
  );
};
