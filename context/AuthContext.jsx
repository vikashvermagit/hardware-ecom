import useToast from "@/hooks/useToast";
import { auth, db, provider } from "@/libs/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userDoc, setUserDoc] = useState(null);
  const [userRole, setRole] = useState(null);
  const [favouriteMediaData, setFavMediadata] = useState([]);
  const [bookingData, setBookingData] = useState([]);

  const showToast = useToast();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        setRole("user");
        // const userDocRef = doc(collection(db, "Users"), user?.email);
        // getDoc(userDocRef).then((doc) => {
        //   if (doc.exists) {
        //     setUserDoc(doc.data());
        //   }
        // });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    console.log(user)
    return () => unsubscribe();
  }, []);

  const addFavMediadata = (data) => {
    if (!user) return;

    const isDuplicate = favouriteMediaData.some((item) => item.id === data.id);
    if (isDuplicate) {
      return;
    }

    let updatedBooking = { ...data, isLiked: true };

    const userDocRef = db
      .collection("Users")
      .doc(user.email)
      .collection("favourite")
      .doc(data?.id);

    userDocRef
      .set(updatedBooking)
      .then(() => {
        showToast("success", "Listing successfully added to your favorites.");

        setFavMediadata((prevData) => [...prevData, updatedBooking]);
      })
      .catch((error) => {
        console.error("Error adding document:", error);
        showToast(
          "error",
          "An error occurred while adding the listing to your favorites."
        );
      });
  };

  const getFavourites = async () => {
    if (!user) return;

    const userDocRef = await db
      .collection("Users")
      .doc(user.email)
      .collection("favourite");

    await userDocRef
      .get()
      .then((snapshot) => {
        const favouriteMediaData = snapshot.docs.map((doc) => doc.data());

        setFavMediadata(favouriteMediaData);
      })
      .catch((error) => {
        console.error("Error fetching favouriteMediaData:", error);
        showToast("error", "An error occurred while fetching your favorites.");
      });
  };

  const removeFavMediaData = (id) => {
    if (!user) return;

    const userDocRef = db
      .collection("Users")
      .doc(user.email)
      .collection("favourite");

    userDocRef
      .doc(id)
      .delete()
      .then(() => {
        setFavMediadata((prevData) =>
          prevData.filter((item) => item.id !== id)
        );
        showToast(
          "success",
          "Listing successfully removed from your favorites."
        );
      })
      .catch((error) => {
        console.error("Error removing document:", error);
        showToast(
          "error",
          "An error occurred while removing the listing from your favorites."
        );
      });
  };

//   useEffect(() => {
//     if (user) {
//       const userDocRef = db
//         .collection("Users")
//         .doc(user.email)
//         .collection("favourite");
//       userDocRef
//         .get()
//         .then((snapshot) => {
//           const favouriteMediaData = snapshot.docs.map((doc) => doc.data());
//           setFavMediadata(favouriteMediaData);
//         })
//         .catch((error) => {
//           console.error("Error fetching favouriteMediaData:", error);
//         });
//     }
//   }, [user]);

  const updateBookingData = (data) => {
    setBookingData(data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        userRole,
        userDoc,
        favouriteMediaData,
        getFavourites,
        addFavMediadata,
        removeFavMediaData,
        setFavMediadata,
        updateBookingData,
        bookingData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const signInWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // return userCredential.user;
  } catch (e) {
    console.error(e.code);
    return e.code;
  }
};

export const signUp = async (email, password, phone, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      const userDocRef = doc(collection(db, "Users"), email);
      await setDoc(userDocRef, { name, email, phone });
    }
    // return userCredential.user;
  } catch (e) {
    console.error(e.code);
    return e.code;
  }
};

export const SignOut = async () => {
  try {
    await auth.signOut();
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const UserAuth = () => {
   return  useContext(AuthContext)
}

export const signInWithGoogle = async () => {
  try {
    const userCredential = await auth.signInWithPopup(provider);
    return userCredential.user;
  } catch (e) {
    console.error(e);
    return null;
  }
};
