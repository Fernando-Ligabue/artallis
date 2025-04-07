import { useState } from 'react';
import ModalTeam from './ModalTeam';
import { equipaArtallis } from '@/lib/constants';

const GridTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleMemberClick = (member) => {
    const colors = [
      "#cc6699", "#03abe5", "#f2921a", "#bbce00", "#79ccf3", "#fccd00",
      "#cc6699", "#03abe5", "#f2921a", "#bbce00", "#79ccf3", "#fccd00",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setSelectedMember(member);
    setBackgroundColor(randomColor);  
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-14 mt-20">
        {equipaArtallis.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => handleMemberClick(item)} 
          >
            <img
              src={item.photo}
              alt={item.name}
              className="w-36 h-36 object-cover object-center mb-2 border-2 border-artMidBlue-50 rounded-full"
            />
            <h2 className="font-barlow text-xl font-bold text-black">{item.name}</h2>
            <h3 className="font-barlow text-md font-bold text-black">{item.position}</h3>
          </div>
        ))}
      </div>

      <ModalTeam
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        member={selectedMember}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export default GridTeam;
