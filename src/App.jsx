import React from "react";

import {Route, Routes, useNavigate} from "react-router-dom";

const App = () => {
    return (
        <div className="relative flex min-h-screen flex-row bg-[#13131a] p-4">
            <div className="relative mr-10 hidden sm:flex">
                {/* Sidebar */}
            </div>

            <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
                {/* navbar */}
                <Routes>
                    <Route path="/" element={ <div>
                        home page
                    </div> }/>
                </Routes>
            </div>
        </div>
    )
}

export default App;