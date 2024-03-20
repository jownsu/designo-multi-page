
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { form_validation } from "./forrmSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from "classnames";
import * as Form from "@radix-ui/react-form";
import BGCirclePatternDesktop from "@/public/images/contact/desktop/bg-pattern-hero-desktop.svg";
import BGCirclePatternMobile from "@/public/images/contact/mobile/bg-pattern-hero-contact-mobile.svg";

type ContactFormData = z.infer<typeof form_validation>;

const ContactForm = () => {
    const {register, control, handleSubmit, formState: errors} = useForm<ContactFormData>({
        resolver: zodResolver(form_validation)
    });

    const handleOnSubmit = handleSubmit( async(data) => {
   
        try {
            //do data api submission here.
    
        } catch (error) {
            //do error handling here.
        }
    });

    return (
        <div className="text-white overflow-hidden bg-primary py-[72px] flex flex-col lg:flex-row min-h-[375px] md:rounded-lg md:px-14 relative">
            <BGCirclePatternDesktop className="fill-inherit z-0 absolute top-[-135px] left-0 hidden sm:left-[-120px] sm:top-[-100px] md:block"/>
            <BGCirclePatternMobile className="fill-inherit z-0 absolute sm:hidden top-[-1px] left-[-90px]"/> 
            <div className="flex flex-col text-center px-4 mb-12 md:text-left z-10">
                <h1 className="text-3xl mb-6">Contact Us</h1>
                <p className="text-base font-light">Ready to take it to the next level? Let&apos;s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that&apos;s relatable to your users, drop us a line.</p>
            </div>
            <Form.Root autoComplete="off" onSubmit={handleOnSubmit} className="flex flex-col gap-3 px-6 w-full z-10">
                <Form.Field name="name" >
                    <input type="text" className={classNames({ input_fields: true })} {...register("name")} placeholder="Name" />
                </Form.Field>
                <Form.Field name="email" >
                    <input type="email" className={classNames({ input_fields: true })} placeholder="Email"/>
                </Form.Field>
                <Form.Field name="phone" >
                    <input type="tel" className={classNames({ input_fields: true })} placeholder="Phone"/>
                </Form.Field>
                <Form.Field name="message" >
                    <textarea className={classNames({ input_fields: true, "resize-none":true, "overflow-hidden": true })} placeholder="Message"/>
                </Form.Field>
                <Form.Submit className="bg-white text-black_1 w-[152px] h-14 rounded-lg mx-auto md:ml-auto opacity-100 hover:opacity-90">
                    SUBMIT           
                </Form.Submit>
            </Form.Root>
        </div>
    )
}

export default ContactForm