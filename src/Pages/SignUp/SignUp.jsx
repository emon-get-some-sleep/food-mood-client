import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const {createUser, updateUserProfile} = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photo)
      .then(() => {
        Swal.fire(
          'Registered successfully',
          'Welcome to Food Mood',
          'success'
        );
        reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      })

    })
    .catch(error => {
      console.log(error.message);
    })
  };

  // console.log(watch("name"));
  return (
    <>
    <Helmet>
      <title>Sign Up | Food Mood
      </title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {required: true})}
                placeholder="Name"
                className="input input-bordered"
              />
               {errors.name && <span className="text-red-500">Name field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo", {required: true})}
                placeholder="Photo URL"
                className="input input-bordered"
              />
               {errors.photo && <span className="text-red-500">photo URL field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {required: true})}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-500">Email field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {required: true, 
                  minLength: 6, 
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })}
                placeholder="password"
                className="input input-bordered"
              />
              
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {errors.password && <span className="text-red-500">Password is required</span>}
              {errors.password?.type == 'maxLength' && <span className="text-red-500">Password must be less than 20 characters</span>}
              {errors.password?.type == 'pattern' && <span className="text-red-500">Password must be have one uppercase, one lowercase, one number and one special character</span>}
            </div>
            <div className="form-control mt-6">
              
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
