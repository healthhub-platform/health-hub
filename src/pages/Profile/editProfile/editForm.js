import { useForm } from "react-hook-form"; 
import * as yup from "yup";
import './editProfile.css'

export const EditForm = () => {

    const schema = yup.object().shape({
        bio: yup.string().required("You must add a bio"),
        education: yup.string().required("You must add an educational institution")
    });
    return (
        <form>
            <textarea placeholder="User Bio"/>
            <input placeholder="Most Recent Education"/> 
            <input type="submit" />
        </form>
    );
};
