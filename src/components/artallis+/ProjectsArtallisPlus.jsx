// import { artallisPlus } from '@/lib/constants';
// import { useState } from 'react';
// import { Button } from '../ui/button';

// const ProjectsArtallisPlus = () => {
//     const colors = [
//         "#cc6699", "#03abe5", "#f2921a", "#bbce00", "#79ccf3", "#fccd00",
//     ];

//     const [visibleProjects, setVisibleProjects] = useState(6);

//     const getColorForIndex = (index) => {
//         return colors[index % colors.length];
//     };

//     const handleShowMore = () => {
//         setVisibleProjects((prevVisible) => prevVisible + 6);
//     };

//     const hasMoreProjects = visibleProjects < artallisPlus.length;

//     return (
//         <section className='flex-col-center gap-14 py-20'>
//             {artallisPlus.slice(0, visibleProjects).map((item, index) => (
//                 <div
//                     key={index}
//                     className={`flex-col-center gap-4 cursor-pointer w-full max-w-5xl min-h-64 p-14 rounded-lg`}
//                     style={{ backgroundColor: getColorForIndex(index) }}
//                 >
//                     <h4 className="font-barlow text-3xl text-center font-semibold text-white">{item.title}</h4>
//                     <p className="font-barlow text-md text-center font-semibold text-white">{item.description}</p>
//                 </div>
//             ))}

//             {hasMoreProjects && (
//                 <Button
//                     onClick={handleShowMore}
//                     className="rounded-full px-10 py-6 bg-artYellow-50 hover:bg-artYellow-50 hover:shadow-md text-black font-barlow font-semibold text-md transition-all ease-in-out duration-300"
//                 >
//                     Ver Mais
//                 </Button>
//             )}
//         </section>
//     );
// };

// export default ProjectsArtallisPlus;


import { artallisPlus } from '@/lib/constants';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const ProjectsArtallisPlus = () => {
    const colors = [
        "#cc6699", "#03abe5", "#f2921a", "#bbce00", "#79ccf3", "#fccd00",
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const getColorForIndex = (index) => {
        return colors[index % colors.length];
    };

    const handleItemClick = (project) => {
        setSelectedProject(project);
    };

    const handleClosePopup = () => {
        setSelectedProject(null);
    };

    return (
        <section className='flex-col-center gap-14 py-20'>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 place-items-center">
                {artallisPlus.map((item, index) => (
                    <div
                        key={index}
                        className="flex-col-center gap-4 cursor-pointer w-64 min-h-64 p-14 rounded-full"
                        style={{
                            backgroundColor: getColorForIndex(index),
                        }}
                        onClick={() => handleItemClick(item)}
                    >
                        <h4 className="font-barlow text-3xl text-center font-semibold text-white">{item.title}</h4>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black p-2.5 z-[200]">
                    <div
                        className="flex-col-center gap-6 w-full  max-w-[600px] h-auto min-h-96 sm:h-full sm:max-h-[600px] bg-white rounded-sm sm:rounded-full p-1.5 sm:p-8"
                        style={{ backgroundColor: getColorForIndex(artallisPlus.indexOf(selectedProject)) }}
                    >
                        <h4 className="text-white font-barlow text-xl text-center font-semibold">{selectedProject.title}</h4>
                        <p className="text-white font-barlow text-sm text-center font-normal">{selectedProject.description}</p>
                        <span
                            onClick={handleClosePopup}
                            className="flex items-center gap-2 cursor-pointer text-white text-sm font-barlow font-semibold text-md transition-all ease-in-out duration-300"
                        >
                            <ArrowLeft size={24} />
                        </span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsArtallisPlus;
