import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';
import { registerUserRequest } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Error from '../../components/UI/Error';
import styles from './styles.module.scss';

import logo from '../../assets/img/logo.png';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name field is required'),
  lastName: yup.string().required('Last Name field is required'),
  email: yup
    .string()
    .email('Please write valid email address')
    .required('Email field is required'),
  birthDate: yup.string().required('Birthday field is required'),
  sex: yup.string().required('Choose your gender'),
  jsExperience: yup.string().required('JS experience field is required'),
  reactExperience: yup.string().required('React experience field is required'),
  password: yup
    .string()
    .required('Password field is required')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
  
  const isPending = useSelector((state) => state.auth && state.auth.isPending)
  
  function onSubmit(data) {
    dispatch(registerUserRequest(data)).then((res) => {
      if (!res) return;
      history.push('/sign-in')
    })
  }
  
  return (
    <div className={styles.signUp}>
      <Container>
        <div className={styles.card}>
          <div className={styles['card__logo']}>
            <img src={logo} alt="logo" />
            <span>Team Builder</span>
          </div>
          <h1>Create a new Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className="txt-label">First Name</label>
            <input
              id="firstName"
              name="firstName"
              className={`txt-field ${errors.firstName?.message ? 'has-error' : null}`}
              placeholder="First Name"
              ref={register}
            />
            <Error show={errors.firstName?.message}>{ errors.firstName?.message }</Error>
  
            <label htmlFor="lastName" className="txt-label">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              className={`txt-field ${errors.lastName?.message ? 'has-error' : null}`}
              placeholder="Last Name"
              ref={register}
            />
            <Error show={errors.lastName?.message}>{ errors.lastName?.message }</Error>
  
            <label htmlFor="email" className="txt-label">Email</label>
            <input
              id="email"
              name="email"
              className={`txt-field ${errors.email?.message ? 'has-error' : null}`}
              placeholder="Email"
              ref={register}
            />
            <Error show={errors.email?.message}>{ errors.email?.message }</Error>
  
            <label htmlFor="birthDate" className="txt-label">Birthday Date</label>
            <input
              id="birthDate"
              name="birthDate"
              className={`txt-field ${errors.birthDate?.message ? 'has-error' : null}`}
              placeholder="XXX-XX-XX"
              ref={register}
            />
            <Error show={errors.birthDate?.message}>{ errors.birthDate?.message }</Error>
  
            <label className="txt-label">Choose your Gender</label>
            <select
              name="sex"
              id="sex"
              className={`txt-field ${errors.sex?.message ? 'has-error' : null}`}
              ref={register}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <Error show={errors.sex?.message}>{ errors.sex?.message }</Error>
  
            <label htmlFor="jsExperience" className="txt-label">JavaScript Experience</label>
            <input
              id="jsExperience"
              name="jsExperience"
              className={`txt-field ${errors.jsExperience?.message ? 'has-error' : null}`}
              placeholder="JavaScript Experience months"
              ref={register}
            />
            <Error show={errors.jsExperience?.message}>{ errors.jsExperience?.message }</Error>
  
            <label htmlFor="reactExperience" className="txt-label">React Experience</label>
            <input
              id="reactExperience"
              name="reactExperience"
              className={`txt-field ${errors.reactExperience?.message ? 'has-error' : null}`}
              placeholder="React Experience months"
              ref={register}
            />
            <Error show={errors.reactExperience?.message}>{ errors.reactExperience?.message }</Error>
  
            <label htmlFor="password" className="txt-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className={`txt-field ${errors.password?.message ? 'has-error' : null}`}
              placeholder="Password"
              ref={register}
            />
            <Error show={errors.password?.message}>{ errors.password?.message }</Error>
  
            <input
              className={styles['btn-submit']}
              value="Sign Up"
              type="submit"
              disabled={isPending}
            />
          </form>
          <p className={styles.txt}>Already have an account? <Link to="/sign-in">Sign In</Link></p>
        </div>
      </Container>
    </div>
  );
}

export default SignUp;
