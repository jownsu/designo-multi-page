
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { contact_schema } from "../../validationSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from "classnames";
import * as Form from "@radix-ui/react-form";
import BGCirclePatternDesktop from "@/public/images/contact/desktop/bg-pattern-hero-desktop.svg";
import BGCirclePatternMobile from "@/public/images/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import Button from "@/app/_components/Button";

type ContactFormData = z.infer<typeof contact_schema>;

const ContactForm = () => {
    const {register, control, handleSubmit, formState: { errors }} = useForm<ContactFormData>({
        resolver: zodResolver(contact_schema)
    });

    // const handleOnSubmit = handleSubmit( async(data) => {
    //     try {
    //         const response = await fetch("/api/contact", {
    //             method: "POST",
    //             headers: {
    //                 "Content-type": "application/json"
    //             },
    //             body: JSON.stringify(data)
    //         });

    //         if(!response.ok) throw new Error("There was an error in network response!");
            
    //     } catch (error) {
    //         //do error handling here.
    //         console.log(errors);
            
    //     }
    // });

   const onSubmit = () => alert("dqoidhqw");
  
    return (
        <div className="text-white overflow-hidden bg-primary py-[54px] flex flex-col md:items-center lg:flex-row min-h-[483px] sm:rounded-lg sm:px-14 relative">
            <BGCirclePatternDesktop className="fill-inherit z-0 absolute hidden sm:left-[-120px] sm:top-[-100px] lg:top-[-135px] lg:left-[-10px] sm:block"/>
            <BGCirclePatternMobile className="fill-inherit z-0 absolute sm:hidden top-[-1px] left-[-90px]"/> 
            <div className="flex flex-col text-center px-4 mb-12 md:text-left z-10">
                <h1 className="text-5xl font-medium mb-8">Contact Us</h1>
                <p className="text-base">Ready to take it to the next level? Let&apos;s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that&apos;s relatable to your users, drop us a line.</p>
            </div>
            <Form.Root autoComplete="off" onSubmit={onSubmit} className="flex md:min-w-[445px] flex-col gap-3 px-6 w-full z-10">
                <Form.Field asChild {...register("name")} >
                    <input type="text" className={classNames({ input_fields: true })} placeholder="Name" />
                </Form.Field>
                <Form.Field asChild {...register("email")} >
                    <input type="email" className={classNames({ input_fields: true })} placeholder="Email"/>
                </Form.Field>
                <Form.Field asChild {...register("phone")} >
                    <input type="tel" className={classNames({ input_fields: true })} placeholder="Phone"/>
                </Form.Field>
                <Form.Field asChild {...register("message")} >
                    <textarea className={classNames({ input_fields: true, "resize-none":true, "overflow-hidden": true })} placeholder="Message"/>
                </Form.Field>
                <Form.Submit asChild >
                    <Button variant="secondary" className="md:ml-auto md:mx-0 mx-auto" >
                        SUBMIT
                    </Button>  
                </Form.Submit>
            </Form.Root>
       
        </div>
    )
}

export default ContactForm;