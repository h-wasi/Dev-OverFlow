"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";

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
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.action";

const type: any = "create";

function Questions() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      tags: [],
      explanation: "",
    },
  });
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, field: any) {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        } else {
          form.trigger();
        }
      }
    }
  }
  function handleBadgeRemove(tag: string, field: any) {
    const newTag = field.value.filter((t: string) => t !== tag);
    form.setValue("tags", newTag);
  }
  async function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    setIsSubmitting(true);
    // add request functionality
    try {
      await createQuestion({});
      //make async call---> create question ---------a call that contain all form data
      //navigate to homepage
    } catch (err) {
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900 mb-6">Ask a Question</h1>
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
                  <>
                    <Editor
                      apiKey={
                        process.env.NEXT_PUBLIC_PUBLIC_TINY_EDITOR_API_KEY
                      }
                      onInit={(evt, editor) => {
                        //@ts-ignore
                        editorRef.current = editor;
                      }}
                      onBlur={field.onBlur}
                      onEditorChange={(content) => field.onChange(content)}
                      initialValue=""
                      init={{
                        height: 350,
                        menubar: false,
                        plugins: [
                          "advlist",
                          "autolink",
                          "lists",
                          "link",
                          "image",
                          "charmap",
                          "print",
                          "preview",
                          "anchor",
                          "searchreplace",
                          "visualblocks",
                          "codesample",
                          "fullscreen",
                          "insertdatetime",
                          "media",
                          "table",
                        ],
                        toolbar:
                          "undo redo | " +
                          "codesample | bold italic forecolor | alignleft aligncenter | " +
                          "alignright alignjustify | bullist numlist |",
                        content_style:
                          "body { font-family:Helvetica,Inter,sans-serif; font-size:16px }",
                      }}
                    />
                  </>
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
                  <>
                    <Input
                      placeholder="Add tags..."
                      className="no-focus paragraph-regular background-light800_dark300 light-border-2 min-h-[56px] border"
                      onKeyDown={(e) => handleKeyDown(e, field)}
                    />
                    {field.value.length > 0 && (
                      <div className="flex-start mt-2.5 gap-2.5">
                        {field.value.map((tag: any) => (
                          <Badge
                            key={tag}
                            onClick={() => handleBadgeRemove(tag, field)}
                            className="subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                          >
                            {tag}
                            <Image
                              src={"/assets/icons/close.svg"}
                              width={12}
                              height={12}
                              alt="close"
                              className="invert-0 cursor-pointer object-contain dark:invert"
                            />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500 ">
                  Add up to 3 tags to describe what your question is about. You
                  need to press enter to add a tag.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="primary-gradient w-fit !text-light-900"
          >
            {isSubmitting ? (
              <>{type === "edit" ? "editing....." : "posting....."}</>
            ) : (
              <>{type === "edit" ? "Edit Qestion" : "Ask a Question"}</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Questions;
