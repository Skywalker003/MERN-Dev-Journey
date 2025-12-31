import React from "react";


const useFetch = (url) => {

    const [courseList, setCourseList] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
    fetch(url)
        .then((res) => {
        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        return res.json();
        })
        .then((json) => {
        setCourseList(json);
        setLoading(false);
        })
        .catch((err) => {
        setError(err.message);
        setLoading(false);
        });
    }, [url]);

    function hideCourse(id) {
    setCourseList((prev) => prev.filter((course) => course.id !== id));
  }

    return { courseList, loading, error, hideCourse };
    };

export default useFetch;
