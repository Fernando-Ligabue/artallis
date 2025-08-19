import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Loader } from 'lucide-react';
import InputContact from './InputContact';
import TextAreaContact from './TextAreaContact';
import PropTypes from 'prop-types';

const FormContact = ({ onFormSubmitSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        honeyPot: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (formData.honeyPot && formData.honeyPot.trim() !== '') {
                toast.error("Envio inválido.");
                setLoading(false);
                return;
            }

            if (!formData.name || formData.name.length < 5 || formData.name.length > 50) {
                toast.error("O nome deve ter entre 5 e 50 caracteres.");
                setLoading(false);
                return;
            }

            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
                toast.error("Formato de email inválido.");
                setLoading(false);
                return;
            }

            if (!formData.phone || !/^\+?[1-9]\d{1,14}$/.test(formData.phone) || formData.phone.length < 9 || formData.phone.length > 15) {
                toast.error("Telefone inválido.");
                setLoading(false);
                return;
            }

            if (!formData.message || formData.message.length < 15 || formData.message.length > 1000) {
                toast.error("A mensagem deve ter entre 15 e 1000 caracteres.");
                setLoading(false);
                return;
            }

            await axios.post("https://sender2.vercel.app/send_email", {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            });

            toast.success("Mensagem de contacto enviada com sucesso!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                honeyPot: "",
            });

            if (onFormSubmitSuccess) {
                onFormSubmitSuccess();
            }
        } catch (error) {
            console.log(error)
            toast.error("Algo correu mal! Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container min-h-[75vh] flex flex-col items-center justify-center overflow-hidden p-4" id='contact'>
            <div className='w-full max-w-screen-lg mx-auto flex flex-col gap-8 p-4'>
                <div className="w-full max-w-6xl mt-2 p-6 flex flex-col md:flex-row justify-between items-start gap-14 bg-artLightBlue-50/40 rounded-xl overflow-hidden">
                    <div
                        className='w-full flex flex-col gap-6'>
                        <h3 className='w-full text-left text-2xl mb-4 text-white font-semibold font-barlow'>Contacte-nos</h3>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-start items-start gap-4'>
                            <InputContact
                                id="name"
                                name="name"
                                type="text"
                                label="Nome"
                                htmlFor="name"
                                value={formData.name}
                                onChange={handleChange} />
                            <div className="w-full">
                                <InputContact
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    htmlFor="email"
                                    value={formData.email}
                                    onChange={handleChange} />
                            </div>
                            <div className="w-full">
                                <InputContact
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    label="Telefone"
                                    htmlFor="phone"
                                    value={formData.phone}
                                    onChange={handleChange} />
                            </div>
                            <div className="w-full hidden sr-only">
                                <input
                                    id="honeyPot"
                                    name="honeyPot"
                                    type="text"
                                    value={formData.honeyPot}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    aria-hidden="true"
                                />
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
                            <div
                                className="btn"
                            >
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

FormContact.propTypes = {
    onFormSubmitSuccess: PropTypes.func
}


export default FormContact;
