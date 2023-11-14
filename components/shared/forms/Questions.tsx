"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionsSchema } from "@/lib/validation";

// export function ProfileForm() {
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }
// }

function Questions() {
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      tags: [],
      explanation: "",
    },
  });
  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    console.log(values);
  }
  return (
    <div>
      {/* <h1 className="h1-bold text-dark100_light900">Ask a Question</h1> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-10"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light500">
                  Question Title <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  <Input
                    {...field}
                    className="no-focus paragraph-regular background-light800_dark300 light-border-2 min-h-[56px] border"
                  />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500 ">
                  Be specific and imagine you&apos;re asking aquestion to
                  another person.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="explanation"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="paragraph-semibold text-dark400_light500">
                  Detailed explanation of your problem
                  <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  {/* <Input
                    {...field}
                    className="no-focus paragraph-regular background-light800_dark300 light-border-2 min-h-[56px] border"
                  /> */}
                  {/* TODO: add text editor later....... */}
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500 ">
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light500">
                  Question Title <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  <Input
                    placeholder="Add tags..."
                    {...field}
                    className="no-focus paragraph-regular background-light800_dark300 light-border-2 min-h-[56px] border"
                  />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500 ">
                  Add up to 3 tags to describe what your question is about. You
                  need to press enter to add a tag.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default Questions;
