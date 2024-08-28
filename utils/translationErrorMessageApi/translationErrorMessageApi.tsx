export const translationSigninErrorMessageApi = (errorCodeMessage: string) => {
  switch (errorCodeMessage) {
    case 'internal_server_error':
      return 'Erreur interne du serveur';
    case 'error_signIn_combination':
      return "Combinaison incorrecte d'adresse mail et de mot de passe";
    case 'email_and_password_required':
      return 'Adresse mail et mot de passe requis';
    default:
      return 'Erreur inconnue';
  }
};
