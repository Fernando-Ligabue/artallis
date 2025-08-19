import { ArrowLeftIcon } from "lucide-react";
import PropTypes from "prop-types";

const ModalTeam = ({ isOpen, onClose, member, backgroundColor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50" onClick={onClose}>
      <div
        className="p-2 sm:p-6 rounded-lg lg:rounded-full w-full max-w-[580px] h-full max-h-[580px] flex-center"
        style={{ backgroundColor: backgroundColor }}
      >

        <div className="flex-col-center p-4">
          <div>
            <h2 className="text-xl font-bold font-barlow text-black text-center">{member.name}</h2>
          {/* <ul className="font-barlow text-sm text-center font-normal text-black">
              {member.positions.map((position, index) => (
                <li key={index}>{position}</li>
              ))}
            </ul> */}

          </div>

          <p className="mt-4 text-black font-barlow text-center mb-2 sm:mb-10 text-sm">{member.description}</p>

          <button
            onClick={onClose}
            className="text-black flex items-center gap-4"
          >
            <ArrowLeftIcon size={24}/> Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

ModalTeam.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  member: PropTypes.object,
  backgroundColor: PropTypes.string
};

export default ModalTeam;
