import Link from "next/link";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  tag: string;
  readTime: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg border border-black/5 mb-4">
        <img
          src={`${bp}${post.image}`}
          alt={post.title}
          className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <span className="inline-block font-mono text-[10px] font-medium uppercase tracking-wider text-black/35 mb-2">
        {post.tag}
      </span>
      <h3 className="text-[17px] font-semibold leading-snug tracking-tight group-hover:text-black/60 transition-colors mb-2">
        {post.title}
      </h3>
      <p className="text-[13px] text-black/40 leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={`${bp}/images/logo.png`}
          alt="JustCRM"
          className="w-6 h-6 rounded-full"
        />
        <div className="flex items-center gap-2 text-[12px] text-black/35">
          <span className="font-medium text-black/50">Станіслав Маринович</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
