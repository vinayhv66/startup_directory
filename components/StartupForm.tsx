'use client';
import React, { useState,useActionState } from 'react'
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { Button } from './button';
import { Send } from 'lucide-react';

import { formSchema } from '@/lib/validation';
import {z} from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';
import { createPitch } from '@/sanity/lib/actions';
const StartupForm = () => {
  const [errors,setErrors]= useState<Record<string,string>>({});
  const [pitch,setPitch] = useState("");
  const {toast} = useToast();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues={
        title : formData.get ("title") as string,
        pitch,
        description:formData.get("description") as string,
        link: formData.get("link") as string,
        category: formData.get("category")
      }
      await formSchema.parseAsync(formValues);
     const result = await createPitch(prevState,formData,pitch);
     console.log(result);
     if(result.status=='SUCCES'){
      toast({
        title: "SUCCES",
        description: "Your startup pitch has been submitted successfully",
        variant: "destructive"
      });
      router.push (href:`/startup/${result._id}`);
     }
 return result;
     

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive"
        });
        return {
          ...prevState,
          error: "Validation failed",
          status: "ERROR"
        };
      }
      toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive"
      });
      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR"
      };
     }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });
  return (
  <form action={formAction} className='startup-form'>
<div>
  <label htmlFor="title" className='startup-form_lable '>
    Title
    </label>
  <Input 
  id="title" 
  name="title" className='startup-form_input' required placeholder='Startup Title'
  />
  {
  errors.title &&
   <p className='startup-form_error'>
    {errors.title}
    </p>
    }
</div>
<div>
  <label htmlFor="description" className='startup-form_lable '>
    Description
    </label>
  <Textarea
  id="description" 
  name="description" className='startup-form_textarea' required placeholder='Startup Descripton'
  />
  {
  errors.description &&
   <p className='startup-form_error'>
    {errors.description}
    </p>
    }
</div>
<div>
  <label htmlFor="category" className='startup-form_lable '>
    Category
    </label>
  <Input 
  id="category" 
  name="category" className='startup-form_input' required placeholder='Startup Category(Tech ,Health,Education ...)'
  />
  {
  errors.category &&
   <p className='startup-form_error'>
    {errors.category}
    </p>
    }
</div>
<div>
  <label htmlFor="link" className='startup-form_lable '>
    Image Url
    </label>
  <Input 
  id="link" 
  name="link" className='startup-form_input' required placeholder='Startup Image URL'
  />
  {
  errors.link &&
   <p className='startup-form_error'>
    {errors.link}
    </p>
    }
</div>
<div data-color-modee ="light">
  <label htmlFor="pitch" className='startup-form_lable '>
   Pitch
    </label>
     <MDEditor
     value={pitch}
     onChange={(value)=>setPitch(value as string)}
     id='pitch'
     preview='edit'
     height={300}
     style={{borderRadius:20,overflow:"hidden"}}
     textareaProps={{
      placeholder:'briefly describe your idea and what problem it solves ',
     }}
     previewOptions={{
      disallowedElements:['style'],
     }}
     />

  {
  errors.pitch &&
   <p className='startup-form_error'>
    {errors.pitch}
    </p>
    }
</div>
<Button type='submit'className='startup-form_btn text-white' disabled={isPending}>
  {isPending?"Submitting...":"submit your Pitch" }
  <Send className='size-6 ml-2'/>
</Button>
  </form>
  );
};
export default StartupForm;
