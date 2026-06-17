import { createSystem, defaultConfig, defineConfig, type Color } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand:{
                    100: {value: "#EAFBEB"},
                    500: {value: "#C9F8C1"},
                },
            },

            fonts: {
                heading: {value: "'Plus Jakarta Sans' , sans-serif"},
                body: {value: "'Plus Jakarta Sans' , sans-serif"},
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
                    subtle: {value: "{colors.brand.100}"}, // buttons
                    solid: {value: "{colors.brand.500}"},
                    focusRing: {value: "{colors.brand.500}"},
                    emphasized: {value: "{colors.brand.600}"},
                    fg: {value: "{colors.brand.700}"},
                    muted: {value: "{colors.brand.100}"},
                    contrast: {value: "black"},
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
