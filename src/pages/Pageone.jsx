import './components/css/carusel.css'


function PageOne() {
    return (

        <>
            <div>
                <h2>Ultimnas Paginas Agregadas</h2>
            </div>

            <div class="carousel bg-gray-900">
                <div class="glide">
                    <div id="default-carousel" class="relative w-full" data-carousel="slide">
                        <div class="relative h-40 md:h-64 overflow-hidden rounded-lg">
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                                <h3>Titulo</h3>
                                <p>Descricion corta</p>
                            </div>
                        </div>
                        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <p>A</p>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <p>N</p>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageOne