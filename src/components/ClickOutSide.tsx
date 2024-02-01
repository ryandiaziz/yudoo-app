import React, { useState, useRef, useEffect } from "react";

// Define your modal component
const MyModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="borr m-32">
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            {showModal && (
                <div className="modal borr w-40" ref={modalRef}>
                    <h2>My Modal</h2>
                    {/* Other modal content */}
                    <button onClick={() => setShowModal(false)}>Close Modal</button>
                </div>
            )}
        </div>
    );
};

export default MyModal;
