// export const oidcSettings = JSON.parse(process.env.VUE_APP_OIDC_CONFIG)

const APP_URL = `${window.location.protocol}//${window.location.host}${process.env.BASE_URL}`;

export const oidcSettings = {
    authority: "https://auth.rzab.de/auth/realms/rzab",
    clientId: "eventvisitor",
    scope: 'openid profile email',
    // responseType: 'id_token token',
    responseType: 'code',
    automaticSilentRenew: true,
    automaticSilentSignin: false,
    redirectUri: `${APP_URL}/auth/callback`,
    popupRedirectUri: `${APP_URL}/auth/popup-callback`,
    silentRedirectUri: `${APP_URL}/silent-renew-oidc.html`,
}