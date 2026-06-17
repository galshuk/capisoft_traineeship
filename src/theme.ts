import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand:{
                    100: {value: "#EAFBEB"},
                    500: {value: "#C9F8C1"},
                },
                // accent:{
                //     500: {}
                // },
            },

            fonts: {
                heading: {value: "'Plus Jakarta Sans' , sans-serif"},
                body: {value: "'Plus Jakarta Sans' , sans-serif"}
            },

            fontSizes: {
                xs: { value: "12px" },
                sm: {value: "14px"},
                md: {value: "16px"},
                lg: {value: "20px"},
                xl: {value: "24px"},
            },

            fontWeights: {
                normal:   { value: 400 },
                medium:   { value: 500 },
                semibold: { value: 600 },
                bold:     { value: 700 },
            },

        },
        semanticTokens : {
            colors: {
                brand: {
                    solid: {value: "{colors.brand.500}"},
                    contrast: {value: "{colors.brand.900}"},
                    fg: {value: "{colors.brand.700}"},
                    muted: {value: "{colors.brand.100}"},
                    subtle: {value: "{colors.brand.100}"},
                    emphasized: {value: "{colors.brand.600}"},
                    focusRing: {value: "{colors.brand.500}"},
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
