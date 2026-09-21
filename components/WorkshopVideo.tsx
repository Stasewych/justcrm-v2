/**
 * Відео з проведеного воркшопу. Вертикальний кадр 9:16 з телефона, тому живе
 * у власній колонці, а не на всю ширину.
 *
 * Обробка зроблена наполовину в ffmpeg (приглушена насиченість під палітру
 * сайту), наполовину тут: градієнт і підпис лишаються розміткою, щоб текст
 * був чіткий на будь-якому екрані й редагувався без перекодування файлу.
 */

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function WorkshopVideo() {
  return (
    <figure className="relative w-full max-w-[420px] mx-auto lg:mx-0">
      <div className="relative overflow-hidden bg-[#1c1c1c]">
        <video
          className="w-full h-auto block"
          width={720}
          height={1280}
          poster={`${bp}/images/workshop-poster.webp`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Воркшоп з практичного застосування AI для команди EVERLEGAL"
        >
          <source src={`${bp}/video/workshop.webm`} type="video/webm" />
          <source src={`${bp}/video/workshop.mp4`} type="video/mp4" />
        </video>

        {/* Градієнт під підпис */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(28,28,28,0.92) 0%, rgba(28,28,28,0.55) 45%, rgba(28,28,28,0) 100%)",
          }}
          aria-hidden="true"
        />

        <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-white/50 mb-2">
            EVERLEGAL · 11.09.2026
          </p>
          <p className="text-white text-[15px] lg:text-base font-medium leading-snug">
            Воркшоп з практичного застосування AI
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
