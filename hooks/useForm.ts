"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export function useForm<T extends Record<string, string>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(onSubmit: (values: T) => Promise<void>) {
    return async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      await onSubmit(values);
      setIsSubmitting(false);
    };
  }

  return { values, isSubmitting, handleChange, handleSubmit };
}
