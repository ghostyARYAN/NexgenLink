import { GalleryVerticalEnd } from "lucide-react"
import LoginForm from "./_components/login-form"
import Image from "next/image"
import Link from "next/link"


export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs grid gap-4 place-items-center">
            <Link href="/" className="flex items-center gap-2 font-medium">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="size-10"
              />
              <span className="text-2xl font-bold">NextGenLink</span>
            </Link>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
