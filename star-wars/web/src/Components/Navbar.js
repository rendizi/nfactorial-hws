import React, { useState } from "react";

export const Navbar = () => {
    const [type, setType] = useState(null);
    const [id, setId] = useState("");
    const [homeworld, setHomeworld] = useState("");
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleHomeworldChange = (event) => {
        setHomeworld(event.target.value);
    };

    const fetchFromSwapi = async () => {
        try {
            let end 
            if (type === "characters"){
                end = "people"
            }else{
                end = type 
            }
            const response = await fetch(`https://swapi.tech/api/${end}/${id}`);
            const data = await response.json();
            if (response.ok){
                setError(null)
            await postDataToServer(data.result);}
            else{
                setError(data.message)
                setSuccess(null)
            }
        } catch (error) {
            setSuccess(null)
            setError(error)
        }
    };

    const postDataToServer = async (data) => {
        try {
            data.properties.homeworld = homeworld
            const response = await fetch(`http://localhost:4000/${type}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                setError(null)
                setSuccess("Successfully added")
                console.log(`Data posted successfully to localhost:4000/${type}`);
                setId("");
                setHomeworld("");
            } else {
                setSuccess(null)
                setError(data.message)
            }
        } catch (error) {
            setSuccess(null)
            setError(error)
            console.error("Error posting data to server:", error);
        }
    };

    return (
        <>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="/characters">Characters</a></li>
                    <li><a href="/starship">SpaceCrafts</a></li>
                    <li><a href="/planets">Planets</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/">Star Wars</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a href="/characters">Characters</a></li>
                <li><a href="/starship">Starship</a></li>
                <li><a href="/planets">Planets</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn" href="#" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add new</a>
            </div>
            </div>
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <div>
                    <h1>Add new</h1>
                    <div className="mt-4 justify-center items-center flex flex-col"> 
                        <select
                            className="select select-accent w-full max-w-xs"
                            onChange={handleTypeChange}
                        >
                            <option disabled selected>Type?</option>
                            <option value="characters">Character</option>
                            <option value="planets">Planet</option>
                            <option value="starships">Starship</option>
                        </select>
                        <input type="number" placeholder="swapi.tech's id" value={id} onChange={handleIdChange} className="input input-bordered input-accent w-full max-w-xs mt-5" />
                        {type === "characters" && (
                            <input type="text" placeholder="homeworld" value={homeworld} onChange={handleHomeworldChange} className="input input-bordered input-accent w-full max-w-xs mt-5" />
                        )}
                        {error && <p className="text-warning">{error}</p>}
                        {success && <p className="text-success">{success}</p>}
                        <button className="btn btn-accent mt-5" onClick={fetchFromSwapi}>Submit</button> 
                    </div>

                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Cancel</button>
                    </form>
                </div>
            </div>
            </dialog>
        </>
    );
};
