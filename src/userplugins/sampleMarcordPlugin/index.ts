import definePlugin from "@utils/types";

export default definePlugin({
    name: "SampleMarcordPlugin",
    description: "Exemple de plugin Marcord personnalisé pour macOS",
    authors: [{
        name: "Marc",
        id: 0n
    }],

    start() {
        console.log("[Marcord] SampleMarcordPlugin démarré avec succès !");
    },

    stop() {
        console.log("[Marcord] SampleMarcordPlugin arrêté !");
    }
});
