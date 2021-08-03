import React from 'react';
import Loader from "react-loader-spinner";

const Loading = ({ loading }) => {
    return (
        <div>
            <Loader
             id="loader"
             visible={loading}
             type="Oval"
             color="rgb(141, 37, 37)"
             height={90}
             width={90}
            />
        </div>
    )
}

export default Loading
