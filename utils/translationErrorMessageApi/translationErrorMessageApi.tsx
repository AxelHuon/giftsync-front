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

export const translationForgotPasswordErrorMessageApi = (
  errorCodeMessage: string,
) => {
  switch (errorCodeMessage) {
    case 'email_is_required':
      return "L'adresse e-mail est requise";
    case 'no_user_found':
      return 'Aucun utilisateur trouvé avec cette adresse e-mail';
    case 'error_sending_email':
      return "Erreur lors de l'envoi de l'e-mail de réinitialisation";
    case 'internal_server_error':
      return 'Erreur interne du serveur';
    default:
      return 'Erreur inconnue';
  }
};

export const translationResetPasswordErrorMessageApi = (
  errorCodeMessage: string,
) => {
  switch (errorCodeMessage) {
    case 'password_required':
      return 'Le nouveau mot de passe est requis';
    case 'no_token_provided':
      return "Aucun jeton de réinitialisation n'a été fourni";
    case 'token_refresh_token':
      return 'Le jeton de réinitialisation a expiré. Veuillez faire une nouvelle demande de réinitialisation';
    case 'no_user_found':
      return 'Aucun utilisateur trouvé pour ce jeton de réinitialisation';
    case 'internal_server_error':
      return 'Erreur interne du serveur';
    default:
      return 'Erreur inconnue';
  }
};

export const translationSignupErrorMessageApi = (errorCodeMessage: string) => {
  switch (errorCodeMessage) {
    case 'email_already_exists':
      return 'Cette adresse e-mail est déjà associée à un compte';
    case 'internal_server_error':
      return 'Erreur interne du serveur';
    default:
      return 'Erreur inconnue';
  }
};
