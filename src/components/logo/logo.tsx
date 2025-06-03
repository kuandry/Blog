import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
    return (
        <Link href="/" title="Página Inicial">
            <Image
                alt="Logo"
                width={116}
                height={32}
                src="/logo.svg"
            />
        </Link>
    )
}