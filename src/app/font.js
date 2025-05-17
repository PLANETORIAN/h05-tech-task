import localfont from "next/font/local";

export const integralCF = localfont({
    src: [
        {
            path: "../../public/fonts/IntegralCf/Fontspring-DEMO-integralcf-regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/IntegralCf/Fontspring-DEMO-integralcf-medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/IntegralCf/Fontspring-DEMO-integralcf-bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/IntegralCf/Fontspring-DEMO-integralcf-heavy.otf",
            weight: "800",
            style: "normal",
        }
    ],
    variable: "--font-integral-cf",
    display: "swap",
});

export const satoshi = localfont({
    src: [
        {
            path: "../../public/fonts/Satoshi/Satoshi-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi/Satoshi-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi/Satoshi-Bold.otf",
            weight: "700",
            style: "normal",
        }
    ],
    variable: "--font-satoshi",
    display: "swap",
});