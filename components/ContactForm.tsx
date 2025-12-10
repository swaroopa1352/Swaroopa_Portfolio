"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Please enter a message (10+ chars)")
});
type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "not-configured">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.status === 404) {
        setStatus("not-configured");
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
      <label className="grid gap-1">
        <span className="text-sm">Name</span>
        <input
          type="text"
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register("name")}
          className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
          placeholder="Your name"
        />
        {errors.name && <span className="text-xs text-red-600">{errors.name.message}</span>}
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Email</span>
        <input
          type="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register("email")}
          className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
          placeholder="you@example.com"
        />
        {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Message</span>
        <textarea
          rows={5}
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register("message")}
          className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
          placeholder="How can I help?"
        />
        {errors.message && <span className="text-xs text-red-600">{errors.message.message}</span>}
      </label>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
        {status === "success" && <span className="text-sm text-emerald-600">Message sent!</span>}
        {status === "error" && <span className="text-sm text-red-600">Something went wrong.</span>}
        {status === "not-configured" && <span className="text-sm text-amber-600">Email service not configured yet. Please contact via email or social links.</span>}
      </div>
    </form>
  );
}
