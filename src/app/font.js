import localfont from "next/font/local";

export const integralCF = localfont({
    src: [
        {
            path: "../../public/fonts/IntegralCf/Fontspring-DEMO-integralcf-regular.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-integral-cf",
    display: "swap",
});