import { ArrowLeftIcon } from "lucide-react";
import PropTypes from "prop-types";

const ModalTeam = ({ isOpen, onClose, member, backgroundColor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div
        className="p-2 sm:p-6 rounded-lg lg:rounded-full w-full max-w-[600px] h-full max-h-[600px] flex-center"
        style={{ backgroundColor: backgroundColor }}
      >

        <div className="flex-col-center p-4">
          <div>
            <h2 className="text-xl font-bold font-barlow text-black text-center">{member.name}</h2>
            <h3 className="text-md font-semibold font-barlow text-black text-center">{member.position}</h3>
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
