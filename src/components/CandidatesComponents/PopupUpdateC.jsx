import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopupEditC = ({ onClose, mutate, candidates }) => {
    const [formData, setFormData] = useState({
        name: candidates.name,
        phone: candidates.phone,
        email: candidates.email,
        address: candidates.address,
        description: candidates.description,
        type: candidates.type,
    });

    useEffect(() => {
        setFormData({
            name: candidates.name,
            phone: candidates.phone,
            email: candidates.email,
            address: candidates.address,
            description: candidates.description,
            type: candidates.type,
        });
    }, [candidates]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/candidates/${candidates.id}`, formData);
            mutate();
            onClose();
        } catch (error) {
            console.error('Error al editar la vacante:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-xl mb-4">Editar Candidato</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Telefóno</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Correo</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 py-2 px-4 bg-gray-500 text-white rounded-md"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-600 text-white rounded-md"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupEditC;