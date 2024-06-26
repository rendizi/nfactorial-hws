import React from 'react';
import { Navbar } from '../Components/Navbar';
import SpaceCraft from '../Components/SpaceCraft';
import { OrbitSpace } from 'orbit-space';

export const SpaceCrafts = () => {
    const [name, setName] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState(false);
    const [starCrafts, setStarCrafts] = React.useState([]);

    //

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        setSearch(true);
        fetch(`http://127.0.0.1:4000/starships?name=${name}&pageSize=12`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setStarCrafts(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    React.useEffect(() => {
        async function fetchStarCrafts() {
            try {
                const response = await fetch(`http://127.0.0.1:4000/starships?page=${page}&pageSize=12`);
                const data = await response.json();
                setStarCrafts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchStarCrafts();
    }, [page]);

    return (
        <>
            <Navbar />
            <main>
                <section className="max-h-0">
                    <OrbitSpace className="margin-b-0 hero-overlay"></OrbitSpace>
                </section>

                <div className="hero-overlay"></div>
                <div className="flex justify-center items-center h-3/5 hero-overlay">
                    <br></br>
                    <div className="lg:w-1/5 sm:w-1 mt-3">
                        <form className="mx-auto" onSubmit={handleSubmit}>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Starship By Name..."
                                    value={name}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className=" text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                        <br />
                    </div>
                </div>
                <div className="hero-overlay">
                </div>
                <div className="flex justify-center items-center hero-overlay">
                    <div className="container mx-auto px-4 mt-100vh h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {starCrafts.map(starship => (
                                <SpaceCraft key={starship._id} starship={starship} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='hero-overlay flex items-center justify-center pt-5 pb-5'>
                    {!search && <div className="join">
                        <button className="join-item btn" onClick={() => setPage(prev => prev > 1 ? prev - 1 : prev)}>«</button>
                        <button className="join-item btn">Page {page}</button>
                        <button className="join-item btn" onClick={() => setPage(prev => prev + 1)}>»</button>
                    </div>}
                </div>
            </main>
        </>
    );
};

export default SpaceCrafts;
