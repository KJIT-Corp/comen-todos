// import { useNavigate } from "react-router-dom";
// import { updateUsername } from "../adapters/user-adapter";

// export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const [user, error] = await updateUsername(Object.fromEntries(formData));
//     // If our user isn't who they say they are
//     // (an auth error on update) log them out
//     // We added the httpStatus as a custom cause in our error
//     if (error?.cause > 400 && error?.cause < 500) {
//       setCurrentUser(null);
//       return navigate('/');
//     }

//     setCurrentUser(user);
//     event.target.reset();
//   };

//   return <form onSubmit={handleSubmit} aria-labelledby="update-heading">
//     <h2 id="update-heading">Update User {currentUser.username} </h2>
//     <label htmlFor='username'>New Username</label>
//     <input type='text' id='username' name='username' />
//     <input type="hidden" name="id" value={currentUser.id} />

//     <button>Update Username</button>
//   </form>;
// }

//Josh changes//

// import { useNavigate } from "react-router-dom";
// import { updateUsername } from "../adapters/user-adapter";
// import "./UpdateUsernameForm.css";

// export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const [user, error] = await updateUsername(Object.fromEntries(formData));

//     if (error?.cause > 400 && error?.cause < 500) {
//       setCurrentUser(null);
//       return navigate("/");
//     }

//     setCurrentUser(user);
//     event.target.reset();
//   };

//   return (
//     <form
//       className="update-form"
//       onSubmit={handleSubmit}
//       aria-labelledby="update-heading"
//     >
//       <h2 id="update-heading" className="form-heading">
//         Update Username:{" "}
//         <span className="username">{currentUser.username}</span>
//       </h2>

//       <div className="form-group">
//         <label htmlFor="username" className="form-label">
//           New Username
//         </label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           className="form-input"
//           required
//         />
//       </div>

//       <input type="hidden" name="id" value={currentUser.id} />

//       <button className="form-button">Update Username</button>
//     </form>
//   );
// }

//josh changes 2//
import { useNavigate } from "react-router-dom";
import { updateUsername } from "../adapters/user-adapter";
import "./UpdateUsernameForm.css";

export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data = Object.fromEntries(formData);
    const obj = {
      id: currentUser.id,
      username: data.username,
      email: currentUser.email,
      age: currentUser.age,
      zipcode: currentUser.zipcode,
    };
    const [user, error] = await updateUsername(obj);

    if (error?.cause > 400 && error?.cause < 500) {
      //setCurrentUser(null);
      // return navigate("/");
      console.log("Error condition ran");
    }
    setCurrentUser(user);
    event.target.reset();
  };

  return (
    <form
      className="update-form"
      onSubmit={handleSubmit}
      aria-labelledby="update-heading"
    >
      <h2 id="update-heading" className="form-heading">
        Update Username:{" "}
        <span className="username">{currentUser.username}</span>
      </h2>

      <div className="form-group">
        <label htmlFor="username" className="form-label">
          New Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          required
        />
      </div>

      <input type="hidden" name="id" value={currentUser.id} />

      <button className="form-button" type="submit">
        Update Username
      </button>
    </form>
  );
}
