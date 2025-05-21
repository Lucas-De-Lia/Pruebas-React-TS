import { useState } from "react";



export const useForm = <T>(initialFormState:T) => {
    const [formState, setFormState] = useState(initialFormState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return {
        formState,
        handleInputChange
    }
}
