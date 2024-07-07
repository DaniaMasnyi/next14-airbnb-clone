"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";

const RegisterModal = () => {
  const registerModal = useRegisterModal(); // Виправлено назву змінної
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose(); // Виправлено використання registerModal
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen} // Виправлено використання registerModal
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose} // Виправлено використання registerModal
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Додано тіло модального вікна */}
      <div>
        <input
          id="name"
          {...register("name")}
          placeholder="Name"
          disabled={isLoading}
        />
        <input
          id="email"
          {...register("email")}
          placeholder="Email"
          disabled={isLoading}
        />
        <input
          id="password"
          {...register("password")}
          placeholder="Password"
          type="password"
          disabled={isLoading}
        />
      </div>
    </Modal>
  );
};

export default RegisterModal;
