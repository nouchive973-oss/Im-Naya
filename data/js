Fichier JS :app.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("LOCKSHOO — Agent IA chargé");

    // --- Affirmation du Jour (unique par jour) ---
    const affirmationEl = document.querySelector(".affirmation-day");
    if (affirmationEl) {
        const affirmations = [
            "Âme précieuse, ton sang est fort. Tes locks sont ta couronne naturelle.",
            "Ta chevelure est un lien sacré, tes locks dansent avec les vents de tes ancêtres.",
            "Chaque mèche a une connexion profonde avec tes racines. Respecte-la, elle te parle.",
            "Tes locks ne sont pas un style, elles sont un état d’âme, une résistance douce.",
            "Tu n’as pas besoin de dompter tes cheveux. Ils sont naturels, libres, comme toi.",
            "Le monde peut ne pas comprendre tes locks, mais elles te comprennent, elles.",
            "Tes locks sont l'héritage transmis par tes ancêtres méritants. Porte-les avec fierté.",
            "Tu n’es pas en retard. Ton parcours capillaire est parfaitement aligné.",
            "Tes cheveux sont vivants. Ils respirent, ils sentent, ils te protègent.",
            "Un jour sans peur, c’est un jour où tu as aimé tes locks telles qu’elles sont.",
            "Tes locks sont des égrégores sacrés. Ce que tu y attaches devient énergie. Choisis avec sagesse.",
            "Tu n’es pas un problème à résoudre. Tes cheveux sont la réponse à ta Puissance née.",
            "Chaque brin est une victoire. Chaque mèche, une mémoire.",
            "Tu n’as pas à justifier tes locks. Elles existent. Elles sont justes. Elles sont TOI",
            "Laisse-les vivre. Laisse-les pousser. Laisse-les parler.",
            "Tes locks ne sont pas en désordre. Elles sont en révolution.",
            "Tes Locks ne font pas Sales,Elles sont PURES. Tu es sacré et Lumineux.",
            "Ton cuir chevelu est un temple. Chaque racine, est ton refuge, ta lignée.",
            "Tu n’as pas besoin de les montrer. Tu n’as pas besoin de les cacher. Elles sont libres.",
            "Aujourd’hui, je choisis de les aimer. Même si personne d’autre ne le fait.",
            "Je libère la voix de celle qui disait 'c’est moche'. Mes locks sont belles.",
            "Je ne suis pas en transition. Je suis en transformation."
        ];

        const today = new Date();
        const seed = today.getDate() + today.getMonth() * 31 + today.getFullYear() * 12;
        const index = seed % affirmations.length;

        affirmationEl.innerHTML = `<p><strong>"${affirmations[index]}"</strong></p>`;
    }

    // --- Défi 21 Jours ---
    const defiContainer = document.getElementById("defi-container");
    if (defiContainer) {
        fetch("/data/defi.json")
            .then(r => r.json())
            .then(data => {
                defiContainer.innerHTML = "";
                data.forEach(jour => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `
                        <h3>Jour ${jour.jour} : ${jour.titre}</h3>
                        <p><strong>Affirmation :</strong> "${jour.affirmation}"</p>
                        <p><strong>Soin :</strong> ${jour.soin}</p>
                        <p><strong>Conseil :</strong> ${jour.conseil}</p>
                    `;
                    defiContainer.appendChild(card);
                });
            })
            .catch(() => {
                defiContainer.innerHTML = `
                    <div class="card">
                        <p><strong>Erreur :</strong> Impossible de charger le défi. Vérifiez que <code>/data/defi.json</code> est bien déployé.</p>
                    </div>
                `;
            });
    }
});


netlify/fonctions

