import React from 'react'
import BottomCenter from './components/BottomCenter'
import BottomLeft from './components/BottomLeft'
import BottomRight from './components/BottomRight'
import Footer from './components/Footer'
import Header from './components/Header'
import MiddleCenter from './components/MiddleCenter'
import MiddleLeft from './components/MiddleLeft'
import MiddleRight from './components/MiddleRight'
import TopCenter from './components/TopCenter'
import TopLeft from './components/TopLeft'
import TopRight from './components/TopRight'

function Grid() {
    return (
<div class="flex flex-wrap overflow-hidden text-white text-center font-bold">

<div class="w-full overflow-hidden border-white xl:w-full xl:h-16">
<Header />
</div>

<div class="w-full overflow-hidden border-white xl:w-1/3 xl:h-80">
<TopLeft />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-1/3 xl:h-80">
<TopCenter />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-1/3 xl:h-80">
<TopRight />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-1/3 xl:h-80">
<MiddleLeft />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-1/3 xl:h-80">
<MiddleCenter />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-1/3 xl:h-80">
<MiddleRight />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-1/3 xl:h-80">
<BottomLeft />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-1/3 xl:h-80">
<BottomCenter />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-1/3 xl:h-80">
<BottomRight />
</div>

<div class="w-full overflow-hidden border-2 border-white xl:w-full xl:h-14">
<Footer />
</div>

</div>
    )
}

export default Grid
