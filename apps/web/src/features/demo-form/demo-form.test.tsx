import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { DemoForm } from './demo-form';

describe('example form', () => {
  it('shows errors for missing input and completes locally with valid input', async () => {
    const user = userEvent.setup();
    render(<DemoForm />);
    await user.click(screen.getByRole('button', { name: /بررسی فرم نمونه/ }));
    expect(
      await screen.findByText('نام فرضی را وارد کنید.'),
    ).toBeInTheDocument();
    expect(screen.getByText('یک موضوع انتخاب کنید.')).toBeInTheDocument();
    await user.type(screen.getByLabelText('نام فرضی'), 'نمونه');
    await user.selectOptions(
      screen.getByLabelText('موضوع مورد علاقه'),
      'health',
    );
    await user.click(screen.getByRole('button', { name: /بررسی فرم نمونه/ }));
    expect(
      await screen.findByText(/اطلاعاتی ارسال نشده است/),
    ).toBeInTheDocument();
  });
});
