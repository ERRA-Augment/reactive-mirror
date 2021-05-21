import React from 'react'
import BottomCenter from './components/BottomCenter'
import BottomLeft from './components/BottomLeft'
import BottomRight from './components/BottomRight'
// import Footer from './components/Footer'
import Header from './components/Header'
import MiddleCenter from './components/MiddleCenter'
import MiddleLeft from './components/MiddleLeft'
import MiddleRight from './components/MiddleRight'
import TopCenter from './components/TopCenter'
import TopLeft from './components/TopLeft'
import TopRight from './components/TopRight'

function Grid() {
    return (
<div className="flex flex-wrap overflow-hidden font-bold text-white">

<div className="w-full overflow-hidden text-center border-white xl:w-full h-14">
<Header />
</div>

<div className="w-full pr-20 overflow-hidden text-center border-white xl:w-1/3">
<TopLeft />
</div>

<div className="w-full overflow-hidden text-center border-2 border-white xl:w-1/3 xl:h-80">
<TopCenter />
</div>

<div className="w-full overflow-hidden text-center border-2 border-white xl:w-1/3">
<TopRight />
</div>

<div className="w-full overflow-hidden text-center border-2 border-white xl:w-1/3">
<MiddleLeft />
</div>

<div className="w-full overflow-hidden text-center border-2 border-white xl:w-1/3 xl:h-96">
<MiddleCenter />
</div>

<div className="w-full overflow-hidden text-center border-2 border-white xl:w-1/3">
<MiddleRight />
</div>

<div className="w-full overflow-hidden text-center border-2 border-white xl:w-1/3">
<BottomLeft />
</div>

<div className="w-full overflow-hidden text-center border-2 border-white xl:w-1/3 xl:h-80">
<BottomCenter />
</div>

<div className="w-full overflow-hidden text-center border-2 border-white xl:w-1/3">
<BottomRight />
</div>

{/* <div className="w-full overflow-hidden border-2 border-white xl:w-full xl:h-14">
<Footer />
</div> */}

</div>
    )
}

export default Grid
