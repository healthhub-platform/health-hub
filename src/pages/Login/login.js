import { auth, provider } from "../../config/firebase"; 
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";

export const Login = () => {

    const navigate = useNavigate();
    const signInWithGoogle = async () =>{
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        addUserToFirestore(user);
        navigate('/');
    };
    return(
        <div> 
            <p>Sign In with Google to continue</p>
            <button onClick={signInWithGoogle}>Sign in With Google </button>
        </div>

    );
};


const addUserToFirestore = (user) => {
    const userRef = db.collection("users").doc(user.uid);
  
    // Set user data in the Firestore collection
    userRef.set({
      displayName: user.displayName,
      email: user.email,
      // Add more user-related data as needed
    })
    .then(() => {
      console.log("User data added to Firestore");
    })
    .catch((error) => {
      console.error("Error adding user data to Firestore: ", error);
    });
  };