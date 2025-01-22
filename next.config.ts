import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/", // Ruta ra z
                destination: "/home", // Ruta a la que quieres redirigir
                permanent: true, // Cambiar a false si la redirecci n no es definitiva
            },
        ];
    },
};

export default nextConfig;