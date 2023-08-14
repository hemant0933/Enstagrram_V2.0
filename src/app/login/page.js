"use client";
import { useMemo, useState } from "react";
import useForm from "../../../hooks/useForm";
import { AiFillGoogleSquare } from "react-icons/ai";
import Lottie from "react-lottie-player";
import loginImage from "../../../public/animation_ll686799.json";
import instsvg from "../../../public/Instagram_logo.svg.png";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setAuthState, setAuthUser } from "@/store/authSlice";

const login = () => {
  const [status, setStatus] = useState(false);
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  
  const { form, onChangeHandler,resetField } = useForm({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(form);
    if (status == false) {
      console.log("status == false");
      await loginFunction();
    } else {
      console.log("status == true");
      await signupFunction();
    }
  };

  const loginFunction = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("userData", userData);
        toast.success("sucess");
        dispatch(setAuthState(true));
        router.push("/Feed");
        setLoading(false)
      } else {
        setLoading(false)
        console.log("No such document");
        toast.error("No such document");
      }
    } catch (err) {
      setLoading(false)
      toast.error(err.message);
      console.log(err.message);
    }
  };

  const signupFunction = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
        form.Fullname,
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: form.email,
        uid: user.uid,
        fullname: form.Fullname,
      });
      dispatch(setAuthUser(user));
      toast.success("Successfully Signed in");
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
      setLoading(false);
    }
  };

  const isDisabled = useMemo(() => {
    return !Object.values(form).every((val) => !!val);
    // console.log(isFormCorrect)
  }, [form]);

  const handleChangeForm = () => {
    if (!status) setStatus(true);
    else setStatus(false);
  };

  const handleSignInWithGoogle = async () => {
    try{
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(auth,googleProvider)
        toast.success('Google login Successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
    }catch(error) {
      console.log(error.message);
      toast.error(errorMapping[err.code] || 'not able to login with google', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    }  
  }

  if(loading){
    return <div className="w-full h-screen flex justify-center items-center">
      <MoonLoader
      color="#fff"
      size={60}
      speedMultiplier={1}
      />
    </div>
  }

  return (
    <div className="w-full h-screen flex justify-evenly items-center">
      <div className="w-[40%] h-[60%]">
        <Lottie
          play
          loop
          mode="normal"
          animationData={loginImage}
          className="w-full h-full "
        />
      </div>

      <div className="w-[40%] flex flex-col space-y-5">
        {!status ? (
          <>
            <div
              className="w-3/5 h-4/5 px-10 flex flex-col bg-white 
           border rounded-md border-gray-300 p-10 space-y-5 text-black"
            >
              <form
                onSubmit={submitHandler}
                className="flex flex-col items-center space-y-5"
              >
                <div className="tracking-wider my-2">
                  <Image
                    width={170}
                    height={160}
                    src={instsvg}
                    alt="instagram"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={onChangeHandler}
                  value={form.email}
                  className="w-full bg-gray-100 hover:bg-transparent 
          focus:bg-transparent border rounded-sm focus:border-gray-400
          placeholder:text-sm px-2 py-1 outline-none"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={onChangeHandler}
                  value={form.password}
                  className="w-full bg-gray-100 hover:bg-transparent 
              focus:bg-transparent border rounded-sm focus:border-gray-400
              placeholder:text-sm px-2 py-1 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#0095F6] py-1 text-white active:scale-95 rounded
              transform transition w-full disabled:opacity-50 disabled:scale-100 
              text-sm font-semibold cursor-pointer"
                  disabled={isDisabled}
                >
                  Login
                </button>
              </form>
              <div className="w-full my-5 flex justify-center items-center space-x-2">
                <div className="h-[0.8px] w-full bg-[#DBDBDB]" />
                <div className="text-[#737373] px-2 text-sm font-semibold text-center">
                  OR
                </div>
                <div className="h-[0.8px] w-full bg-[#DBDBDB]" />
              </div>
              <div className="w-full cursor-pointer flex text-black items-center justify-center text-center">
                <AiFillGoogleSquare className="inline-block  text-2xl mr-2" />
                <span className="font-semibold  text-sm">
                  Log in with Google
                </span>
              </div>
              <div className="w-full text-center text-indigo-900 cursor-pointer text-xs">
                Forgot password?
              </div>
            </div>
            <div className="w-3/5 text-center rounded-md text-black bg-white border space-y-2 border-gray-300 py-5">
              <p>
                Don&apos;t have an account?{" "}
                <span
                  className="text-blue-600 ml-2 font-semibold inline-block cursor-pointer"
                  onClick={handleChangeForm}
                >
                  {" "}
                  Sign up
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div
              className="w-3/5 h-4/5 px-10 flex flex-col bg-white 
              border rounded-md border-gray-300 p-10 space-y-5 text-black"
            >
              <form
                onSubmit={submitHandler}
                className="flex flex-col items-center space-y-5"
              >
                <div className="tracking-wider my-2">
                  <Image
                    width={170}
                    height={160}
                    src={instsvg}
                    alt="instagram"
                  />
                </div>
                <input
                  type="text"
                  name="Fullname"
                  id="Fullname"
                  placeholder="Enter Fullname"
                  onChange={onChangeHandler}
                  value={form.Fullname}
                  className="w-full bg-gray-100 hover:bg-transparent 
                  focus:bg-transparent border rounded-sm focus:border-gray-400
                  placeholder:text-sm px-2 py-1 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={onChangeHandler}
                  value={form.email}
                  className="w-full bg-gray-100 hover:bg-transparent 
                  focus:bg-transparent border rounded-sm focus:border-gray-400
                  placeholder:text-sm px-2 py-1 outline-none"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={onChangeHandler}
                  value={form.password}
                  className="w-full bg-gray-100 hover:bg-transparent 
                  focus:bg-transparent border rounded-sm focus:border-gray-400
                  placeholder:text-sm px-2 py-1 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#0095F6] py-1 text-white active:scale-95 rounded
                  transform transition w-full disabled:opacity-50 disabled:scale-100 
                  text-sm font-semibold cursor-pointer"
                  disabled={isDisabled}
                >
                  Sign In
                </button>
              </form>
              <div className="w-full my-5 flex justify-center items-center space-x-2">
                <div className="h-[0.8px] w-full bg-[#DBDBDB]" />
                <div className="text-[#737373] px-2 text-sm font-semibold text-center">
                  OR
                </div>
                <div className="h-[0.8px] w-full bg-[#DBDBDB]" />
              </div>
              <div className="w-full cursor-pointer flex text-black items-center justify-center text-center" onClick={handleSignInWithGoogle}>
                <AiFillGoogleSquare className="inline-block  text-2xl mr-2" />
                <span className="font-semibold  text-sm">
                  Sign in with Google
                </span>
              </div>
            </div>
            <div className="w-3/5 text-center rounded-md text-black bg-white border space-y-2 border-gray-300 py-5">
              <p>
                Have an account?{" "}
                <span
                  className="text-blue-600 ml-2 font-semibold inline-block cursor-pointer"
                  onClick={handleChangeForm}
                >
                  Login
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default login;
