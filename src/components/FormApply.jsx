import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Loader } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import InputContact from './InputContact';
import TextAreaContact from './TextAreaContact';
import PropTypes from 'prop-types';

const FormApply = ({ onFormSubmitSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'Admissões',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            setFormData(prevState => ({
                ...prevState,
                file: file
            }));
        } else {
            toast.error("Somente arquivos PDF ou DOCX são permitidos.");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('subject', formData.subject);
        if (formData.file) {
            formDataToSend.append('file', formData.file);
        }

        try {
            await axios.post("https://sender2.vercel.app/apply", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success("Mensagem enviada com sucesso!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                subject: "Admissões",
                file: null,
            });

            if (onFormSubmitSuccess) {
                onFormSubmitSuccess();
            }
        } catch (error) {
            console.error(error)
            toast.error("Algo correu mal! Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container min-h-[75vh] flex flex-col items-center justify-center overflow-hidden p-4" id='contact'>
            <div className='w-full max-w-screen-lg mx-auto flex flex-col gap-8 p-4'>
                <div className="w-full max-w-7xl mt-2 p-6 flex flex-col md:flex-row justify-between items-start gap-14 bg-artLightBlue-50/40 rounded-xl overflow-hidden">
                    <div className='w-full flex flex-col gap-6'>
                        <h3 className='w-full text-left text-2xl mb-4 text-white font-semibold font-barlow'>Candidaturas | Admissões</h3>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-start items-start gap-4'>
                            <InputContact
                                id="name"
                                name="name"
                                type="text"
                                label="Nome"
                                htmlFor="name"
                                value={formData.name}
                                onChange={handleChange} />
                            <InputContact
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                htmlFor="email"
                                value={formData.email}
                                onChange={handleChange} />
                            <InputContact
                                id="phone"
                                name="phone"
                                type="text"
                                label="Telefone"
                                htmlFor="phone"
                                value={formData.phone}
                                onChange={handleChange} />
                            <div className="w-full">
                                <Select
                                    value={formData.subject}
                                    onValueChange={(value) => setFormData((prevState) => ({ ...prevState, subject: value }))}
                                    className="form-input"
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecione o assunto" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Assunto</SelectLabel>
                                            <SelectItem value="Admissões">Admissões</SelectItem>
                                            <SelectItem value="Emprego">Emprego</SelectItem>
                                            <SelectItem value="Voluntariado">Voluntariado</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-full">
                                <TextAreaContact
                                    id="message"
                                    name="message"
                                    label="Mensagem"
                                    htmlFor="message"
                                    value={formData.message}
                                    onChange={handleChange} />
                            </div>
                            <div className="w-full flex flex-col items-center justify-center">
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer w-full p-2 border-2 border-dashed border-gray-300 rounded-md text-center transition duration-200 ease-in-out"
                                >
                                    <span className='text-sm text-white'>Escolher ficheiro (.doc, pdf) máx 1mb</span>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        name="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </label>
                                {formData.file && <div className='flex items-center gap-2 text-white'><p>Ficheiro carregado: </p><span className='text-white'>{formData.file.name}</span></div>}
                            </div>
                            <div className="btn">
                                <button
                                    className={`w-32 flex-center px-4 py-2 rounded-md bg-artDarkBlue-50 text-barlow text-white hover:animate-pulse border border-white ${loading ? 'cursor-not-allowed' : ''}`}
                                    type='submit'
                                >
                                    {loading ? <Loader className='text-white animate-spin' /> : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

FormApply.propTypes = {
    onFormSubmitSuccess: PropTypes.func
}

export default FormApply;
