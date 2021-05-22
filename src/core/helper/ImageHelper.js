import React from "react";

const ImageHelper = ({
    src = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    alt = "Photo",
}) => {
    return (
        <div>
            <div className="rounded border border-success p-2">
                <img
                    src={src}
                    alt={alt}
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    className="mb-3 rounded"
                />
            </div>
        </div>
    );
};

export default ImageHelper;
