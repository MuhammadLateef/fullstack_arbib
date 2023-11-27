"use client";
import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModel from "@/app/hooks/useRegisterModels";
import { Models } from "./Models";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { toast } from "react-hot-toast/headless";
import { Button } from "../Button";
import { AiFillGithub } from "react-icons/ai";
export const RegisterModel = () => {
  const registerModule = useRegisterModel();
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
    axios.post("/api/register", data)
      .then(() => {
        registerModule.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong..");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Heading
        title="Wellcome to Airbub"
        subtitle="Create an account"
        // center
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        Icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with GitHub"
        Icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="">Already have an account ?</div>
          <div
            onClick={registerModule.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Models
      disabled={isLoading}
      isOpen={registerModule.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModule.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
