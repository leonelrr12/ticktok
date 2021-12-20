import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppInput } from "../components/AppInput";
import { signUp } from "../store/user";
import { AppButton } from "../theme";
import { UserFormLayout } from './UserFormLayout'

export const SignUp = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await dispatch(
        signUp(
            { credentials: data }
        )
    )
    navigate("/videos")
  }

  const onErrors = (errors) => console.error(errors);

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <AppInput type="text" label="Nombre de Usuario" name="username"  register={register} />
        <AppInput type="email" label="Correo Eletronico" name="email" register={register} />
        <AppInput type="password" label="Contraseña" name="password"  register={register} />
        <AppButton type="submit" small>Crear cuenta</AppButton>
      </form>
    </UserFormLayout>
  );
};