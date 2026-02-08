
 // Funzione per creare card app
function createAppCard(app) {
    // Verifica se l'icona è un URL o un emoji
    const iconContent = app.icon.startsWith('http') || app.icon.startsWith('/') || app.icon.startsWith('.') 
        ? `<img src="${app.icon}" alt="${app.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">` 
        : app.icon;
    
    return `
        <div class="app-card">
            <div class="app-icon">${iconContent}</div>
            <h3 class="app-name">${app.name}</h3>
            <p class="app-description">${app.description}</p>
            <div class="app-actions">
                ${app.website && app.website !== "null" ? `<a href="${app.website}" class="btn btn-secondary" target="_blank">Visita Sito</a>` : ''}
                ${app.download && app.download !== "null" ? `<a href="${app.download}" class="btn btn-primary" target="_blank">Download</a>` : ''}
            </div>
            ${app.webapp && app.webapp !== "null" ? `<a href="${app.webapp}" class="web-app-link" target="_blank">Visita la Web App →</a>` : ''}
        </div>
    `;
}

        // Popola le categorie
        document.getElementById('popular-apps').innerHTML = apps.popular.map(createAppCard).join('');
        document.getElementById('social-apps').innerHTML = apps.social.map(createAppCard).join('');
        document.getElementById('utility-apps').innerHTML = apps.utility.map(createAppCard).join('');
        document.getElementById('productivity-apps').innerHTML = apps.productivity.map(createAppCard).join('');

        // Imposta i link esterni
        document.getElementById('whatsappBtn').href = externalLinks.whatsapp;
        document.getElementById('privacyLink').href = externalLinks.privacy;
        document.getElementById('termsLink').href = externalLinks.terms;
        document.getElementById('githubLink').href = externalLinks.github;