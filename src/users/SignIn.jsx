import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppInput } from "../components/AppInput";
import { signIn } from "../store/user";
import { AppButton } from "../theme";
import { UserFormLayout } from './UserFormLayout'

export const SignIn = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(
      signIn(
        { credentials: data }
      )
    )
  }

  const onErrors = (errors) => console.error(errors);

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <AppInput type="email" label="Correo Eletronico" name="email" register={register} />
        <AppInput type="password" label="Contraseña" name="password"  register={register} />
        <AppButton type="submit" small>Inicar Sesión</AppButton>
      </form>
    </UserFormLayout>
  );
};