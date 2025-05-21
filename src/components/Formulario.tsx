import { useForm } from "../hooks/useForm";
interface FormState {
    email: string;
    name: string;
}

export const Formulario = () => {
    const { formState, handleInputChange } = useForm<FormState>({
        email: '',
        name: ''
    });
    const { email, name } = formState;

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={handleInputChange}
            />
        </div>
        <pre>{}</pre>
    </form>
  )
}
