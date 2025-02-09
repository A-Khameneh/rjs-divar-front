const setCookie = tokens => {

    document.cookie = ` accessToken = ${ tokens.accessToken }; SameSite=Lax; max-age = ${ 1 * 24 * 60 * 60 } `;
    document.cookie = ` refreshToken = ${ tokens.refreshToken }; SameSite=Lax; max-age = ${ 30 * 24 * 60 * 60 } `;

}

export { setCookie };