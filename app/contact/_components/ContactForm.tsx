"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { contact_schema } from "../../_schema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import * as Form from "@radix-ui/react-form";
import BGCirclePatternDesktop from "@/public/images/contact/desktop/bg-pattern-hero-desktop.svg";
import BGCirclePatternMobile from "@/public/images/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import Button from "@/app/_components/Button";
import { FaCircleExclamation } from "react-icons/fa6";
import { KeyboardEvent, useState } from "react";
import { z } from "zod";
import { AttentionSeeker } from "react-awesome-reveal";

type ContactFormData = z.infer<typeof contact_schema>;

const ContactForm = () => {
    const [error_message, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contact_schema),
    });

    const handleNumberOnly = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!/^[0-9 ]*$/.test(event.key) && event.key !== "Backspace") {
            event.preventDefault();
        }
    };

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            alert("Submitted");
            reset();
            if (!response.ok)
                throw new Error("There was an error in network response!");
        } catch (error) {
            //do error handling here.
            setErrorMessage("An unexpected error occurred.");
        }
    };

    return (
        <div className="text-white md:mx-[40px] overflow-hidden bg-primary py-[54px] flex flex-col md:items-center lg:flex-row min-h-[483px] sm:rounded-[15px] sm:px-14 relative">
            <BGCirclePatternDesktop className="fill-inherit z-0 absolute hidden sm:left-[-120px] sm:top-[-100px] lg:top-[-135px] lg:left-[-10px] sm:block" />
            <BGCirclePatternMobile className="fill-inherit z-0 absolute sm:hidden top-[-1px] left-[-90px]" />
            <div className="flex flex-col text-center px-4 mb-12 md:text-left z-10">
                <h1 className="text-5xl font-medium mb-8">Contact Us</h1>
                <p className="text-base">
                    Ready to take it to the next level? Let&apos;s talk about
                    your project or idea and find out how we can help your
                    business grow. If you are looking for unique digital
                    experiences that&apos;s relatable to your users, drop us a
                    line.
                </p>
            </div>
            <Form.Root
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className=" relative flex md:min-w-[445px] flex-col gap-3 px-6 w-full z-10"
            >
                <Form.Field name="name">
                    <input
                        type="text"
                        {...register("name")}
                        className={classNames({ input_fields: true })}
                        placeholder="Name"
                    />
                    {errors.name && (
                        <AttentionSeeker
                            effect="shakeX"
                            className={classNames({
                                form_validation: true,
                                "top-[20px]": true,
                            })}
                        >
                            <Form.Message className="flex flex-row gap-2">
                                {errors.name?.message}
                                <FaCircleExclamation size={20} />
                            </Form.Message>
                        </AttentionSeeker>
                    )}
                </Form.Field>
                <Form.Field name="email">
                    <input
                        type="email"
                        {...register("email")}
                        className={classNames({ input_fields: true })}
                        placeholder="Email"
                    />
                    {errors.email && (
                        <AttentionSeeker
                            effect="shakeX"
                            className={classNames({
                                form_validation: true,
                                "top-[90px]": true,
                            })}
                        >
                            <Form.Message className="flex flex-row gap-2">
                                {errors.email?.message}
                                <FaCircleExclamation size={20} />
                            </Form.Message>
                        </AttentionSeeker>
                    )}
                </Form.Field>
                <Form.Field name="phone">
                    <input
                        type="text"
                        pattern="[0-9]*"
                        onKeyDown={handleNumberOnly}
                        {...register("phone")}
                        className={classNames({ input_fields: true })}
                        placeholder="Phone"
                    />
                    {errors.phone && (
                        <AttentionSeeker
                            effect="shakeX"
                            className={classNames({
                                form_validation: true,
                                "top-[157px]": true,
                            })}
                        >
                            <Form.Message className="flex flex-row gap-2">
                                {errors.phone?.message}
                                <FaCircleExclamation size={20} />
                            </Form.Message>
                        </AttentionSeeker>
                    )}
                </Form.Field>
                <Form.Field name="message">
                    <textarea
                        {...register("message")}
                        className={classNames({
                            input_fields: true,
                            "resize-none": true,
                            "overflow-hidden": true,
                        })}
                        placeholder="Message"
                    />
                    {errors.message && (
                        <AttentionSeeker
                            effect="shakeX"
                            className={classNames({
                                form_validation: true,
                                "top-[260px]": true,
                            })}
                        >
                            <Form.Message className="flex flex-row gap-2">
                                {errors.message?.message}
                                <FaCircleExclamation size={20} />
                            </Form.Message>
                        </AttentionSeeker>
                    )}
                </Form.Field>
                <Form.Submit asChild>
                    <Button
                        variant="secondary"
                        className="md:ml-auto md:mx-0 mx-auto"
                    >
                        SUBMIT
                    </Button>
                </Form.Submit>
            </Form.Root>
        </div>
    );
};

export default ContactForm;
