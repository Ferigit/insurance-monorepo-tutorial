'use client';

import { Button } from '@tutorial/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Values = { name: string; insurance: string };

export function DemoForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>();

  async function onSubmit() {
    setStatus('idle');
    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 400));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="name">نام فرضی</label>
        <input
          id="name"
          autoComplete="off"
          placeholder="مثلاً: نام نمونه"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name', {
            required: 'نام فرضی را وارد کنید.',
            validate: (value) =>
              value.trim().length > 0 || 'نام فرضی را وارد کنید.',
          })}
        />
        {errors.name && (
          <p id="name-error" className="error" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="insurance">موضوع مورد علاقه</label>
        <select
          id="insurance"
          defaultValue=""
          aria-invalid={!!errors.insurance}
          aria-describedby={errors.insurance ? 'insurance-error' : undefined}
          {...register('insurance', { required: 'یک موضوع انتخاب کنید.' })}
        >
          <option value="" disabled>
            انتخاب کنید
          </option>
          <option value="health">بیمه درمان</option>
          <option value="vehicle">بیمه خودرو</option>
          <option value="other">سایر موضوعات</option>
        </select>
        {errors.insurance && (
          <p id="insurance-error" className="error" role="alert">
            {errors.insurance.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'در حال بررسی…' : 'بررسی فرم نمونه'}{' '}
        <span aria-hidden="true">←</span>
      </Button>
      <div aria-live="polite" className="status">
        {status === 'success' && (
          <p className="success">
            فرم نمونه با موفقیت بررسی شد. اطلاعاتی ارسال نشده است.
          </p>
        )}
        {status === 'error' && (
          <p className="error">بررسی انجام نشد؛ دوباره تلاش کنید.</p>
        )}
      </div>
    </form>
  );
}
