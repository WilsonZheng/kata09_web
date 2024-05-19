import React from "react";
export const Total = ({ isLoading, isError, data }) => (
    <div style={{ margin: "10px" }}>
        {isLoading ? (
            <div>Loading...</div>
        ) : isError ? (
            <div>Error fetching checkout total</div>
        ) : (
            <div>Total($): {data ? data.total : 0}</div>
        )}
    </div>
);
