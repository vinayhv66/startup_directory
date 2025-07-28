'user server'

import { auth } from "@/app/auth"
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { writeClient } from "./write-client";
import { error } from "console";

export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string
) => {
  try {
    const session = await auth();
    if (!session)
      return parseServerActionResponse({
        error: 'Not signed in',
        status: 'ERROR',
      });

    const { title, description, category, link } = Object.fromEntries(
      Array.from(form).filter(([key]) => key !== 'pitch')
    );
    const slug = slugify(title as string, { lower: true, strict: true });
    
    try {
      const startup ={
        title,
        description,
        category,
        image :link,
        slug:{
          _type:slug,
          current:slug,
        },
       author:{
        _type:'reference',
        _ref:session?._id,
       },
       pitch, 
      };
      const result = await writeClient.create({_type:'startup', ...startup});
      return parseServerActionResponse({
        ...result,
        error:'',
        status:'SUCCESS',
    }

  } catch (error) {
    console.log(error);
    return parseServerActionResponse({ error:JSON.stringify(error), status: 'ERROR' });
  }
};