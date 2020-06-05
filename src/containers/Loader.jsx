/* eslint-disable react/prop-types */
import React from "react";

const Loader = (props) => (<div >

            {
              props.loading
                ? <p>Loading...</p>
                : <p>Loaded</p>
            }


        </div>);
export default Loader;
