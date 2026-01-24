
const ProductsHero = () => {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-gray-950">
            <div
                className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnUvQXSGAFIy8FMLbRUqcpcV8UoqGB5YYUBLK1KDgnGHOLxWDWvGk_80dq6X92iMfFJImlvjx6u_7FgHyQhKHcXs7mmW4Dmdr2pbIqLz-7citwW4HgB24EPB3qWnOYcBLrPFaov4Jb56mv4v-7heEgzcDl7JEmgXcPdctqjscpESmXV61LNSt9gr7wTOnxfOuEdkZf8g9BiAU6flGN3xLuDLAcdmwUrtD9NrzGUhOeX9jxvNlnFi3phHgdQO1Xv3ktRX-lcTVnUCFC')" }}
                aria-label="Industrial urban lighting infrastructure at dusk"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent z-10"></div>
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
                    Our Infrastructure Solutions
                </h1>
                <p className="text-gray-200 text-base md:text-lg font-normal max-w-2xl mx-auto">
                    Engineering the Future of Urban Lighting with high-quality manufacturing standards for smart cities and highways.
                </p>
            </div>
        </section>
    );
};

export default ProductsHero;
