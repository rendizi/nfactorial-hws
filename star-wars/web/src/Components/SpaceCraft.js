import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faRuler, 
    faTachometerAlt, 
    faIndustry, 
    faEye, 
    faFilm, 
    faStar, 
    faSpaceShuttle,
    faUser ,
    faShuttleSpace,
    faRocket
} from '@fortawesome/free-solid-svg-icons';

const SpaceCraft = ({ starship }) => {
    const [films, setFilms] = useState([]);
    const [pilots, setPilots] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleModalOpen = () => {
        const modal = document.getElementById(starship._id);
        modal.showModal()
        if (modal) {
            modal.showModal(); 
        }
    };

    return (
        <div className="collapse bg-slate-950 text-slate-50 border border-solid border-transparent hover:border-orange-500">
                    
                <>
                    <input type="checkbox" /> 
                    <div className="text-xl font-medium flex flex-col items-center pb-10">
                        <FontAwesomeIcon icon={faRocket} />
                        <h2 className="text-xl font-semibold mb-2">{starship.name}</h2>
                    

                    </div>


                    <dialog id={starship._id} className="modal">
                    {starship === null ? (
                        <div className="modal-box p-4 rounded-lg shadow-md flex justify-center items-center">
                            <span className="loading loading-dots loading-sm"></span>
                        </div>
                    ) : (
                        <div className="modal-box p-4 rounded-lg shadow-md flex flex-col items-center">
                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faStar} className="mr-3" />Length:</span> {starship.length}</p>
                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faStar} className="mr-3" />Crew:</span> {starship.crew}</p>
                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faStar} className="mr-3" />Passangers:</span> {starship.passengers}</p>
                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faStar} className="mr-3" />Hyperdrive Rating:</span> {starship.hyperdrive_rating}</p>
                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faSpaceShuttle} className="mr-3" />Starship Class:</span> {starship.starship_class}</p>
                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />Max Atmosphering Speed:</span> {starship.max_atmosphering_speed}</p>
                            <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faRuler} className="mr-2" />Length:</span> {starship.length}</p>
                            <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faIndustry} className="mr-2" />Manufacturer:</span> {starship.manufacturer}</p>
                            <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faEye} className="mr-2" />Cargo Capacity:</span> {starship.cargo_capacity}</p>
                        </div>
                                            )}
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </>
                <button className="btn" onClick={handleModalOpen}>View more</button>

            
        </div>
    );
};

export default SpaceCraft;
