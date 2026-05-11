import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-28 pb-8 bg-white">
          <div className="max-w-3xl mx-auto px-8">
            <h1 className="text-3xl lg:text-[40px] font-bold tracking-tight mb-3">
              {title}
            </h1>
            <p className="text-sm text-black/40">{subtitle}</p>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 prose prose-sm prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-lg prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-base prose-h3:mt-6 prose-p:text-[14px] prose-p:leading-relaxed prose-p:text-black/55 prose-li:text-[14px] prose-li:text-black/55 prose-strong:text-black/70">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
