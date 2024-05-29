import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faRuler, 
    faBalanceScale, 
    faPalette, 
    faEye, 
    faBirthdayCake, 
    faVenusMars, 
    faFilm, 
    faCar, 
    faSpaceShuttle, 
    faGenderless,
    faPerson
} from '@fortawesome/free-solid-svg-icons';

export const Character = (props) => {
    const { person } = props;
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);

    const handleModalOpen = () => {
        const modal = document.getElementById(person._id);
        modal.showModal()
        if (modal) {
            modal.showModal(); 
        }
    };    

    return (
<div className="collapse bg-slate-950 border border-solid border-transparent hover:border-orange-500">
            <div className='collapse text-slate-50 hover:border-orange-500'>
                <input type="checkbox" /> 
                <div className="text-xl font-medium flex flex-col items-center justify-center pb-10 px-4 hover:border-orange-500">
                    <h2 className="text-xl font-semibold mb-2">{person.name}</h2>
                </div>
                    
                <dialog id={person._id} className="modal">
                    <div className="modal-box p-4 rounded-lg shadow-md flex flex-col items-center">
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <span className="loading loading-dots loading-sm"></span>
                            </div>
                        ) : (
                            <>
                                {props && (
                                    <>
                                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faRuler} className="mr-2" />Height:</span> {props.person.height}</p>
                                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faBalanceScale} className="mr-2" />Mass:</span> {props.person.mass}</p>
                                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faGenderless} className="mr-2" />Gender:</span> {props.person.gender}</p>



                                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faPalette} className="mr-2" />Hair Color:</span> {props.person.hair_color}</p>
                                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faPalette} className="mr-2" />Skin Color:</span> {props.person.skin_color}</p>
                                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faEye} className="mr-2" />Eye Color:</span> {props.person.eye_color}</p>
                                        <p className="text-gray-900 dark:text-slate-50"><span className="font-semibold text-gray-900 dark:text-slate-50"><FontAwesomeIcon icon={faBirthdayCake} className="mr-2" />Birth Year:</span> {props.person.birth_year}</p>
                                        <div className="mt-4 text-gray-900 dark:text-slate-50">
                                            <span className="font-semibold"><FontAwesomeIcon icon={faFilm} className="mr-2" />Home:</span>
                                            <ul className="list-disc pl-4">
                                                <li>{props.person.homeworld}</li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
            <button className="btn self-end mb-0" onClick={handleModalOpen}>View more</button>
        </div>
    );
    
}

export default Character;
