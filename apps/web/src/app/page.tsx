import { DemoForm } from '../features/demo-form/demo-form';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="shell header-content">
          <span className="brand">
            <span className="brand-mark" aria-hidden="true">
              ب
            </span>{' '}
            نمونه بیمه
          </span>
          <span className="header-note">نمونه اولیه</span>
        </div>
      </header>
      <main id="main" className="shell main">
        <div className="intro">
          <span className="eyebrow">آغاز یک تجربه ساده‌تر</span>
          <h1>
            برای روزهای پیش رو،
            <br />
            <span>آسوده‌تر برنامه‌ریزی کنید.</span>
          </h1>
          <p>
            این صفحه پایه‌ای برای ساخت تجربه خدمات بیمه است. فرم زیر فقط برای
            نمایش عملکرد طراحی شده است.
          </p>
          <div className="notice">
            <span aria-hidden="true">✳</span>
            <div>
              <strong>یک محیط آزمایشی</strong>
              <p>
                اطلاعاتی ارسال یا ذخیره نمی‌شود و این فرم درخواست بیمه ثبت
                نمی‌کند.
              </p>
            </div>
          </div>
        </div>
        <section className="form-card" aria-labelledby="form-title">
          <div className="card-top">
            <span className="card-icon" aria-hidden="true">
              ✦
            </span>
            <span className="badge">نمایش محلی</span>
          </div>
          <h2 id="form-title">آشنایی با فرم نمونه</h2>
          <p className="card-description">
            برای بررسی فرم، اطلاعات فرضی وارد کنید.
          </p>
          <DemoForm />
        </section>
      </main>
      <footer className="shell footer">
        <span>نمونه بیمه</span>
        <span>نمونه اولیه رابط کاربری</span>
      </footer>
    </>
  );
}
